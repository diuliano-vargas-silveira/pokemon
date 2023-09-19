import { ReactElement, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useApi } from '../../server'
import { Pokemon, PokemonStat } from 'pokenode-ts'
import { Loader, TagList } from '../../components'

import './pokemon-screen.scss'

export function PokemonScreen(): ReactElement {
  const [pokemon, setPokemon] = useState<Pokemon>()
  const { name } = useParams()
  const { getPokemonByName } = useApi()

  useEffect(() => {
    async function getPokemon(): Promise<void> {
      const response = await getPokemonByName(name!)

      if (response) {
        setPokemon(response)
      }
    }

    if (!pokemon) {
      getPokemon()
    }
  }, [getPokemonByName, name, pokemon])

  if (!pokemon) {
    return <Loader />
  }

  function renderStats(): ReactElement[] | undefined {
    if (pokemon?.stats) {
      return pokemon?.stats.map((stat: PokemonStat, index: number) => (
        <div key={index} className="pokemon-screen__stat">
          {stat.stat.name.replace('-', ' ')}: {stat.base_stat}
        </div>
      ))
    }
  }

  return (
    <section className="pokemon-screen">
      <img
        src={
          pokemon.sprites.other?.['official-artwork'].front_default as string
        }
        alt={pokemon.name}
      />
      <div className="pokemon-screen__content">
        <h1 className="pokemon-screen__title">{pokemon.name}</h1>
        <TagList types={pokemon.types} />
        <div className="pokemon-screen__stats">{renderStats()}</div>
      </div>
    </section>
  )
}
