import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useEffect } from 'react';

import { CategoryCard, ErrorView, PostCard, PostWidget } from '@/components';
import Loader from '@/components/blog/Loader';
import { PostCardProps } from '@/components/blog/PostCard';

import { Get_Posts } from '@/services';

interface Post {
  node: PostCardProps;
}

const BlogPage = () => {
  const router = useRouter();
  const { first, after } = router.query;
  const [postsData, setPostsData] = React.useState<Post[]>([]);

  const { loading, error, data, refetch } = useQuery(Get_Posts, {
    variables: {
      first: first ? Number(first) : 2,
      after: after ? after : null,
    },
  });

  useEffect(() => {
    refetch({ first: first ? Number(first) : 2, after: after ? after : null });
  }, [first, after, refetch]);

  useEffect(() => {
    if (!data) {
      return;
    }
    setPostsData(data.postsConnection.edges);
  }, [data]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorView error={error.message} />;
  }
  return (
    <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
      <div className='col-span-1 lg:col-span-8'>
        {postsData.map((post) => (
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
