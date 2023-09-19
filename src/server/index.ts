/* eslint-disable react-hooks/exhaustive-deps */
import { MainClient, Pokemon, NamedAPIResourceList } from 'pokenode-ts'
import { useMemo } from 'react'

const NUMBER_OF_POKEMONS_AHEAD: number = 40

export function useApi() {
  const api = new MainClient()

  async function getPokemonByName(name: string): Promise<Pokemon | undefined> {
    try {
      const response: Pokemon = await api.pokemon.getPokemonByName(name)

      return response
    } catch (error) {
      console.log(error)
    }

    return
  }

  async function getPokemonById(id: number): Promise<Pokemon | undefined> {
    try {
      const response: Pokemon = await api.pokemon.getPokemonById(id)

      return response
    } catch (error) {
      console.log(error)
    }

    return
  }

  async function getPokemons(
    offset: number = 0
  ): Promise<NamedAPIResourceList | undefined> {
    const limit = offset + NUMBER_OF_POKEMONS_AHEAD
    try {
      const response: NamedAPIResourceList = await api.pokemon.listPokemons(
        offset,
        limit
      )

      return response
    } catch (error) {
      console.log(error)
    }

    return
  }

  return useMemo(() => ({ getPokemonByName, getPokemonById, getPokemons }), [])
}
