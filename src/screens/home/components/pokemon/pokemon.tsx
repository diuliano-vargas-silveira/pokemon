import { ReactElement } from 'react'
import { Pokemon } from 'pokenode-ts'
import { TagList } from '../../../../components'
import { useNavigate } from 'react-router-dom'

import './pokemon.scss'

interface PokemonCardProps {
  pokemon: Pokemon
}

const MAIN_TYPE_POKEMON_INDEX = 0

export function PokemonCard({ pokemon }: PokemonCardProps): ReactElement {
  const cardColor: string = pokemon.types[MAIN_TYPE_POKEMON_INDEX].type.name
  const navigate = useNavigate()

  function handleClickPokemon(): void {
    navigate(`/pokemon/${pokemon.name}`)
  }

  return (
    <button onClick={handleClickPokemon} className={`pokemon ${cardColor}`}>
      <img
        src={
          pokemon.sprites.other?.['official-artwork'].front_default as string
        }
        alt={pokemon.name}
        className="pokemon__sprite"
      />
      <footer className="pokemon__content">
        <strong className="pokemon__name">{pokemon.name}</strong>
        <TagList types={pokemon.types} />
      </footer>
    </button>
  )
}
