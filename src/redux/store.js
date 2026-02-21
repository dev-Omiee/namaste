import { createStore, combineReducers, applyMiddleware } from 'redux';
import CartReducer from './cartReducer';
import cartMiddleware from './cartMiddleware';

const rootReducer = combineReducers({
  cart: CartReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(cartMiddleware)
);

export default store;
