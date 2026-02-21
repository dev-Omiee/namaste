import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeCart } from './cartActions';

const CartInitializer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const saved = localStorage.getItem('cartData');
        if (saved) {
            const parsed = JSON.parse(saved);
            dispatch(initializeCart(parsed)); // includes both cart & counts
        }
}, [dispatch]);

  return null;
};

export default CartInitializer;
