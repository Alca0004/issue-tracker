'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { GiLongAntennaeBug } from 'react-icons/gi';
import classnames from 'classnames';

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ];

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center '>
      <Link href='/'>
        <GiLongAntennaeBug />
      </Link>
      <ul className='flex space-x-6'>
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              'text-zinc-900': link.href === currentPath,
              'text-zinc-500': link.href !== currentPath,
              'hover:text-zinc-800 transition-colors': true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

//npm install react-icons@4.11.0
//npm install classnames@2.3.2
//Setting up mySQL and datagrip
//Setting up prisma
