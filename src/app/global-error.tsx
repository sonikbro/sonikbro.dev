'use client'

import '../styles/globals.scss'

import ErrorView from '@components/ErrorView/ErrorView'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body>
        <header></header>
        <main>
          <ErrorView error={error} reset={reset} />
        </main>
        <footer></footer>
      </body>
    </html>
  )
}
