import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { navLinks } from './NavLinksData';

export default function NavLinks() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentPath = router.asPath;

  return (
    <div className='col'>
      {navLinks.map((link, index) => {
        const targetPath = link.path;
        // const isActive = mounted && currentPath === targetPath;
        const isActive = mounted && currentPath.split('#')[0] === targetPath.split('#')[0];

        return (
          <Link
            key={index}
            href={link.path}
            className='deco-none ps-4 hov-white'
          >
            <span className={`text-uppercase header-link hov-grad ${isActive ? 'active-link' : 'text-white'}`}>
              {link.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
