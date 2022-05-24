import * as React from 'react';

import { CategoryCard, PostCard, PostWidget } from '@/components';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

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

const posts = [
  {
    title: 'React Testing',
    excerpt: 'Learning React Testing',
  },
  { title: 'React Testing', excerpt: 'Learning React Testing' },
];

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
        <div className='col-span-1 lg:col-span-8'>
          {posts.map((post) => (
            <PostCard {...post} key={post.title} />
          ))}
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative top-8 lg:sticky'>
            <PostWidget />
            <CategoryCard />
          </div>
        </div>
      </div>
    </Layout>
  );
}
