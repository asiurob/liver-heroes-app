import { heroes } from "../data";


// Find the hero by publisher, if the publisher is not valid, throw an error
export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" is not valid`);
    }
    return heroes.filter(hero => hero.publisher === publisher);
}