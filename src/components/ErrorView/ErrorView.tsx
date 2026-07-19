'use client'

import { useEffect } from 'react'
import BackLink from '@components/BackLink/BackLink'

export default function ErrorView({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section>
      <article style={{ textAlign: 'center' }}>
        <header>
          <hgroup>
            <h1>5 <span>😵</span> 0</h1>
            <h2>Oops! Something Went Wrong</h2>
          </hgroup>
        </header>
        <small>
          Sorry, an unexpected error occurred while rendering this page. Try again,
          or head back to the homepage.
        </small>
        <footer>
          <button onClick={reset}>Try again</button>
          <BackLink href="/" label="homepage" hard />
        </footer>
      </article>
    </section>
  )
}
