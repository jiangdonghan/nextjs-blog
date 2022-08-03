//todo fetch all the data from GraphCMS
export const PortfolioData = {
  name: 'Donghan(Jimmy) Jiang',
  title: 'Front-End Developer/Full-Stack Developer',
  social: {
    github: 'https://github.com/jiangdonghan',
    linkedIn: 'https://linkedin.com/in/donghan-jimmy-jiang-675962104',
    email: 'jdh67246@gmail.com',
  },
  about: {
    title: 'My Background',
    description: [
      'A self-motivated and passionate Full Stack developer',
      'Fast-learning ability',
      'Capable of writing readable, reusable, and maintainable code',
      'Practiced Agile (Scrum/XP) and familiar with SDLC',
      'With expertise in the front end (skilled in React, Vue.js, CSS, TypeScript)',
      'Experience with back end development (Node.Js, Ruby On Rails, MySQL, MongoDB, RESTful, GraphQL)',
      'Experience with front end application bundles (Webpack, Vite)',
      'Experience with CI/CD (Jenkins, Github Action)\n',
      'Hands-on experience on development and deployment projects on Amazon AWS',
    ],
  },
  skills: [
    {
      skillName: 'Frontend',
      detail: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'Vue',
        'Webpack',
      ],
    },
    {
      skillName: 'Backend',
      detail: [
        'Node.js',
        'Ruby on Rails',
        'Express',
        'Koa',
        'MySQL',
        'MongoDB',
        'RESTful API',
        'GraphQL',
      ],
    },
    {
      skillName: 'Other',
      detail: ['Git', 'GitHub', 'Jenkins', 'Docker', 'CI/CD'],
    },
  ],
  projects: [
    {
      title: 'My personal website',
      description:
        '⚡ My blog and portfolio built with NextJS, TailwindCSS and GraphQL.',
      tags: ['GraphQL', 'React', 'NextJS', 'TailwindCSS'],
      link: 'https://github.com/jiangdonghan/nextjs-blog',
    },
    {
      title: 'Online Hospital',
      description:
        '👨‍🎨 A full stack online medical system where patients can reserve doctors and see doctors through video chat.',
      tags: ['JWT', 'MySQL', 'Koa', 'React', 'Monorepo', 'WebRTC'],
      link: 'https://github.com/jiangdonghan/online-hospital',
    },
    {
      title: 'Mobile Travel Website',
      description: '👨‍ A Vue.js static travel website project in mobile view ',
      tags: ['Vue', 'Vuex'],
      link: 'https://github.com/jiangdonghan/travelsite',
    },
    {
      title: 'TS Data Structures',
      description: '👨‍ Data Structures Implemented By TypeScript',
      tags: ['TypeScript', 'Data Structure'],
      link: 'https://github.com/jiangdonghan/ts-data-structures',
    },
  ],
};
