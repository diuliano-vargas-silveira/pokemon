import { ReactElement } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Home, PokemonScreen } from './screens'

export function Routes(): ReactElement {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/pokemon/:name',
      element: <PokemonScreen />
    }
  ])

  return <RouterProvider router={router} />
}
