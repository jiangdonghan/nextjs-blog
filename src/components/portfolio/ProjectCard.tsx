import React from 'react';
import GitHubButton from 'react-github-btn';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard: React.FC<{
  project: { title: string; description: string; tags: string[]; link: string };
}> = ({ project: { title, description, tags, link } }) => {
  return (
    <div className='group m-4 mx-auto w-full rounded-xl border-2 border-gray-300 bg-white p-6 sm:w-2/3'>
      <a href={link}>
        <h1 className='text-center text-xl font-bold'>
          {title} <FaExternalLinkAlt className='inline align-baseline' />
        </h1>
      </a>
      <hr className='my-4' />
      <p className=''>{description}</p>
      <div className='mt-4 mb-8 flex flex-wrap items-center justify-center gap-2'>
        {tags.map((tag) => (
          <div className='rounded-full border-2 px-4 py-1' key={tag}>
            {tag}
          </div>
        ))}
      </div>
      <div className='w-full text-center'>
        <GitHubButton
          href={link}
          data-color-scheme='no-preference: light; light: light; dark: light;'
          data-icon='octicon-star'
          data-size='large'
          data-show-count='true'
          aria-label='Star ntkme/github-buttons on GitHub'
        >
          Star
        </GitHubButton>
        {'  '}
        <GitHubButton
          href={link + '/fork'}
          data-color-scheme='no-preference: light; light: light; dark: light;'
          data-icon='octicon-repo-forked'
          data-size='large'
          data-show-count='true'
          aria-label='Fork ntkme/github-buttons on GitHub'
        >
          Fork
        </GitHubButton>
      </div>
    </div>
  );
};

export default ProjectCard;
