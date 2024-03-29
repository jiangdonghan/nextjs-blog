import { GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import {
  Author,
  CategoryCard,
  CommentForm,
  Comments,
  PostDetail,
  PostWidget,
} from '@/components';
import Loader from '@/components/blog/Loader';
import { PostCardProps } from '@/components/blog/PostCard';

import { getPostDetails, getPosts } from '@/services/requests';

const PostDetails = ({ post }: { post: PostCardProps }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className='container mx-auto mb-8'>
      <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
        <div className='col-span-1 lg:col-span-8'>
          <PostDetail {...post} />
          <Author author={post.author} />
          <CommentForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative top-8 lg:sticky'>
            <PostWidget
              categories={post.categories.map((item) => item.slug)}
              slug={post.slug}
            />
            <CategoryCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }: { params: { slug: string } }) {
  let post: PostCardProps | null = null;
  try {
    post = (await getPostDetails(params.slug)) || {};
  } catch {
    //todo error catch
  }

  return {
    props: {
      post: post,
    },
  };
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }: { node: { slug: string } }) => {
      return {
        params: {
          slug,
        },
      };
    }), //indicates that no page needs be created at build time
    fallback: false, //indicates the type of fallback
  };
};
