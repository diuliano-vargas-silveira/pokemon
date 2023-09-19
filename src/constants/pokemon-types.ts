import {
  iconBug,
  iconDark,
  iconDragon,
  iconFairy,
  iconFighting,
  iconFlying,
  iconGhost,
  iconGround,
  iconIce,
  iconPoison,
  iconPsychic,
  iconRock,
  iconSteel,
  iconGrass,
  iconNormal,
  iconFire,
  iconWater,
  iconElectric
} from '../assets/index'

export type PokemonType =
  | 'grass'
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'fairy'
  | 'fighting'
  | 'flying'
  | 'ghost'
  | 'ground'
  | 'ice'
  | 'poison'
  | 'psychic'
  | 'rock'
  | 'steel'
  | 'normal'
  | 'fire'
  | 'water'
  | 'electric'

export const POKEMON_TYPES: { [key in PokemonType]: string } = {
  grass: iconGrass,
  bug: iconBug,
  dark: iconDark,
  dragon: iconDragon,
  fairy: iconFairy,
  fighting: iconFighting,
  flying: iconFlying,
  ghost: iconGhost,
  ground: iconGround,
  ice: iconIce,
  poison: iconPoison,
  psychic: iconPsychic,
  rock: iconRock,
  steel: iconSteel,
  normal: iconNormal,
  fire: iconFire,
  water: iconWater,
  electric: iconElectric
}
