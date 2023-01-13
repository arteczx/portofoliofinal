import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Filius',
  description: ``,
  ogImageUrl: ``,
  twitterCardType: 'summary_large',
  twitterSite: `@filius.edward`,
  twitterCreator: `@filius.edward`,
  twitterDomain: `instagram.com`,
  twitterUrl: `https://reactresume.com`,
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Filius Edward.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Indonesian <strong className="text-stone-100">Back End development</strong>, currently working
        at <strong className="text-stone-100">Cyber Tool</strong> making tool for pentesting
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Swimming</strong>,
        coding for <strong className="text-stone-100">money</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Indonesian Island</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://download1350.mediafire.com/lzs5jmtmbpug/d8zpnbay5yff5uz/Resume+Filius+Edward+%285%29.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  description: `I live in indonesia,Yogyakarta. now i Junior High School and i'm fresh graduet`,
  aboutItems: [
    {label: 'Location', text: 'Indonesia,Sleman', Icon: MapIcon},
    {label: 'Age', text: '13', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indonesian', Icon: FlagIcon},
    {label: 'Interests', text: 'Swimming,Telekinesis,Coding', Icon: SparklesIcon},
    {label: 'Study', text: 'Kanisius Junior High School', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Fresh', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Indonesia',
        level: 10,
      },
      {
        name: 'Javanease',
        level: 5,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 3,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'News App',
    description: 'News App using React Native',
    url: 'https://github.com/arteczx/newsApp',
    image: porfolioImage1,
  }

];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2004 - 2005',
    location: 'Sleman',
    title: 'kindergarten',
    content: <p>Learning Basic Life </p>,
  },
  {
    date: 'July 2005 - 2022',
    location: 'Sleman',
    title: 'Elementary School',
    content: <p>Learning Coding and life</p>,
  },
  {
    date: 'July 2022 - Present',
    location: 'Sleman',
    title: 'Junior High School',
    content: <p>Learning What is life and mastered pentesting </p>
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'Born - Present',
    location: 'Sleman',
    title: 'Fresh Graduate',
    content: (
      <p>
        Just Fresh Graduate
      </p>
    ),
  }
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'My Friend',
      text: 'Lius is good for do coding',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Me',
      text: 'i good for coding',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Lius is good at cyber defense',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'callmerexxqw@gmail.com',
      href: 'mailto:callmerexxqw@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Indonesia,Yogyakarta,Sleman',
      href: 'https://www.google.com/maps/place/Kec.+Sleman,+Kabupaten+Sleman,+Daerah+Istimewa+Yogyakarta/@-7.695127,110.3094608,13z/',
    },
    {
      type: ContactType.Instagram,
      text: '@filius.edward',
      href: 'https://www.instagram.com/filius.edward/',
    },
    {
      type: ContactType.Github,
      text: 'Arteczx',
      href: 'https://github.com/arteczx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/arteczx'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/filius.edward/'}
];
