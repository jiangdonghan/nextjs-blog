import Link from 'next/link';
import React from 'react';

const Header = () => {
  const pages = [
    { name: 'Contact', path: '/contact' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <div className='container mx-auto mb-2 px-8 md:px-28'>
      <div className='inline-block w-full  py-8'>
        <div className='block hidden md:float-left md:contents'>
          <Link href='/' passHref>
            <span className='link link-underline link-underline-black cursor-pointer text-4xl font-bold text-white'>
              Home
            </span>
          </Link>
        </div>
        <div className='md:contents'>
          {pages.map((page) => (
            <Link href={page.path} key={page.path} passHref>
              <span className='link link-underline link-underline-black mt-2 ml-4 cursor-pointer align-middle text-xl font-bold font-semibold text-white md:float-right md:ml-8 md:text-2xl'>
                {page.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
