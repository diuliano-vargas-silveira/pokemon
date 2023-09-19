import { ReactElement } from 'react'

import './tag.scss'
import { POKEMON_TYPES, PokemonType } from '../../constants'

interface TagProps {
  name: string
}

export function Tag({ name }: TagProps): ReactElement {
  const icon: string = POKEMON_TYPES[name as PokemonType]

  return (
    <span className={`tag ${name}`}>
      <img src={icon} alt={name} className="tag__image" />
      <span>{name}</span>
    </span>
  )
}
