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
      'Hi, I’m Donghan(Jimmy) Jiang and I graduated from Queensland University of Technology in 2021 with a master degree in Computer Science.',
      'My interests are in website development, and I love to create beautiful and performant products with delightful user experiences and i have solid skills for web development, such as CSS, JavaScript, TypeScript, React and Vue.js.',
      'I previously worked at Agora.io for two years as a full stack developer, where I led the enterprise management system and ticket system. Apart from that, i also contributed to dev community website and agora cn official website. Agora is the leading video, voice and live interactive streaming platform in the world, helping developers deliver rich in-app experiences.',
      'I built and maintain these projects with one other engineer over the period of two years. The enterprise management system is on a TypeScript, Vue/Vuex and Node.js stack. The ticket system is on a TypeScript, React/Redux and Node.js stack. The database for all the projects is MySQL.',
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
  ],
};
