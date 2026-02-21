import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap'
import Image from 'next/image'

// import RmsFeatures from './remFetures'
import Link from 'next/link.js';

import Lottie from '../../public/lottiAnimations/archery'

function GridExample() {
    return (
        <div className='rms-landing-page gr-shadow-top bg-grad-4'>
            <div className='gr-shadow-bottom'>
                <div className='spacer-x gr-shadow-bottom '>
                    <div className='max-w'>
                        <Row xs={1} md={1} xl={2} className="g-0 align-items">
                            <Col className='g-0 pe-15 animate-cross-left-l'>
                                <Card className=''>
                                    <Lottie />
                                </Card>
                            </Col>
                            <Col className='g-0 animate-cross-right-l pt-12 pt-on-1200px'>
                                <Card className=''>
                                    <Card className='text-black pb-13 upperCase'>                                        
                                        Empowering students with the future of technology
                                    </Card>
                                    <Card className=' pb-13 landing-text text-grad'>
                                        <div className='text-grad'>
                                            The Deity Devs Hub
                                        </div>
                                    </Card>
                                    <Card className='text-black pb-14 landing-sub-text pe-4'>
                                        {/* From heart-pounding adventures to mind-bending challenges. */}
                                        {/* Browse our offerings, enroll today, and take the first step towards unlocking your digital potential with deity devs hub. */}
                                        Our online IT training hub provides students with essential skills for the future of technology, bridging the gap between education and industry through cutting-edge programs. Join us in pursuing excellence and unlocking your potential in the digital landscape.
                                    </Card>
                                    <Card className=' pb-14'>
                                        <Link className='btn-link g-0' href="/contact">
                                            <Button className="bg-grad-4 text-color  btn-css">
                                                Start Excelling Now!
                                            </Button>
                                        </Link>
                                    </Card>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
                {/* <div className='rms-fetures-page pt-20 pb-20'>
                    <RmsFeatures />
                </div> */}
            </div>
        </div>
    );
}

export default GridExample;