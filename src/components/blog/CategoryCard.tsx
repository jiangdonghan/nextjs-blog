import Link from 'next/link';
import React, { useEffect } from 'react';

import { getCategories } from '@/services/requests';

export interface CategoryModel {
  name: string;
  slug: string;
}
const CategoryCard = () => {
  const [categories, setCategories] = React.useState<CategoryModel[]>([]);
  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  return (
    <div className='mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg'>
      <h3 className='mb-8 border-b pb-4 text-xl font-semibold '>Categories</h3>
      {categories.map((category) => {
        return (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            passHref
          >
            <span className='mb-3 block cursor-pointer pb-3'>
              {category.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryCard;
