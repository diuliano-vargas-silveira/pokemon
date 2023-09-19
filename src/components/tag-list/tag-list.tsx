import { ReactElement } from 'react'
import { PokemonType } from 'pokenode-ts'
import { Tag } from '..'

import './tag-list.scss'

interface TagListProps {
  types: PokemonType[]
}

export function TagList({ types }: TagListProps): ReactElement {
  return (
    <div className="tag-list">
      {types.map((type: PokemonType, index: number) => (
        <Tag name={type.type.name} key={index} />
      ))}
    </div>
  )
}
