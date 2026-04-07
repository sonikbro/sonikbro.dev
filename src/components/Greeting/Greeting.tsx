'use client'

const greetings = [
  { start: 5, end: 12, text: 'Good morning' },
  { start: 12, end: 18, text: 'Good afternoon' },
  { start: 18, end: 23, text: 'Good evening' },
]

function getGreeting() {
  const hour = new Date().getHours()
  return greetings.find(g => hour >= g.start && hour < g.end)?.text ?? 'Aloha'
}

export default function Greeting() {
  return <span suppressHydrationWarning>{getGreeting()}</span>
}
