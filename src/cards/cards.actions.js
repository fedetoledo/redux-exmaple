export const GET_CARDS_REQUEST = 'GET_CARDS_REQUEST';
export const GET_CARDS_RESPONSE = 'GET_CARDS_RESPONSE';
export const GET_CARDS_ERROR = 'GET_CARDS_ERROR';

export const SELECT_CARD = 'SELECT_CARD';

const cards = {
    getCardsRequest: () => ({type: GET_CARDS_REQUEST}),
    getCardsResponse: response => ({type: GET_CARDS_RESPONSE, payload: response}),
    getCardsError: error => ({type: GET_CARDS_ERROR, payload: error}),

    getCurrentCard: cardId => ({type: SELECT_CARD, payload: cardId})
}

export default cards;