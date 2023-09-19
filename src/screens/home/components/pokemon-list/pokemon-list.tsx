import axios from 'axios'

import { NamedAPIResourceList, Pokemon } from 'pokenode-ts'
import { ReactElement, useEffect, useState } from 'react'

import { PokemonCard } from '../pokemon/pokemon'
import { Loader } from '../../../../components'

import { useApi } from '../../../../server'

import './pokemon-list.scss'

interface PokemonListProps {
  pokemons: NamedAPIResourceList | undefined
}

export function PokemonList({ pokemons }: PokemonListProps): ReactElement {
  const [pokemonsList, setPokemonsList] = useState<Pokemon[]>([])

  const { getPokemonByName } = useApi()

  useEffect(() => {
    async function getPokemons(): Promise<void> {
      if (pokemons?.results) {
        const newPokemonsList: Pokemon[] = await Promise.all(
          pokemons.results.map(async pokemon => {
            const response = await axios.get(pokemon.url)

            return response.data!
          })
        )

        setPokemonsList(newPokemonsList)
      }
    }

    getPokemons()
  }, [getPokemonByName, pokemons?.results, pokemonsList.length])

  if (!pokemonsList?.length) {
    return <Loader />
  }

  return (
    <div className="pokemon-list">
      {pokemonsList.map((pokemon: Pokemon, index: number) => (
        <PokemonCard pokemon={pokemon} key={index} />
      ))}
    </div>
  )
}
