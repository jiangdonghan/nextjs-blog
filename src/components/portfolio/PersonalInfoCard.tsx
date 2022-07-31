import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

const PersonalInfoCard: React.FC<{
  name: string;
  title: string;
  social: { [p: string]: string };
}> = ({ name, title, social: { github, linkedIn, email } }) => {
  return (
    <div className='w-full'>
      <div className='mx-auto flex max-w-xs flex-col justify-center rounded-xl bg-white p-5 shadow-xl'>
        <div className=''>
          <img
            className='mx-auto w-32 rounded-full shadow-xl'
            src='http://placekitten.com/g/300/300'
            alt='Avatar'
          />
        </div>
        <div className='mt-5 text-center'>
          <p className='text-xl font-semibold text-gray-900 sm:text-2xl'>
            {name}
          </p>
          <p className='inline-block w-auto border-b-2 px-5 pt-2 pb-4 text-xs text-gray-600 sm:text-base'>
            {title}
          </p>
          <div className='align-center mt-4 flex justify-center'>
            <a
              className='m-1 rounded-full p-1 text-xl text-gray-800 transition-colors duration-300 hover:bg-gray-800 hover:text-white sm:m-2 sm:p-2'
              href={github}
            >
              <FaGithub />
              <span className='sr-only'>Github</span>
            </a>
            <a
              className='m-1 rounded-full p-1 text-xl text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white sm:m-2 sm:p-2'
              href={linkedIn}
            >
              <FaLinkedin />
              <span className='sr-only'>LinkedIn</span>
            </a>
            <a
              className='m-1 rounded-full p-1 text-xl text-teal-500 transition-colors duration-300 hover:bg-teal-500 hover:text-white sm:m-2 sm:p-2'
              href={'https://mail.google.com/mail/?view=cm&fs=1&to=' + email}
            >
              <FaRegEnvelope />
              <span className='sr-only'>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoCard;
