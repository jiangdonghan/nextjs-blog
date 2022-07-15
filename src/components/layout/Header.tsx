import Link from 'next/link';
import React, { useEffect } from 'react';

import { CategoryModel } from '@/components/CategoryCard';

import { getCategories } from '@/services';

const Header = () => {
  const [categories, setCategories] = React.useState<CategoryModel[]>([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  return (
    <div className='container mx-auto mb-8 px-10'>
      <div className='inline-block w-full border-b border-blue-400 py-8'>
        <div className='block md:float-left'>
          <Link href='/' passHref>
            <span className='cursor-pointer text-4xl font-bold text-white'>
              Donghan&apos;s Blog
            </span>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
          {categories.map((category) => (
            <Link
              href={`/category/${category.slug}`}
              key={category.slug}
              passHref
            >
              <span className='mt-2 ml-4 cursor-pointer align-middle font-bold font-semibold text-white md:float-right'>
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
