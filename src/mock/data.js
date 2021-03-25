import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Aaron Mauro | Assistant Professor of Digital Media', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Humanist | Developer | Educator', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Aaron Mauro.',
  subtitle: "I'm a Digital Humanist.",
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne: "I'm Assistant Professor of Digital Media at Brock University in the Centre for Digital Humanities. I teach on topics relating to digital culture, natural language processing, and app development.",
  paragraphTwo: "I've published articles on U.S. literature and culture, which have appeared in Modern Fiction Studies, Mosaic, and Symploke among others. I have also published on issues relating to digital humanities in both Digital Studies and Digital Humanities Quarterly.",
  paragraphThree: "My forthcoming book is called Human Exploits, Cyberpunk, and the Digital Humanities: Cybersecurity for Humanists (Bloomsbury Publishing).",
  resume: 'https://www.aaronmauro.com/aaron_mauro_cv.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/aaronmauro', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Email is great!",
  btn: "Let's talk",
  email: 'amauro@brocku.ca',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/onthename',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aaron-mauro-5b62b529/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/aaronmauro',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
