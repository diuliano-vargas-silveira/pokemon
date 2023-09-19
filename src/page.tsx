import { ReactElement } from 'react'
import { Footer, Header } from './components'

interface PageProps {
  children: ReactElement
}

export function Page({ children }: PageProps): ReactElement {
  return (
    <section className="page">
      <Header />
      <main className="page__main">{children}</main>
      <Footer />
    </section>
  )
}
