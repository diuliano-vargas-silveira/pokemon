import { ReactElement } from 'react'
import { iconPokeball } from '../../assets'

import './loader.scss'

export function Loader(): ReactElement {
  return (
    <span className="loader">
      <img src={iconPokeball} alt="Pokeball" />
    </span>
  )
}
