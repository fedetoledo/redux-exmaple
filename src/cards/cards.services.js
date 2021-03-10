import { get } from '../utils/http';

const url = 'https://api.pokemontcg.io/v1/cards?setCode=swsh35';

export const services = {
    getCards: () => get(url)
}