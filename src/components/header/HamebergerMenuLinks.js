import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import arrow from '../../../public/svg/socials/arrow.svg';
import { navLinks } from './NavLinksData'; // Assuming navLinks is exported from this file

export default function NavLinks() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentPath = router.asPath;

  return (
    <div className="col">
      {navLinks.map((link, index) => {
        const isActive = mounted && currentPath === link.path;

        return (
          <div
            key={index}
            className="row pt-2 pb-2 text-start border-bottom border-secondary"
            data-bs-dismiss="offcanvas"
          >
            <Link
              href={link.path}
              className={`deco-none col ham-link ${isActive ? 'active-link' : ''}`}
            >
              {link.name}
              <div className="col d-flex justify-content-end">
                <Image                  
                  src={arrow}
                  alt="arrow"
                  className="arrow-icon text-end"
                />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
