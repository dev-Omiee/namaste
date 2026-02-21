import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  DECREMENT_ITEM
} from './cartActions';

const cartMiddleware = store => next => action => {
  const result = next(action);

  switch (action.type) {
    case ADD_TO_CART:
    case REMOVE_FROM_CART:
    case DECREMENT_ITEM:
    case CLEAR_CART: {
      const { cart, counts } = store.getState().cart;
      localStorage.setItem('cartData', JSON.stringify({ cart, counts }));
      break;
    }

    default:
      break;
  }

  return result;
};

export default cartMiddleware;
