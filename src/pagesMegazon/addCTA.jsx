import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { addToCart, removeFromCart } from '../redux/cartActions';

export default function AddCTA({ product }) {
    const buttonRef = useRef(null);
    const dispatch = useDispatch();
    const router = useRouter();
    const [isInCart, setIsInCart] = useState(false);

    const cartItems = useSelector((state) => state.cart.cart);

    useEffect(() => {
        const productInCart = cartItems.some(item => item.id === product.id);
        setIsInCart(productInCart);
    }, [cartItems, product.id]);

    useEffect(() => {
        const buttonElements = buttonRef.current.querySelectorAll(".add-to-cart-button");

        const handleClick = (e) => {
            e.preventDefault();
            const button = e.currentTarget;

            if (isInCart) {
                // If already in cart, redirect to /cart
                router.push('/cart');
            } else {
                button.classList.add('added');
                dispatch(addToCart(product));
                setIsInCart(true);
            }
        };

        buttonElements.forEach(button => {
            button.addEventListener('click', handleClick);
        });

        return () => {
            buttonElements.forEach(button => {
                button.removeEventListener('click', handleClick);
            });
        };
    }, [isInCart, dispatch, product, router]); // <-- INCLUDE router

    return (
        <div className='addToCartCta' ref={buttonRef}>
            <div className="container">
                <button className={`add-to-cart-button ${isInCart ? 'added' : ''}`}>
                    {/* SVGs remain unchanged */}
                    <svg className="add-to-cart-box box-1" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect width="24" height="24" rx="2" fill="#ffffff" />
                    </svg>
                    <svg className="add-to-cart-box box-2" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect width="24" height="24" rx="2" fill="#ffffff" />
                    </svg>
                    <svg className="cart-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <svg className="tick" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="green" d="M0 0h24v24H0V0z" />
                        <path fill="#ffffff" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z" />
                    </svg>
                    <span className="add-to-cart">{isInCart ? 'Added to cart' : 'Add to the cart'}</span>
                    <span className="added-to-cart">Go To Cart</span>
                </button>
            </div>
        </div>
    );
}
