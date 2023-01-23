import Link from 'next/link';
import React from 'react';

const ErrorView = ({ error }: { error: string }) => {
  return (
    <div className='bg-red-500 p-6 text-white'>
      <div className='container mx-auto'>
        <h1 className='text-3xl font-medium'>Oops! Something went wrong.</h1>
        <p className='mt-4'>
          We were unable to fulfill your request. Please try again later.
        </p>
        <p className='mt-4'>{error} </p>
        <div className='mt-6 cursor-pointer'>
          <Link href='/' passHref>
            <span className='rounded-lg bg-white p-3 text-red-500 hover:bg-red-500 hover:text-white'>
              Go Home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorView;
