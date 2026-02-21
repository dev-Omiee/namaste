import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import bill from '../../public/svg/bill.svg';
import cart from '../../public/svg/cartDark.svg';
import emailjs from '@emailjs/browser';
import CartLottie from '../../public/lottiAnimations/cart.jsx';
import OrderPlacedLottie from '../../public/lottiAnimations/orderPlaced.jsx';
import Delivery from '../../public/lottiAnimations/deliveryGuy.jsx';
import { Badge, Button, Col, Form, Modal, Row, Spinner } from 'react-bootstrap';
import Image from 'next/image.js';
import Head from 'next/head.js';
import { clearCart } from '../redux/cartActions.js';
import { useRouter } from 'next/router.js';

function MyVerticallyCenteredModal({ show, onHide, orderId, name, productData, totalCost }) {

    const copyToClipboard = () => {
        navigator.clipboard.writeText(orderId);
        alert('Order ID copied to clipboard!');
    };

    return (
        <>
            <Head>
                <title>Purchase Order</title>
            </Head>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className='text-grad'>
                        Mega Thanks, {name}!!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className='gr-text-1-3 pb-12'>Order Confirmed. ✅</div>
                        Your Order Id is : <strong className='text-grad-1' onClick={copyToClipboard}>Order ID: {orderId}</strong> 🛍️
                        <br />
                        Keep your Order ID for future reference! 📝
                        <br /><br />
                        Will get back to you shortly. Till then keep Shopping. 🛒
                        <br />
                        If you require immediate assistance, please dial <strong>+91 932409795</strong> 📞.
                    </div>
                    <div className='text-grad gr-text-2 gb-text-2 pt-12'>Thank You!!</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide} className='bg-grad border-none'>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default function Purchase() {

    const productData = useSelector((state) => state.cart.cart);
    const totalCost = useSelector((state) => state.cart.totalCost);
    const dispatch = useDispatch();
    const router = useRouter();

    const [modalShow, setModalShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useRef();

    const setClose = () => {
        setModalShow(false);
        router.push('/');
    };

    const validateAndSubmitOrder = (e) => {
        const form1 = e.currentTarget;
        if (form1.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            setValidated(true);
            return;
        }
        handleSubmitOrder(e);
    };

    const handleSubmitOrder = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!productData.length || totalCost <= 0) {
            alert("No products in cart or invalid total cost.");
            setIsSubmitting(false);
            return;
        }

        const formElement = form.current;
        const formData = new FormData(formElement);

        const customerInfo = {
            firstName: formData.get('FirstName'),
            lastName: formData.get('LastName'),
            email: formData.get('email'),
            phone: formData.get('contact'),
            address: formData.get('address'),
        };

        try {
            const response = await fetch('/api/submitOrder', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    cartItems: productData,
                    totalCost,
                    customerInfo,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                setOrderId(result.orderId);
                setModalShow(true);
                dispatch(clearCart());
                sendConfirmationEmail(customerInfo, result.orderId, productData, totalCost);
            } else {
                alert(result.message || "Failed to place order.");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong while placing your order.");
        }
        setIsSubmitting(false);
    };

    const sendConfirmationEmail = (customerInfo, orderId, productData, totalCost) => {
        emailjs.send('service_e4txrgo', 'template_0ycopjc', {
            first_name: customerInfo.firstName,
            last_name: customerInfo.lastName,
            email: customerInfo.email,
            phone: customerInfo.phone,
            address: customerInfo.address,
            order_id: orderId,
            total_cost: totalCost,
            products: productData.map(item => item.content).join(', ')
        }, 'tHPVuuOz3NLnhlTtR')
            .then((result) => {
                console.log('Email successfully sent!', result.text);
            }, (error) => {
                console.log('Failed to send email.', error.text);
            });
    };

    return (
        <div className='pb-20 pt-15 bg-grad-4'>
            {/* Full Page Loader */}
            {isSubmitting && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Spinner animation="border" variant="success" style={{ width: '5rem', height: '5rem' }} />
                </div>
            )}

            <div className='spacer-x'>
                <div className='max-w'>
                    <div className='text-color contact-form p-15 animate-op hov-shadow rounded border bg-default'>
                        <Row className='text-green text-center mt-3'>
                            <b>We Accept Cash / UPI Payments<br />Only After The Product Is Delivered!</b>
                        </Row>

                        <Row className='justify-content-center d-grid align-content'>
                            <Delivery />
                        </Row>

                        <Form className='mt-4 max-w-500' ref={form} noValidate validated={validated} onSubmit={validateAndSubmitOrder}>
                            <Row>
                                <Form.Group as={Col} className="mb-3" controlId="validationCustom01">
                                    <Form.Label className='text-grad gb-text-2'>First Name<span className='text-danger'> *</span></Form.Label>
                                    <Form.Control name="FirstName" required type="text" placeholder="First name" autoComplete="given-name" pattern="^[A-Za-z]+$" />
                                    <Form.Control.Feedback type="invalid">First name is required and must only contain letters.</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} className="mb-3" controlId="validationCustom02">
                                    <Form.Label className='text-grad gb-text-2'>Last Name<span className='text-danger'> *</span></Form.Label>
                                    <Form.Control name="LastName" required type="text" placeholder="Last name" autoComplete="family-name" pattern="^[A-Za-z]+$" />
                                    <Form.Control.Feedback type="invalid">Last name is required and must only contain letters.</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group className="mb-3" controlId="validationCustomEmailId">
                                    <Form.Label className='text-grad gb-text-2'>Email Address<span className='text-danger'> *</span></Form.Label>
                                    <Form.Control name="email" required type="email" placeholder="name@example.com" autoComplete="email" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" />
                                    <Form.Control.Feedback type="invalid">Please provide a valid email address.</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="validationCustomContactNumber">
                                    <Form.Label className='text-grad gb-text-2'>Contact Number<span className='text-danger'> *</span></Form.Label>
                                    <Form.Control name="contact" required placeholder="91+" autoComplete="tel" pattern="(^\+91[0-9]{10}$)|(^[0-9]{10}$)" />
                                    <Form.Control.Feedback type="invalid">Please enter a valid phone number.</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group className="mb-3" controlId="validationCustomAddress">
                                    <Form.Label className='text-grad gb-text-2'>Delivery Address<span className='text-danger'> *</span></Form.Label>
                                    <Form.Control name="address" required placeholder="Full Address" autoComplete="street-address" />
                                    <Form.Control.Feedback type="invalid">Delivery address is required.</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className='justify-content-center mt-3'>
                                <Button className="mt-3 bg-grad text-color btn-css" type="submit" disabled={isSubmitting}>
                                    <b>Confirm Order</b>
                                </Button>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={setClose}
                orderId={orderId}
                name={form.current?.FirstName?.value}
                productData={productData}
                totalCost={totalCost}
            />
        </div>
    );
}
