import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  INITIALIZE_CART,
  DECREMENT_ITEM
} from './cartActions';

const initialState = {
  cart: [],
  counts: {},
  totalCost: 0
};

const calculateTotalCost = (cart, counts = {}) => {
  return cart.reduce((total, item) => {
    const quantity = counts[item.id] || 1;
    return total + item.price * quantity;
  }, 0);
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_CART: {
      const { cart, counts } = action.payload;
    
      // fallback for legacy or incorrect data
      const fixedCounts = counts || cart.reduce((acc, item) => {
        acc[item.id] = item.quantity || 1;
        return acc;
      }, {});
    
      return {
        ...state,
        cart,
        counts: fixedCounts,
        totalCost: calculateTotalCost(cart, fixedCounts),
      };
    }    

    case ADD_TO_CART: {
      const itemToAdd = action.payload;
      const existingItemIndex = state.cart.findIndex(item => item.id === itemToAdd.id);
      const newCounts = { ...state.counts };
      let newCart = [...state.cart];

      if (existingItemIndex >= 0) {
        // Already in cart — increment count
        newCounts[itemToAdd.id] = (newCounts[itemToAdd.id] || 1) + 1;
      } else {
        // New item
        newCart.push({ ...itemToAdd, quantity: 1 });
        newCounts[itemToAdd.id] = 1;
      }

      return {
        ...state,
        cart: newCart,
        counts: newCounts,
        totalCost: calculateTotalCost(newCart, newCounts)
      };
    }

    case REMOVE_FROM_CART: {
      const itemId = action.payload;
      const newCart = state.cart.filter(item => item.id !== itemId);
      const newCounts = { ...state.counts };
      delete newCounts[itemId];

      return {
        ...state,
        cart: newCart,
        counts: newCounts,
        totalCost: calculateTotalCost(newCart, newCounts)
      };
    }

    case DECREMENT_ITEM: {
      const itemId = action.payload;
      const currentCount = state.counts[itemId] || 1;
      const newCounts = { ...state.counts };
      let newCart = [...state.cart];

      if (currentCount <= 1) {
        newCart = newCart.filter(item => item.id !== itemId);
        delete newCounts[itemId];
      } else {
        newCounts[itemId] = currentCount - 1;
      }

      return {
        ...state,
        cart: newCart,
        counts: newCounts,
        totalCost: calculateTotalCost(newCart, newCounts)
      };
    }

    case CLEAR_CART: {
      return {
        ...state,
        cart: [],
        counts: {},
        totalCost: 0
      };
    }

    default:
      return state;
  }
}
