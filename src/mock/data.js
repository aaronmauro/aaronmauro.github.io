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
  paragraphOne:
    "I'm Assistant Professor of Digital Media at Brock University in the Centre for Digital Humanities. I teach on topics relating to digital culture, natural language processing, and app development.",
  paragraphTwo:
    "I've published articles on U.S. literature and culture, which have appeared in Modern Fiction Studies, Mosaic, and Symploke among others. I have also published on issues relating to digital humanities in both Digital Studies and Digital Humanities Quarterly.",
  paragraphThree:
    'My forthcoming book is called Hacking in the Humanities: Cybersecurity, Speculative Fiction and Navigating a Digital Future (Bloomsbury Publishing).',
  resume: 'https://www.aaronmauro.com/static/aaron_mauro_cv.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cover_hack.jpg',
    title:
      'Hacking in the Humanities: Cybersecurity, Speculative Fiction and Navigating a Digital Future',
    info:
      'This book looks to speculative fiction, cyberpunk and the digital humanities to bring a human — and humanistic — perspective to the issue of cybersecurity. It argues that through these stories we are able to predict the future political, cultural, and social realities emerging from technological change.',
    info2:
      'Making the case for a security-minded humanities education, this book examines pressing issues of data security, privacy, social engineering and more, illustrating how the humanities offer the critical, technical, and ethical insights needed to oppose the normalization of surveillance, disinformation, and coercion. In doing so, Hacking in the Humanities argues for a wider notion of literacy, which includes the ability to write and fight the computer code that shapes our lives.',
    url: 'https://www.bloomsbury.com/us/hacking-in-the-humanities-9781350231009/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cover_skc.jpg',
    title: 'Social Knowledge Creation in the Humanities',
    info:
      'In the humanities, the field of “social knowledge creation” has helped define how social media platforms and other collaborative spaces have shaped humanistic critique in the twenty-first century.',
    info2:
      'The essays collected in this volume represent a humanistic ethics of generosity, compassion, and care. Social knowledge creation refreshingly returns to humanist values in the age of social media, emphasizing that people matter more than networks, facts matter more than opinion, and ideas matter more than influence. As a result, the speed and scale of digital culture has challenged humanists from many disciplines to more clearly define the values of education, collaboration, and new knowledge in pursuit of human justice and equality. In short, online culture has presented a new opportunity to define how and why the humanities matter in the age of social media.',
    url: 'https://press.uchicago.edu/ucp/books/book/distributed/S/bo99702245.html',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robo_poetics_cover_2.png',
    title: 'Robo Poetics',
    info:
      'This document is a collaborative project by the students of IASC 1F01. This course is the introductory course for the Interactive Arts and Science undergraduate major in the Centre for Digital Humanities at Brock University. Our program is a multidisciplinary program that seeks to prepare the next generation of digital media innovators and scholars',
    info2:
      'This iteration of the course sought to explore issues related to artificial intelligence (AI). We read several short stories about AI and used the perspective granted by speculative fiction to think deeply about current trends.By the conclusion of the semester, students were able to use the TensorFlow machine learning library to train a Recursive Neural Network to generate "AI poetry" based on student selected training data.',
    url: 'https://github.com/aaronmauro/robopoetics/raw/main/robopoetics.epub',
    repo: 'https://github.com/aaronmauro/robopoetics/', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Email is great!',
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
