import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Link from 'next/link';
import Image from 'next/image';

import { data } from '../pagesZefault/imgCardsData';

export default function templates() {
    return (
        <div className='services'>
            <div className='spacer-x'>
                <div className='max-w'>

                    <div className='pt-20 animate-op'>
                        <div className='border-none'>
                            <Card.Body className='text-center bg-none tw-3 gr-text-6'>
                                <div className='title-text'>
                                    How Will We Assist You!!
                                </div>
                            </Card.Body>
                        </div>
                        <div className='border-none gr-text-1 tw-2 pt-15'>
                            <Card.Body className='text-center bg-none'>
                                <div className='title-sub-text'>
                                    Our Amazing Services
                                </div>
                            </Card.Body>
                        </div>
                    </div>

                    <div className='animated-boxes'>
                        {/* <Row xs={1} md={3} className="g-0 pt-20"> */}
                        <Row xs={1} md={3} className="g-0 pt-20">
                            {
                                data.map((data, keys) => {
                                    return (
                                        <div key={keys} className="flip-container">
                                            <div className="flipper">
                                                <div className="front">
                                                    <Card className='social-card bg-default-1'>
                                                        <Image className='service-image-card' alt="Service-Image" variant="top" src={data.src} />
                                                        <Card.Body>
                                                            <Card.Title className='service-text text-grad'>
                                                                {data.title}
                                                            </Card.Title>
                                                            <div className='text-grad'>
                                                                Read More...
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                                <div className="back text-black">
                                                    <Card className='social-card bg-default-1'>
                                                        <Card.Body>
                                                            <Card.Title className='service-text text-grad text-center pt-12'>
                                                                Lorem Ipsum
                                                            </Card.Title>
                                                            <div className='pt-12 text-center'>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. magna aliqua.
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            </div>
                                        </div>

                                    );
                                })
                            }
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}
