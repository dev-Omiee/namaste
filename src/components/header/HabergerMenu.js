import React, { useState } from 'react'

export default function HabergerMenu() {
    const [style, setStyle] = useState("ham-lines");

    const changeStyle = () => {

        if (style == "ham-lines") {
            setStyle("ham-cross");
        } else {
            setStyle("ham-lines");
        }
    };
    return (
        <hamburger className='col-1 show-nav-menu hamburger col text-end align-items justify-content-center show-nav-menu'>
            <div className={style} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>

            {/* Brand Logo or Company Name Transition Effect --> On Hamberger Menu Toggle To --> 1. Cross, 2. Back To Three Lines */}

            {/* <div className={style}>
            <div className='brand-logo'>
              Company Name
            </div>
          </div> */}

        </hamburger>
    )
}
