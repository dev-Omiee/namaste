import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Link from 'next/link';
import Image from 'next/image';

import { data } from '../pagesSections/careersData';

// import hey from "hey"

export default function templates() {
    return (
        <div className='pb-20'>
            <div className='spacer-x'>
                <div className='max-w'>

                    <div className='pt-20'>
                        <div className='border-none'>
                            <Card.Body className='text-center bg-none tw-3 gr-text-6'>
                                <div className='title-text'>
                                    Come join us
                                </div>
                            </Card.Body>
                        </div>
                    </div>
                    <div className='border-none gr-text-1 tw-2 pt-15'>
                        <Card.Body className='text-center bg-none pb-15 gb-text-2 text-muted-white'>
                            <div className='title-sub-text'>
                                The future you envision is waiting for you.
                            </div>
                        </Card.Body>
                    </div>


                    <div className='pt-30 pb-30 bg-img-1 g-0 p-4'>
                        <div className='pb-30'>
                            <div className='pb-30'>
                                {/* Space required for full image padding */}
                            </div>
                        </div>
                    </div>


                    <div className='pt-20'>
                        <div className='border-none'>
                            <Card.Body className='text-center bg-none tw-3 gr-text-6'>
                                <div className='title-text'>
                                    Why you should join us?
                                </div>
                            </Card.Body>
                        </div>
                    </div>
                    <div className='border-none gr-text-1 tw-2 pt-15'>
                        <Card.Body className='text-center bg-none pb-15 gb-text-2 text-muted-white'>
                            <div className='title-sub-text'>
                                What makes us stronger as a workforce
                                are the values and principles we encourage within the organisation.
                            </div>
                        </Card.Body>
                    </div>

                    <div className='animated-boxes'>
                        {/* <Row xs={1} md={3} className="g-0 pt-20"> */}
                        <Row xs={1} md={3} xl={3} className="g-0 pt-20 pb-20">
                            {
                                data.map((data, keys) => {
                                    return (
                                        <div key={keys} className="">
                                            <div className="">
                                                <div className="">
                                                    <Card className='social-card hov-shadow  p-4 m-3'>
                                                        <div className='pb-3 feature-icons-div'>
                                                            <Image priority={true} src={data.src} alt="ICON" className='feature-icons' />
                                                        </div>
                                                        <Card.Body className='g-0 p-0 pt-2'>
                                                            <Card.Title className='service-text text-grad gr-text-2'>
                                                                {data.title}
                                                            </Card.Title>
                                                            <div className=''>
                                                                {data.summary}
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </Row >
                    </div >
                </div >
            </div >
        </div >
    )
}
