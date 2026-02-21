import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Col, Row, Modal } from 'react-bootstrap';
import Image from 'next/image';
import Head from 'next/head';
import { addToCart, clearCart, initializeCart, removeFromCart, decrementItem } from '../redux/cartActions';
import Link from 'next/link';
import close from '../../public/svg/closeRed.svg';
import plus from '../../public/svg/plus.svg';
import minus from '../../public/svg/minus.svg';
import CartLottie from '../../public/lottiAnimations/cart';
import { useRouter } from 'next/router';

function ClearCartModel(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        const saved = localStorage.getItem('cartData');
        if (saved) {
            const parsed = JSON.parse(saved);
            dispatch(initializeCart(parsed));
        }
    }, [dispatch]);

    function handleClear() {
        dispatch(clearCart());
    }

    return (
        <>
            <Head>
                <title>Namaste Marts Cart</title>
            </Head>
            <Modal {...props} size="md" centered>
                <Modal.Header closeButton>
                    <Modal.Title className='text-grad-1'>
                        <b>Are You Sure!!</b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <b>
                        If you clear the cart, all the selected items will be removed.
                    </b>
                </Modal.Body>
                <Modal.Footer>
                    <Row className='w-100 g-0'>
                        <Col>

                        </Col>
                        <Col className='justify-content-end d-grid'>
                            <Button onClick={handleClear} className='bg-grad-1 border-none'>Clear Cart</Button>
                        </Col>
                    </Row>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default function Cart() {
    const [modalShow, setModalShow] = useState(false);
    const dispatch = useDispatch();
    const productData = useSelector((state) => state.cart.cart);
    const counts = useSelector((state) => state.cart.counts);
    const totalCost = useSelector((state) => state.cart.totalCost);
    const cartItems = useSelector((state) => state.cart.cart);
    const router = useRouter();

    const increment = (productId) => {
        const product = productData.find(p => p.id === productId);
        if (product) {
            dispatch(addToCart({ id: productId, price: parseInt(product.price) }));
        }
    };

    const decrement = (productId) => {
        dispatch(decrementItem(productId));
    };

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    return (
        <div className='text-color pt-16 pb-15 text-color'>
            <div className='text-color spacer-x'>
                {productData.length === 0 ? (
                    <div className='text-color max-w'>
                        <div className='text-color contact-form p-15 animate-op gr-shadow rounded bg-default'>
                            <CartLottie />
                            <div className='text-black text-center'>
                                <b>Your Cart Is Empty!<br />Please Select at Least One Product Before Placing Your Order.</b>
                            </div>
                            <Row className='justify-content-center mt-3 text-center'>
                                <Link className='btn-link g-0' href={"/"}>
                                    <Button className="mt-3 bg-grad text-color btn-css">Keep Shopping</Button>
                                </Link>
                            </Row>
                        </div>
                    </div>
                ) : (
                    <div className='text-color max-w w-100'>
                        <Row xs={1} md={3} className='w-100 g-0 align-items-center animate-op justify-content-center'>
                            <Col className='text-start lg-screen-only'>
                                <Button onClick={() => setModalShow(true)} className="bg-grad text-color fs-6 btn-css">Clear Cart</Button>
                            </Col>
                            <Col className='gr-text-3 text-center text-grad'>
                                <b>Items In Your Cart</b>
                            </Col>
                            <Col className='gr-text-2 mt-1 text-end lg-screen-only'>
                                <b>Sub Total: <span className='fs-4 text-green'>₹ {totalCost}</span></b>
                            </Col>
                        </Row>

                        {/* <Row className='animate-op text-center justify-content-center mt-15 sm-screen-only'>
                            <Button onClick={() => setModalShow(true)} className="bg-grad text-color fs-6 btn-css">Clear Cart</Button>
                        </Row> */}

                        <Row xs={1} md={3} className="g-4 mt-12 animate-op">
                            {productData.map((data) => {
                                const isInCart = cartItems.some((item) => item.id === data.id);
                                const numericPrice = parseInt(data.price);
                                const quantity = counts[data.id] || 1;
                                const totalPrice = numericPrice * quantity;

                                return (
                                    <Col key={data.id} xs={12}>
                                        <Card className="border p-3 rounded-4 bg-white hov-shadow bg-default">

                                            {/* Top Row - Product text and Product name */}
                                            <Row className="align-items-center mb-3 g-0">
                                                <Col xs={6} className="g-0">
                                                    <div className="fw-bold fs-5 text-truncate" title={data.content}>
                                                        {data.content}
                                                    </div>
                                                </Col>
                                                <Col xs={6} className="text-end g-0">
                                                    <div className="fw-bold fs-5 text-green">₹ {data.price * quantity}</div>
                                                </Col>
                                            </Row>

                                            {/* Image and Right Section */}
                                            <Row className="g-0">
                                                {/* Left Column - Image */}
                                                <Col xs={4} className="g-0">
                                                    <div style={{ position: "relative", width: "100%", paddingTop: "100%", borderRadius: "12px", overflow: "hidden" }}>
                                                        <Image
                                                            src={data.src}
                                                            alt={data.content}
                                                            fill
                                                            style={{ objectFit: "cover", borderRadius: "12px" }}
                                                        />
                                                    </div>
                                                </Col>

                                                {/* Right Column */}
                                                <Col xs={8} className="d-flex flex-column justify-content-between ps-3 g-0">

                                                    {/* Quantity Row */}
                                                    <Row className="align-items-center mb-3 g-0">
                                                        <Col xs={6} className="g-0">
                                                            <div className="text-muted">Quantity</div>
                                                        </Col>
                                                        <Col xs={6} className="d-flex justify-content-end align-items-center g-0">
                                                            <Image onClick={() => decrement(data.id)} className="cursor-pointer me-2" src={minus} alt="decrement" width={18} height={18} />
                                                            <span className="fw-semibold">{quantity}</span>
                                                            <Image onClick={() => increment(data.id)} className="cursor-pointer ms-2" src={plus} alt="increment" width={18} height={18} />
                                                        </Col>
                                                    </Row>

                                                    {/* Total Price Row */}
                                                    <Row className="align-items-center mb-3 g-0">
                                                        <Col xs={6} className="g-0">
                                                            <div className="text-muted">Price</div>
                                                        </Col>
                                                        <Col xs={6} className="text-end g-0">
                                                            <div className="fw-bold">
                                                                ₹ {data.price}
                                                            </div>
                                                        </Col>
                                                    </Row>

                                                    {/* Remove Button */}
                                                    <div className="mt-auto">
                                                        <Button
                                                            variant="outline-danger"
                                                            size="sm"
                                                            className="w-100"
                                                            onClick={() => handleRemoveFromCart(data.id)}
                                                        >
                                                            Remove
                                                        </Button>
                                                    </div>

                                                </Col>
                                            </Row>

                                        </Card>
                                    </Col>
                                );
                            })}
                        </Row>


                        <Row className='text-center justify-content-center mt-15'>
                            <Link className='btn-link g-0' href={"/purchase"}>
                                <Button className="bg-grad text-color btn-css">Place Your Order</Button>
                            </Link>
                        </Row>

                        <Row className='gr-text-2 mt-3 text-center sm-screen-only'>
                            <b>Sub Total: ₹ <span className='text-grad'>{totalCost}</span></b>
                        </Row>

                        <ClearCartModel
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
