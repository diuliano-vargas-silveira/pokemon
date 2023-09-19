import { ReactElement } from 'react'

export function Header(): ReactElement {
  return (
    <header className="page__header">
      <a href="/" className="page__title">
        Pokemon
      </a>
    </header>
  )
}
