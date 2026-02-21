import React, { useState, useEffect } from 'react'
import NavLinks from './NavLinks'
import Sidebar from './Sidebar'
import HambergerMenu from './HabergerMenu'
import HambergerMenuLinks from './HamebergerMenuLinks'
import { Button, Col, Row } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import Modal from 'react-bootstrap/Modal';

import logo from '../../../public/favicon.ico'
import LottieAnimation from '../Lottie.jsx'
import LottieImg from '../../../public/lottiAnimations/cta.json'
import { useRouter } from 'next/router'

function UseScrollDirection() {

  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // store the last scrolled Y to detect how fast users scroll pages
    let lastScrollY = window.pageYOffset

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const goingDown = scrollY > lastScrollY
      const diff = 4
      // There are two cases that the header might want to change the state:
      // - when scrolling up but the header is hidden
      // - when scrolling down but the header is shown
      // stateNotMatched variable decides when to try changing the state
      const stateNotMatched = goingDown !== isHidden
      const scrollDownTooFast = scrollY - lastScrollY > diff
      const scrollUpTooFast = scrollY - lastScrollY < - diff

      const shouldToggleHeader = stateNotMatched && (scrollDownTooFast || scrollUpTooFast)
      if (shouldToggleHeader) {
        setIsHidden(goingDown)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    };

    window.addEventListener("scroll", updateScrollDirection)
    return () => {
      window.removeEventListener("scroll", updateScrollDirection)
    }
  }, [isHidden]);

  return isHidden;
}

export default function Header() {

  
  const router = useRouter();

  const handleLogoClick = (e) => {
    e.preventDefault(); // stop default anchor behavior

    // Unlock scroll if body is hidden (e.g., on mobile)
    document.body.style.overflow = 'auto';

    // Scroll the custom scroller if it exists
    const scroller = document.querySelector('.custom-scroller');
    if (scroller) {
      scroller.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }    

    setTimeout(() => {
        document.body.style.overflow = 'hidden';
      }, 800);

    // Update the route to `/#`
    if (router.asPath !== '/#') {
      router.push('/#');
    }
  };

  const isActive = router.asPath === '/contact';

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isHidden = UseScrollDirection()
  return (
    <header1 className='col m-0 border-bottom g-0 pb-30'>
      <header className={`header-div bg-black ${isHidden ? "header-show" : "header-show"}`}>
        {/* <disclaimer className='row center m-0'>
          <div className='text-center bg-grad pt-2 pb-2 disclaimer-text'>
            ✨ Ideal location for all of your adventures ✨
          </div>
        </disclaimer> */}

        <div className='pt-1 pb-1 blurr-bg border-bottom'>
          <navbar className='row m-0 g-0 v-center'>
            <div className='row g-0 justify-content-center'>

              <Row className="spacer-x align-items w-100 g-0 justify-content-start">
                {/* <Col sm="auto" xs="auto" md="auto" lg="auto" className='justify-content-start d-grid show-nav-links g-0'>
                  <Link href={"/"} className='text-grad'>
                    <Image priority={true} src={logo} alt='omkars-portfolio-logo' className='logo' />
                  </Link>
                </Col> */}

                <Col sm="auto" xs="auto" md="auto" lg="auto" className='d-grid show-nav-links g-0'>
                  <Link href="/#" className='deco-none text-uppercase pt-1'>
                    <div className='Namaste Globals-logo'>
                      <b className='text-grad'>
                        Namaste Globals
                      </b>
                    </div>
                  </Link>
                </Col>

                <Col sm="auto" xs="auto" md="auto" lg="auto" className='ms-auto justify-content-end d-grid show-nav-links g-0 pe-3 text-uppercase'>
                  <NavLinks />
                </Col>

                <Col sm="auto" xs="auto" md="auto" lg="auto" className='justify-content-end d-grid show-nav-links g-0'>
                  <Link href={"/contact"} aria-label="Contact Us">
                    {/* <LottieAnimation animationData={LottieImg} className="cta-head-css" /> */}
                  </Link>
                </Col>

              </Row>

              <Row className='max-w show-nav-menu pb-4'>
                {/* <Col xs={"auto"} className='justify-content-start d-grid ps-2 g-0'>
                  <Link href={"/"} className='text-grad'>
                    <Image priority={true} src={logo} alt='patils-ranch-logo' className='logo' />
                  </Link>
                </Col> */}
                <Col xs={"auto"} className='justify-content-start d-grid g-0'>
                  <Link href={"/#"} onClick={handleLogoClick} className='deco-none header-link text-uppercase v-center ps-3 text-color-1'>
                    <b className='text-grad Namaste Globals-logo'>
                      Namaste Globals
                    </b>
                  </Link>
                </Col>
                <Col xs={"auto"} className='justify-content-end d-grid g-0 p-2 ms-auto'>
                  <HambergerMenu />
                </Col>
              </Row>

              <sidebar className="g-0">
                <div className="offcanvas offcanvas-start theSidebar vh-100" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                  <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title text-grad text-uppercase" id="offcanvasWithBothOptionsLabel">
                      <b className='Namaste Globals-logo'>
                        Namaste Globals
                      </b>
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body pt-0">
                    <HambergerMenuLinks />
                  </div>
                </div>
              </sidebar>

            </div>
          </navbar>
        </div>
      </header>
    </header1 >
  )
}



// css for this ...

// .header-div {
//   position: sticky;
//   transition-property: all;
//   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//   transition-duration: 500ms;
//   box-shadow: 7px 8px 20px -2px rgba(0, 0, 0, 0.21);
// }

// .header-show {
//   top: 0px;
// }

// .header-hide {
//   top: -8rem;
// }