import { combineReducers } from 'redux'

import favoritesReducer  from './favoritesSlice';
import productsReducer from './productsSlice';

const rootReducer = combineReducers({
  productsReducer: productsReducer,
  favoritesReducer: favoritesReducer 
})

export default rootReducer