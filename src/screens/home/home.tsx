import axios from 'axios'
import { ReactElement, useEffect, useState, useCallback } from 'react'
import { NamedAPIResourceList } from 'pokenode-ts'

import { useApi } from '../../server'

import { PokemonList } from './components'

import './home.scss'

const ADJUSTMENT = 200

export function Home(): ReactElement {
  const [pokemons, setPokemons] = useState<NamedAPIResourceList>()

  const { getPokemons } = useApi()

  useEffect(() => {
    async function getPokemonsList(): Promise<void> {
      const response = await getPokemons()
      setPokemons(response)
    }

    if (!pokemons) {
      getPokemonsList()
    }
  }, [getPokemons, pokemons])

  const handleScroll = useCallback(async () => {
    if (pokemons?.next) {
      const currentPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      const canGetPokemons =
        currentPosition + windowHeight + ADJUSTMENT >= documentHeight
      if (canGetPokemons) {
        const { data } = await axios.get(pokemons.next)
        console.log(data)

        setPokemons({
          ...data,
          results: [...pokemons.results, ...data.results]
        })
      }
    }
  }, [pokemons?.next, pokemons?.results])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <section className="home">
      <PokemonList pokemons={pokemons} />
    </section>
  )
}
