import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes.tsx'
import { Page } from './page.tsx'

import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Page>
      <Routes />
    </Page>
  </React.StrictMode>
)
