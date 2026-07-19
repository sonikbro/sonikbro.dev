import fs from 'fs'
import path from 'path'
import { ImageResponse } from 'next/og'

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = 'image/png'
export const OG_ALT = 'sonikbro.dev'

const avatarSrc = `data:image/png;base64,${fs
  .readFileSync(path.join(process.cwd(), 'public/img/avatar.png'))
  .toString('base64')}`

export function renderOgImage(title: string, subtitle?: string): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0e1419',
          padding: 80,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatarSrc}
            width={120}
            height={120}
            alt=""
            style={{ borderRadius: '50%', border: '4px solid #ff9500' }}
          />
          <div style={{ display: 'flex', marginLeft: 28, fontSize: 32, fontWeight: 600, color: '#ff9500' }}>
            sonikbro.dev
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 64, fontWeight: 700, color: '#ffffff', lineHeight: 1.15 }}>
            {title}
          </div>
          {subtitle ? (
            <div style={{ display: 'flex', marginTop: 20, fontSize: 34, color: '#9aa5b1', lineHeight: 1.2 }}>
              {subtitle}
            </div>
          ) : null}
        </div>
        <div style={{ display: 'flex', width: 96, height: 10, backgroundColor: '#ff9500', borderRadius: 4 }} />
      </div>
    ),
    OG_SIZE,
  )
}
