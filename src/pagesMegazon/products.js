import Head from 'next/head';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import Image from 'next/image';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import emailjs from '@emailjs/browser';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import cart from '../../public/svg/cart.svg';
import close from '../../public/svg/close.svg';
import AddCta from './addCTA.jsx';

import Modal from 'react-bootstrap/Modal';

import { data } from './productsData';
import { addToCart, removeFromCart } from '../redux/cartActions.js';

// NEW: Create this mini-component inside your file
function SummaryText({ summary }) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => setExpanded(!expanded);

    const maxLength = 140;

    if (summary.length <= maxLength) {
        return <>{summary}</>;
    }

    return (
        <>
            {expanded ? (
                <>
                    {summary}
                    <span
                        onClick={toggleExpand}
                        style={{ color: "green", cursor: "pointer", marginLeft: "5px" }}
                    >
                        {" "}show less
                    </span>
                </>
            ) : (
                <>
                    {summary.slice(0, maxLength - 3)}...
                    <span
                        onClick={toggleExpand}
                        style={{ color: "green", cursor: "pointer", marginLeft: "5px" }}
                    >
                        {" "}more
                    </span>
                </>
            )}
        </>
    );
}

export default function Products() {        
    
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cart);  

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const setClose = () => {        
    };

    return (
        <>
            <div className="pb-20 pt-13 bg-grad-4">
                <div className="spacer-x">
                    <div className="max-w">
                        <div className="">
                            <div className="border-none gr-text-1 tw-2 pt-12">
                                <Card.Body className="text-center bg-none pb-11 gb-text-3">
                                    <div className="landing-text text-grad animate-op">Namaste Globals</div>
                                </Card.Body>
                            </div>
                            <div className="border-none">
                                <Card.Body className="text-center bg-none tw-3 gr-text-2">
                                    {/* <div className="text-color">
                                        Select all the products that you want to buy, and submit your wish list.
                                    </div> */}
                                    <div className='gr-text-2 tw-1 text-grad-0 animate-op'>
                                        {/* Powered By : */}
                                    </div>
                                    <div className='gr-text-2 tw-1 text-grad-0 animate-op'>
                                        <b>Natural Products</b>
                                    </div>
                                </Card.Body>
                            </div>
                        </div>

                        <div>
                            <Row xs={1} md={3} className="g-4 pt-14">
                                {data.map((data, keys) => {
                                    const isInCart = cartItems.some((item) => item.id === data.id);
                                    return (
                                        <Col key={keys}>
                                            <Card className="social-card hov-shadow border bg-white animate-op bg-default">
                                                <Card className="p-11">
                                                    <div
                                                        style={{
                                                            position: 'relative',
                                                            width: '100%',
                                                            height: '14rem',
                                                            borderRadius: '5px',
                                                            overflow: 'hidden',
                                                        }}
                                                    >
                                                        <Image
                                                            src={data.src}
                                                            alt="product-img"
                                                            fill
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                            style={{
                                                                objectFit: 'contain',
                                                                borderRadius: '5px',
                                                            }}
                                                        />
                                                    </div>

                                                </Card>
                                                <Card.Body className="pt-0 pb-0">
                                                    <Card.Title className="villa-name pt-13 pb-11 w-100">
                                                        <Row>
                                                            <Col className='col-auto'>
                                                                <b>{data.content}</b>
                                                            </Col>
                                                            <Col className="justify-content-end d-grid">
                                                                <div className="text-green">₹ {data.price}
                                                                    <span className='text-color'>/kg</span></div>
                                                            </Col>
                                                        </Row>
                                                    </Card.Title>

                                                    <Card.Text className="pe-12 min-h-100">
                                                        <SummaryText summary={data.summary} />
                                                    </Card.Text>

                                                    <Form className="gb-text-3 gr-text-1 justify-content-end w-100">
                                                        <Card.Title className="pt-2 pb-11 w-100">
                                                            <AddCta product={data} />
                                                        </Card.Title>
                                                    </Form>

                                                    {isInCart && (
                                                        <div className="mt-2 text-center">
                                                            <Button
                                                                variant="outline-danger"
                                                                size="sm"
                                                                onClick={() => handleRemoveFromCart(data.id)}
                                                            >
                                                                Remove from Cart
                                                            </Button>
                                                        </div>
                                                    )}
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
