import Image from 'next/image';
import React from 'react';

import { PostCardProps } from '@/components/PostCard';

const Author: React.FC<Pick<PostCardProps, 'author'>> = ({ author }) => {
  return (
    <div className='relative mt-20 mb-8 rounded-lg bg-black bg-opacity-20 p-12 text-center'>
      <div className='absolute left-0 right-2 -top-14'>
        <Image
          unoptimized
          alt={author.name}
          height='100px'
          width='100px'
          className='rounded-full align-middle'
          src={author.photo.url}
        />
      </div>
      <h3 className='my-4 text-xl font-bold text-white'>{author.name}</h3>
      <p className='text-lg text-white'>{author.bio}</p>
    </div>
  );
};

export default Author;
