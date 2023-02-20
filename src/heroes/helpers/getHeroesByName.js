import { heroes } from '../data'

// Find the heroes by name
export const getHeroesByName = ( name = '' ) => {

    name = name.toLowerCase().trim();

    if ( name === '' )  return [];
    
    return heroes.filter( hero => hero.superhero.toLowerCase().trim().includes( name ) );

}