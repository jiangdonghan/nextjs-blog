import PersonalInfoCard from '@/components/portfolio/PersonalInfoCard';
import ProjectCard from '@/components/portfolio/ProjectCard';

import { PortfolioData } from '~/metadata/portfolio';

const PortfolioPage = () => {
  return (
    <div>
      <PersonalInfoCard {...PortfolioData} />
      {/*<h2 className='mt-12 mb-4 text-center text-2xl font-extrabold md:text-4xl'>*/}
      {/*  <a className={'cursor-pointer underline'}>Resume Link</a>*/}
      {/*</h2>*/}
      <div className='mx-auto mt-12 max-w-4xl'>
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
