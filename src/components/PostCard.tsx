import React from 'react';

interface PostCardProps {
  title: string;
  excerpt: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, excerpt }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{excerpt}</p>
    </div>
  );
};

export default PostCard;
