import actions from '../actions';
import {services} from './cards.services';
import {
    GET_CARDS_REQUEST, GET_CURRENT_CARD,
} from './cards.actions';

const cardsMiddleware = ({dispatch, getState}) => next => action => {
    next(action);
    switch (action.type) {
        case GET_CARDS_REQUEST:
            services.getCards()
                .then(data => {
                    console.log('passing')
                    dispatch(actions.cards.getCardsResponse(data.cards));
                })
                .catch(error => {
                    dispatch(actions.cards.getCardsError(error))
                });
            break;
        default:
    }
}

export default cardsMiddleware;