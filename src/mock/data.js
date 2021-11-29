import { nanoid } from 'nanoid';
import React from 'react';
import TechnicalSkills from '../components/Content/TechnicalSkills';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello! My name is',
  name: 'Bryce Beckenbach,',
  subtitle: 'I am a Software Developer located in Jacksonville, Florida.',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'professional_shot.jpeg',
  paragraphOne: `
  Welcome to my page and thank you for visiting! 
  I am a Software Developer with an Electrical Engineering educational 
  background and 4 years professional experience as an Application Engineer 
  and Inside Sales Engineer.`,
  paragraphTwo: `
  With a proven track record as a technical problem-solver from both my educational 
  and professional background as well as a life-long passion for building and creating, 
  I continue to pursue mastery of software development. I would love to explore ways 
  that I can help your organization succeed.`,
  paragraphThree: <TechnicalSkills />,
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'DisplayView.png',
    title: 'Wealth and Budget App',
    info: 'Full-Stack wealth aggregation dashboard and budget notification application. Utilizing the Plaid API, it allows users to connect and view balances of their financial institutions (e.g. Chase and/or Charles Schwab). Through the integration of the Twilio API, users can schedule budget notification text messages to the mobile number attached to their profile.',
    info2:
      'Tech Stack: PostgreSQL, Flask, Python, SQLAlchemy, CronJobs, WTForms, Bcrypt, Jinja2, HTML5, CSS, JavaScript, JQuery, BootStrap, Axios',
    url: 'https://wealth-and-budget.herokuapp.com/',
    repo: 'https://github.com/bbeckenb/Wealth_and_Budget_App', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Please reach out, I would love to discuss how I can help your organization!',
  btn: 'Email Me',
  email: 'brycebeckenbach@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/bryce-beckenbach-52a5276a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/bbeckenb',
    },
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:brycebeckenbach@gmail.com',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
