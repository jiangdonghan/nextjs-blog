import moment from 'moment';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { PostCardProps } from '@/components/blog/PostCard';

const PostDetail: React.FC<PostCardProps> = (post: PostCardProps) => {
  const getContentFragment = (
    index: number,
    text: any,
    obj: any,
    type?: string
  ) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className='mb-4 text-xl font-semibold'>
            {modifiedText.map((item: any, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case 'paragraph':
        return (
          <p key={index} className='mb-8'>
            {modifiedText.map((item: any, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case 'heading-four':
        return (
          <h4 key={index} className='text-md mb-4 font-semibold'>
            {modifiedText.map((item: any, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className='rounded-lg bg-white pb-12 shadow-lg lg:p-8'>
      <div className='relative mb-6 overflow-hidden shadow-md'>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className='h-full w-full rounded-t-lg object-top'
        />
      </div>
      <div className='px-4 lg:px-0'>
        <div className='mb-8 flex w-full items-center'>
          <div className=' mr-8 ml-4 flex items-center justify-center  lg:mb-0 lg:w-auto'>
            <img
              alt={post.author.name}
              height='30px'
              width='30px'
              className='rounded-full align-middle'
              src={post.author.photo && post.author.photo.url}
            />
            <p className='ml-2 inline align-middle text-lg text-gray-700'>
              {post.author.name}
            </p>
          </div>
          <div className='w-full font-medium text-gray-700'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='mr-2 inline h-6 w-6 text-pink-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>
            <span className='align-middle'>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </span>
          </div>
        </div>
        <h1 className='mb-8 text-3xl font-semibold '>{post.title}</h1>
        {!post.useMarkdown ? (
          ((post.content?.raw && post.content.raw.children) || []).map(
            (typeoObj, index) => {
              const children = typeoObj.children.map((item, index) =>
                getContentFragment(index, item.text, item)
              );
              return getContentFragment(
                index,
                children,
                typeoObj,
                typeoObj.type
              );
            }
          )
        ) : (
          <article className='prose-a:text-blue-600" prose prose-slate prose-headings:underline prose-img:rounded-xl'>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              className='markdown-wrapper'
            >
              {post.contentMarkdown || ''}
            </ReactMarkdown>
          </article>
        )}
      </div>
    </div>
  );
};

export default PostDetail;
