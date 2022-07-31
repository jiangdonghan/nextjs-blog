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
        <div className='text-left text-base leading-relaxed text-yellow-100 md:text-center'>
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
        <div>
          {PortfolioData.projects.map((project) => ProjectCard({ project }))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
