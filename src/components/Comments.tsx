import parse from 'html-react-parser';
import moment from 'moment';
import React, { useEffect } from 'react';

import { getComments } from '@/services';
const Comments: React.FC<{ slug: string }> = ({ slug }) => {
  const [comments, setComments] = React.useState<any[]>([]);

  useEffect(() => {
    getComments(slug).then((newComments) => {
      setComments(newComments);
    });
  }, [slug]);
  return (
    <>
      {comments.length > 0 && (
        <div className='mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg'>
          <h3 className='mb-8 border-b pb-4 text-xl font-semibold'>
            {comments.length} Comments
          </h3>
          {comments.map((comment) => {
            return (
              <div
                className='mb-4 border-b border-gray-100 pb-4'
                key={comment.createdAt}
              >
                <p className='mb-4'>
                  <span className='font-semibold'>{comment.name}</span> on{' '}
                  {moment(comment.createdAt).format('MMMM Do YYYY')}
                </p>
                <p className='w-full whitespace-pre-line text-gray-600'>
                  {parse(comment.comment)}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Comments;
