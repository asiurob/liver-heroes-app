import { heroes } from '../data'

// Find the hero by id
export const getHeroById = (id) => heroes.find(hero => hero.id === id)
