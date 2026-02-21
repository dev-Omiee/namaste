export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const INITIALIZE_CART = 'INITIALIZE_CART';
export const DECREMENT_ITEM = 'DECREMENT_ITEM';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});

export const decrementItem = (itemId) => ({
  type: DECREMENT_ITEM,
  payload: itemId,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const initializeCart = ({ cart, counts }) => ({
  type: INITIALIZE_CART,
  payload: { cart, counts },
});
