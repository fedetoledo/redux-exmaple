import cardsMiddleware from '../cards/cards.middleware';
import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from '../cards/cards.reducer';

export default configureStore({
  reducer: {
    cards: cardsReducer,
  },
  middleware: [cardsMiddleware]
});
