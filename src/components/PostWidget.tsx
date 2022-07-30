import moment from 'moment';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { PostCardProps } from '@/components/PostCard';

import { getRecentPosts, getSimilarPosts } from '@/services';

interface PostWidgetProps {
  categories?: string[];
  slug?: string;
}
const PostWidget: React.FC<PostWidgetProps> = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState<PostCardProps[]>([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(slug, categories || []).then((posts) => {
        setRelatedPosts(posts);
      });
    } else {
      getRecentPosts().then((posts) => {
        setRelatedPosts(posts);
      });
    }
  }, [slug, categories]);
  return (
    <div className='mb-8 rounded-lg bg-white p-8 shadow-lg'>
      <h3 className='mb-8 border-b pb-4 text-xl font-semibold '>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div className='mb-2 flex w-full items-center' key={post.title}>
          <div className='w-16 flex-none'>
            <img
              alt={post.title}
              width='60px'
              height='60px'
              className='rounded-full align-middle'
              src={post.featuredImage.url}
            />
          </div>
          <div className='ml-4 flex-grow'>
            <p className='font-xs text-gray-500'>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
