import React, { useEffect, useRef, useState } from 'react';

import { submitComment } from '@/services';

const CommentForm: React.FC<{ slug: string }> = ({ slug }) => {
  const [error, setError] = useState<boolean>(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

  const commentEl: any = useRef();
  const nameEl: any = useRef();
  const emailEl: any = useRef();
  const storeDateEl: any = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
  }, []);

  const handleCommentSubmit = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeDate } = storeDateEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };
    if (storeDate) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name');
      window.localStorage.removeItem('email');
    }

    submitComment(commentObj).then(() => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };
  return (
    <div className='mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg'>
      <h3 className='mb-8 border-b pb-4 text-xl font-semibold'>
        Leave a comment
      </h3>
      <div className='mb-4 grid grid-cols-1 gap-4'>
        <textarea
          ref={commentEl}
          className='w-full rounded-lg bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200'
          placeholder='comment here...'
          name='comment'
        ></textarea>
      </div>
      <div className='mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2'>
        <input
          type='text'
          ref={nameEl}
          className='w-full rounded-lg bg-gray-100 p-4 px-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200'
          placeholder='name'
          name='name'
        />
        <input
          type='text'
          ref={emailEl}
          className='w-full rounded-lg bg-gray-100 p-4 px-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200'
          placeholder='email'
          name='email'
        />
      </div>
      <div className='mb-4 grid grid-cols-1 gap-4'>
        <div>
          <input
            ref={storeDateEl}
            type='checkbox'
            id='storeData'
            name='storeData'
            value='true'
          />
          <label
            className='ml-2 cursor-pointer text-gray-500'
            htmlFor='storeDate'
          >
            Save my name and email for the next time
          </label>
        </div>
      </div>
      {error && <p className='text-xs text-red-500'>All fields are required</p>}
      <div className='mt-8'>
        <button
          type='submit'
          className='duration transition-500 ease text inline-block cursor-pointer rounded-full bg-pink-600 px-8 py-3 text-lg text-white hover:bg-indigo-900'
          onClick={handleCommentSubmit}
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className='float-right text-xl text-green-500'>
            Comment posted successfully
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentForm;
