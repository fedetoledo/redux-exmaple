import { combineReducers } from '@reduxjs/toolkit';
import cardsReducer from '../cards/cards.reducer';

const rootReducer = combineReducers({
    cardsReducer,
});

export default rootReducer;