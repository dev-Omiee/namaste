import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import emailjs from '@emailjs/browser';
import { Badge, Button, Col, Form, Modal, Row, Spinner } from 'react-bootstrap';
import { clearCart } from '../redux/cartActions.js';
import { useRouter } from 'next/router.js';

function MyVerticallyCenteredModal({ show, onHide, name }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className='text-grad'>
          Mega Thanks {name}!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className=''>
          <div className='gr-text-1-3 pb-11'>
            Greetings From Namaste Team.
          </div>
          Thank you! We have received your enquiry and we will get back to you shortly.
          <br />
          If you require immediate assistance, please dial +91 9324097695.
        </div>
        <div className='text-grad gr-text-2 gb-text-2 pt-3'>
          Happy Shopping!!
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} className='bg-grad border-none'>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Purchase() {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();
  const router = useRouter();

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
    console.log("Submitting order...");

    const totalCost = 0;
    const productData = [
      {
        src: "Enquiry",
        content: "Enquiry",
        summary: "Enquiry",
        id: "Enquiry",
        price: "Enquiry",
        quantity: "Enquiry",
      }
    ];

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
      console.log(result.message);

      if (response.ok) {
        setModalShow(true);
        dispatch(clearCart());
      } else {
        alert(result.message || "Failed to place order.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong while placing your order.");
    }
    setIsSubmitting(false);
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
            <Row className='text-center mt-3 mb-5'>
              <b>
                We&apos;d Love to Hear From You!
              </b>
            </Row>

            <Form className='mt-4 max-w-500' ref={form} noValidate validated={validated} onSubmit={validateAndSubmitOrder}>
              <Form.Group className="mb-3" as={Col} controlId="validationCustom01">
                <Form.Label className='text-grad gb-text-2'>
                  First Name
                  <span className='text-danger'> *</span>
                </Form.Label>
                <Form.Control
                  name="FirstName"
                  required
                  type="text"
                  placeholder="First name"
                  autoComplete="given-name"
                  pattern="^[A-Za-z]+$"  // Regex to allow only alphabets
                />
                <Form.Control.Feedback type="invalid">
                  First name is required and must only contain letters.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" as={Col} controlId="validationCustom02">
                <Form.Label className='text-grad gb-text-2'>
                  Last Name
                  <span className='text-danger'> *</span>
                </Form.Label>
                <Form.Control
                  name="LastName"
                  required
                  type="text"
                  placeholder="Last name"
                  autoComplete="family-name"
                  pattern="^[A-Za-z]+$"  // Regex to allow only alphabets
                />
                <Form.Control.Feedback type="invalid">
                  Last name is required and must only contain letters.
                </Form.Control.Feedback>
              </Form.Group>

              <Row>
                <Form.Group className="mb-3" as={Col} xs="12" sm="12" md="12" lg="12" controlId="validationCustomEmailId">
                  <Form.Label className='text-grad gb-text-2'>
                    Email Address
                    <span className='text-danger'> *</span>
                  </Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    autoComplete="email"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"  // Regex for validating email
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email address.
                  </Form.Control.Feedback>
                  <Form.Text className="text-muted-white">
                    <Badge pill bg="light" text="success">
                      We will never share your email with anyone else.
                    </Badge>
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" as={Col} xs="12" sm="12" md="12" lg="12" controlId="validationCustomContactNumber">
                  <Form.Label className='text-grad gb-text-2'>
                    Contact Number
                    <span className='text-danger'> *</span>
                  </Form.Label>
                  <Form.Control
                    name="contact"
                    required
                    placeholder="91+ "
                    autoComplete="tel"
                    pattern="(^\+91[0-9]{10}$)|(^[0-9]{10}$)"  // Regex for Indian phone number (+91XXXXXXXXXX)
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid phone number.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group className="mb-3" as={Col} xs="12" sm="12" md="12" lg="12" controlId="validationCustomAddress">
                  <Form.Label className='text-grad gb-text-2'>
                    Your Message/Enquiry
                    <span className='text-danger'> *</span>
                  </Form.Label>
                  <Form.Control
                    name="address"
                    required
                    placeholder="Full Address"
                    autoComplete="street-address"
                  />
                  <Form.Control.Feedback type="invalid">
                    Message/Enquiry is required.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className='justify-content-center mt-3'>
                <Button
                  className="mt-3 bg-grad text-color btn-css"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <b>Submit</b>
                </Button>
              </Row>
            </Form>
          </div>
        </div>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={setClose}
        name={form.current?.FirstName?.value}
      />
    </div>
  );
}
