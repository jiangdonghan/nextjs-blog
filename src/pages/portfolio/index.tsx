import PersonalInfoCard from '@/components/portfolio/PersonalInfoCard';
import ProjectCard from '@/components/portfolio/ProjectCard';

import { PortfolioData } from '~/metadata/portfolio';

const PortfolioPage = () => {
  return (
    <div>
      <PersonalInfoCard {...PortfolioData} />
      <h2 className='mt-12 mb-4 text-center text-2xl font-extrabold md:text-4xl'>
        About Me
      </h2>
      <div className='mx-auto mt-12 max-w-4xl'>
        <div className='text-center text-base leading-relaxed text-gray-50'>
          <p className='mb-4'>
            Hi, I’m Donghan(Jimmy) Jiang and I graduated from Queensland
            University of Technology with a master degree in Computer Science.
          </p>
          <p className='mb-4'>
            My interests are in website development, and I love to create
            beautiful and performant products with delightful user experiences
            and i have solid skills for web development, such as CSS,
            JavaScript, TypeScript, React and Vue.js.
          </p>
          <p className='mb-4'>
            I previously worked at Agora.io for two years as a full stack
            developer, where I participated in the customer management system
            and billing system. Apart from that, i also contributed to dev
            community website , agora cn official website and ticket system.
            Agora is the leading video, voice and live interactive streaming
            platform in the world, helping developers deliver rich in-app
            experiences.
          </p>
          <p className='mb-4'>
            I would love to find a job in New Zealand and make New Zealand a
            permanent home for me.
          </p>
        </div>
        <h2 className='mt-8 mb-8 text-center text-2xl font-extrabold md:text-4xl'>
          Skills
        </h2>
        <div className='text-center text-base leading-relaxed text-yellow-100'>
          {PortfolioData.about.description.map((item, index) => {
            return (
              <p key={index} className='mb-4'>
                {item}
              </p>
            );
          })}
        </div>
        <h2 className='mt-8 mb-8 text-center text-2xl font-extrabold md:text-4xl'>
          My projects
        </h2>
        <div className=''>
          {PortfolioData.projects.map((project) => ProjectCard({ project }))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
