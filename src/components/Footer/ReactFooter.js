import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Col, Row } from 'react-bootstrap';

import logo from '../../../public/favicon.ico';

import facebook from '../../../public/svg/socials/facebook.svg';
import instagram from '../../../public/svg/socials/instagram.svg';
import linkedin from '../../../public/svg/socials/linkedin.svg';
import twitter from '../../../public/svg/socials/twitter.svg';

import call from '../../../public/svg/socials/call.svg';
import location from '../../../public/svg/socials/location.svg';
import message from '../../../public/svg/socials/message.svg';

import { footerLinks } from './footerLinks'

function GroupExample() {

    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentPath = router.asPath;

    // const isActive = (path) => mounted && currentPath === path ? 'active-link' : '';

    const isActive = (path) => {
        if (!mounted) return '';
        const current = router.asPath.split('#')[0];
        const target = path.split('#')[0];
        return current === target ? 'active-link' : '';
    };


    return (
        <footer className='row m-0 g-0 spacer-x v-center bg-black border-top'>
            <div className='max-w row g-0 row pt-14 pb-15'>
                <Row xl={4} md={2} sm={1} className='hov-shadow g-0'>
                    {/* Logo & Social */}
                    <Card border='white' className='g-0'>
                        <Card.Body>
                            <Row className='footer-heading g-0'>
                                {/* <Col xs={"auto"} className='justify-content-start d-grid ps-2 g-0'>
                                    <Link  href="/" className# className='text-white deco-none hov-grad '>
                                        <Image priority={true} src={logo} alt='patils-ranch-logo' className='logo' />
                                    </Link>
                                </Col> */}
                                <Col xs={"auto"} className='justify-content-start d-grid g-0'>
                                    <Link href={"/#"} className='deco-none text-white header-link text-uppercase v-center Namaste Globals-logo'>
                                        Namaste Globals
                                    </Link>
                                </Col>
                            </Row>
                            <div className='text-grad gb-text-3'>
                                More Than Spaces.
                                <br />
                                We Create Stories.
                            </div>
                            <div className='footer-link g-0'>
                                {[twitter, instagram, facebook, linkedin].map((icon, idx) => (
                                    <Link href="/" key={idx} className='text-white deco-none hov-grad '>
                                        <Image src={icon} alt="social" loading="lazy" className='social-icon' />
                                    </Link>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>

                    {/* <Card border='white' className='g-0'>
                        <Card.Body>
                            <div className='footer-col col'>
                                <div className='footer-heading mb-3 border-bottom'>Pages</div>

                                <div className='footer-link'>
                                    <Link  href="/#" className={`text-white deco-none hov-grad  ${isActive('/')}`}>
                                        Home
                                    </Link>
                                </div>

                                <div className='footer-link'>
                                    <Link  href="/contact#contact" className={`text-white deco-none hov-grad  ${isActive('/contact')}`}>
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    
                    <Card border='white' className='g-0'>
                        <Card.Body>
                            <div className='footer-col col'>
                                <div className='footer-heading mb-3 border-bottom'>Explore More</div>

                                <div className='footer-link'>
                                    <Link  href="/services#services" className={`text-white deco-none hov-grad  ${isActive('/services')}`}>
                                        Services
                                    </Link>
                                </div>

                                <div className='footer-link'>
                                    <Link  href="/about#about" className={`text-white deco-none hov-grad  ${isActive('/about')}`}>
                                        About Us
                                    </Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card> */}

                    {footerLinks.map((section, idx) => (
                        <Card border="white" className="g-0" key={idx}>
                            <Card.Body>
                                <div className="footer-col col">
                                    <div className="footer-heading mb-3 border-bottom">{section.title}</div>

                                    {section.links.map((link, i) => (
                                        <div className="footer-link" key={i}>
                                            <Link
                                                href={link.path}
                                                className={`text-white deco-none hov-grad ${isActive(link.path.split('#')[0])}`}
                                            >
                                                {link.name}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    ))}


                    {/* Contact Info */}
                    <Card border='white' className='g-0'>
                        <Card.Body>
                            <div className='footer-col col'>
                                <div className='footer-heading mb-3 border-bottom'>Contact (Click to contact)</div>

                                {/* Phone */}
                                <div>
                                    <Row className='col-auto text-white g-0 pb-3 pt-2'>
                                        <Col xs={1}>
                                            <Image src={call} alt="call" loading="lazy" className='footer-icon align-self  mt-1' />
                                        </Col>

                                        <Col className='mail-text w-max ms-3'>
                                            <Link
                                                className='deco-none hov-grad text-white'
                                                href="https://wa.me/919082130206?text=Hi%20Namaste Globals%20Team%2C%20I%27m%20interested%20in%20your%20civil%20and%20interior%20design%20services.%20Please%20connect%20with%20me%20to%20discuss%20further."
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                +91 9082130206
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>

                                {/* Email */}
                                <div>
                                    <Row className='col-auto text-white g-0 pb-3'>
                                        <Col xs={1}>
                                            <Image src={message} alt="email" loading="lazy" className='footer-icon align-self mt-1' />
                                        </Col>

                                        <Col className='mail-text w-max ms-3 my-auto'>
                                            <Link
                                                className='deco-none hov-grad text-white'
                                                href={`mailto:info.Namaste Globalsinterior@gmail.com?subject=Interior%20Design%20Enquiry&body=Hi%20Namaste Globals%20Team%2C%0A%0AI%20came%20across%20your%20website%20and%20am%20interested%20in%20your%20interior%20and%20civil%20services.%20Please%20get%20in%20touch%20to%20discuss%20further.%0A%0ARegards%2C%0A[Your%20Name]`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                info.Namaste Globalsinterior@gmail.com
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            </div>
        </footer>
    );
}

export default GroupExample;
