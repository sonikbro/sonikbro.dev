import { headers } from 'next/headers'

const greetings = [
  { start: 5, end: 12, text: 'Good morning' },
  { start: 12, end: 18, text: 'Good afternoon' },
  { start: 18, end: 23, text: 'Good evening' },
]

function getGreeting(tz: string): string {
  let hour: number
  try {
    hour = parseInt(
      new Intl.DateTimeFormat('en-US', { hour: 'numeric', hour12: false, timeZone: tz }).format(new Date()),
      10,
    ) % 24
  } catch {
    return 'Aloha'
  }
  return greetings.find((g) => hour >= g.start && hour < g.end)?.text ?? 'Aloha'
}


export default async function Greeting() {
  const tz = (await headers()).get('x-vercel-ip-timezone') ?? 'UTC'
  return <span>{getGreeting(tz)}</span>
}
