import { NextRequest, NextResponse } from 'next/server';

const TOKEN_URL = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_URL = 'https://api.spotify.com/v1/me/player/currently-playing';
const REVALIDATE_SECONDS = 30;

type SpotifyTrack = {
  is_playing: boolean;
  currently_playing_type: 'track' | 'episode' | 'ad' | 'unknown';
  item: {
    name: string;
    artists: { name: string }[];
    album: { name: string; images: { url: string }[] };
    external_urls: { spotify: string };
  } | null;
};

const SAFE_HEADERS = {
  'Content-Type': 'application/json',
  'X-Content-Type-Options': 'nosniff',
  'Cache-Control': `public, s-maxage=${REVALIDATE_SECONDS}, stale-while-revalidate=60`,
};

const notPlaying = () =>
  NextResponse.json({ isPlaying: false }, { headers: SAFE_HEADERS });

let cachedToken: { value: string; expiresAt: number } | null = null;

async function getAccessToken(
  clientId: string,
  clientSecret: string,
  refreshToken: string
): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) {
    return cachedToken.value;
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
    cache: 'no-store',
  });

  if (!res.ok) throw new Error(`Spotify token request failed: ${res.status}`);
  const data = (await res.json()) as { access_token: string; expires_in: number };
  cachedToken = {
    value: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000,
  };
  return data.access_token;
}

function isSameOrigin(request: NextRequest): boolean {
  const referer = request.headers.get('referer');
  if (!referer) return true;
  try {
    return new URL(referer).host === request.headers.get('host');
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return NextResponse.json(
      { error: 'forbidden' },
      { status: 403, headers: SAFE_HEADERS }
    );
  }

  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env;
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
    return notPlaying();
  }

  try {
    const accessToken = await getAccessToken(
      SPOTIFY_CLIENT_ID,
      SPOTIFY_CLIENT_SECRET,
      SPOTIFY_REFRESH_TOKEN
    );
    const res = await fetch(NOW_PLAYING_URL, {
      headers: { Authorization: `Bearer ${accessToken}` },
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (res.status === 204 || res.status >= 400) return notPlaying();

    const song = (await res.json()) as SpotifyTrack;
    if (song.currently_playing_type !== 'track' || !song.item) return notPlaying();

    return NextResponse.json(
      {
        isPlaying: song.is_playing,
        title: song.item.name,
        artist: song.item.artists.map((a) => a.name).join(', '),
        album: song.item.album.name,
        albumImageUrl: song.item.album.images.at(-1)?.url ?? song.item.album.images[0]?.url,
        songUrl: song.item.external_urls.spotify,
      },
      { headers: SAFE_HEADERS }
    );
  } catch (err) {
    console.error('[now-playing]', err);
    return notPlaying();
  }
}
