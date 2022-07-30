import Link from 'next/link';
import * as React from 'react';

import Seo from '@/components/Seo';

import GithubLogo from '../../public/images/github-circle.svg';
import LinkedInLogo from '../../public/images/linkedin-square.svg';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <>
      <Seo templateTitle='Home' />
      <img
        src='http://placekitten.com/g/300/300'
        alt='me'
        className='m-auto mt-12 mb-12 rounded-full'
      />
      <h1 className='mb-12 text-center text-6xl text-gray-800'>
        Donghan<span className='hidden md:contents '>(Jimmy)</span> Jiang
      </h1>
      <p className='text-center text-3xl'>
        <span className='text-yellow-400'>Enthusiastic</span> Web Developer
      </p>
      <div className='m-auto mt-12 flex w-20 justify-between'>
        <Link
          href='https://linkedin.com/in/donghan-jimmy-jiang-675962104'
          passHref
        >
          <LinkedInLogo className='h-8 w-8 rounded-full' />
        </Link>
        <Link href='https://github.com/jiangdonghan' passHref>
          <GithubLogo className='h-8 w-8 rounded-full' />
        </Link>
      </div>
    </>
  );
}
