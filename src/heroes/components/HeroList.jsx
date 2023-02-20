import { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {

    // Memoize the result of the heroes
    const heroes =  useMemo( () => getHeroesByPublisher(publisher), [publisher] ) 
    return (
        <>
            <div className='row'>
                {
                    heroes.map( hero => (
                        <HeroCard key={hero.computated_id} { ... hero } />
                    ))
                }
            </div>
        </>
    )
}
