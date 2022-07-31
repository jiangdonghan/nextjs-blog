import { useRouter } from 'next/router';
import React from 'react';

import Loader from '@/components/blog/Loader';
import { PostCardProps } from '@/components/blog/PostCard';

import { getCategories, getCategoryPost } from '@/services';

import { CategoryCard, PostCard } from '../../components';

const CategoryPost = ({ posts }: { posts: { node: PostCardProps }[] }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className='container mx-auto mb-8'>
      <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
        <div className='col-span-1 lg:col-span-8'>
          {posts.map((post, index) => (
            <PostCard key={index} {...post.node} />
          ))}
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative top-8 lg:sticky'>
            <CategoryCard />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }: { params: { slug: string } }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }: { slug: string }) => ({
      params: { slug },
    })),
    fallback: true,
  };
}
