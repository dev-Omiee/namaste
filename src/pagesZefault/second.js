import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link';

import Lottie from '../../public/lottiAnimations/archery'

function GridExample() {
    return (
        <div className='pms-all gr-shadow-bottom bg-grad-4 gr-shadow'>
            <div className='pms-landing-page gr-shadow-top'>
                <div className=' gr-shadow-bottom'>
                    <div className='spacer-x'>
                        <div className='max-w'>
                            <Row xs={1} md={1} xl={2} className="g-0 reverse-content pt-20 pb-on-1200px align-items">
                                <Col className='g-0 animate-cross-left-r pt-14'>
                                    <Card className=''>
                                        <Card className='text-black pb-13 upperCase'>
                                            ELEVATE YOUR EXPERTISE, IGNITE INNOVATION
                                        </Card>
                                        <Card className='text-grad pb-13 landing-text'>
                                            Your Gateway to Excellence in IT
                                        </Card>
                                        <Card className='text-black pb-14 landing-sub-text pe-4'>
                                            DeityDevs Hub is an online IT training hub offering programs in business intelligence, data analytics, and web development, aiming to equip students with necessary skills for the rapidly evolving technology industry.
                                        </Card>
                                        <Card className='pb-14'>
                                            <Link href="/contact" className='w-fit-content bg-grad-4 rounded btn-link g-0'>                                             
                                                <Button className="bg-grad-4  btn-css">
                                                    Start Excelling Now!
                                                </Button>
                                            </Link>
                                        </Card>
                                    </Card>
                                </Col>
                                <Col className='g-0 animate-cross-right-r'>
                                    <Card className=''>
                                        <Lottie />
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='pms-features-page pt-20 pb-20'>
                <PmsFeatures />
            </div> */}
        </div>
    );
}

export default GridExample;