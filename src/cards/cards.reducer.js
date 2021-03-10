import {
    GET_CARDS_REQUEST,
    GET_CARDS_RESPONSE,
    GET_CARDS_ERROR,
    SELECT_CARD,
} from './cards.actions';

const initialState = {
    cards: [],
    currentCard: {},
    status: 'idle',
}

const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARDS_REQUEST: {
            return {...state, status: 'loading'}
        }
        case GET_CARDS_RESPONSE: {
            return {...state, status: 'idle', cards: action.payload}
        }
        case GET_CARDS_ERROR: {
            return {...state, status: 'error'}
        }
        case SELECT_CARD: {
            return {...state, currentCard: state.cards.find(card => card.id === action.payload)}
        }
        default:
            return state
    }
}

export default cardsReducer;