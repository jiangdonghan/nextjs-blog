import * as React from 'react';

import { CategoryCard, PostCard, PostWidget } from '@/components';
import { PostCardProps } from '@/components/PostCard';

import { getPosts } from '@/services';

interface Props {
  posts: {
    node: PostCardProps;
  }[];
}

const BlogPage = ({ posts }: Props) => {
  return (
    <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
      <div className='col-span-1 lg:col-span-8'>
        {posts.map((post) => (
          <PostCard {...post.node} key={post.node.title} />
        ))}
      </div>
      <div className='col-span-1 lg:col-span-4'>
        <div className='relative top-8 lg:sticky'>
          <PostWidget />
          <CategoryCard />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

export async function getStaticProps() {
  let posts = [];
  try {
    posts = (await getPosts()) || [];
  } catch {
    //todo error catch
  }

  return {
    props: {
      posts,
    },
  };
}
