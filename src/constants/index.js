export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'BlogSpace - MERN Stack Blogging Platform',
    desc: 'BlogSpace is an intuitive platform designed to simplify blogging. With features powered by the MERN stack, it provides a seamless experience for creators to share their thoughts and ideas with the world.',
    subdesc:
      'Built as a robust web application using React.js, Tailwind CSS, Node.js, MongoDB, and Framer Motion, BlogSpace is crafted for high performance and scalability, offering a modern blogging solution.',
    href: 'https://techspaceblogs.netlify.app',
    texture: '/textures/project/project6.mp4',
    logo: '/assets/blogspace/logo-dark.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'ShortIt - MERN Stack URL Shortener',
    desc: 'ShortIt is a powerful and efficient URL shortener application. Built using the MERN stack with Redis integration, it offers fast and reliable link shortening and redirection services.',
    subdesc:
      'Developed with React.js, Tailwind CSS, Node.js, MongoDB, and Redis, ShortIt ensures high performance, scalability, and seamless user experience, making URL management simple and effective.',
    href: 'https://shrtt.netlify.app',
    texture: '/textures/project/sortit.mp4',
    logo: '/assets/sortit/logo.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Kuvaka Tech',
    pos: 'Software Developer',
    duration: 'Feb,2024 - Present',
    title: "As a Software Developer at Kuvaka Tech, I lead the development of innovative solutions using modern tools like Framer to create interactive prototypes and bring designs to life.",
    icon: '/assets/kuvaka.svg',
    animation: 'victory',
  },
  {
    id: 4,
    name: 'Physifit',
    pos: 'Software Developer',
    duration: 'Oct, 2022 - Jan, 2024',
    title: "Promoted to Software Developer, I worked on optimizing performance, maintaining the UI, and implementing new features for Physifit's fitness applications.",
    icon: '/assets/physifit.svg',
    animation: 'clapping',
  },
  {
    id: 5,
    name: 'Physifit',
    pos: 'Software Intern',
    duration: 'Apr, 2022 - Oct, 2022',
    title: "As a Software Intern at Physifit, I contributed to developing UI features and improving user experience for fitness tracking applications.",
    icon: '/assets/physifit.svg',
    animation: 'salute',
  },
  
];
