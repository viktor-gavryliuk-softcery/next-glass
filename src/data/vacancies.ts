export interface iVacancy {
  name: string;
  label: string;
  imageUrl: string;
  greeting?: string;
  conditions: string[];
  responsibilities: string[];
  requirements: {
    softSkills: string[];
    hardSkills: string[];
    willBeAPlus?: string[];
  };
  linkToForm: string;
}

export type VacanciesDataType = iVacancy[];

const VacanciesData: VacanciesDataType = [
  {
    name: 'HR Manager',
    imageUrl: '/vacancies/hr.gif',
    label: 'HR',
    greeting: `Do you know people and read horoscopes? Do you know the best way to prevent burnout?
    We are waiting for you on the position of HR Manager at ADS CONTROL 🐙`,
    conditions: [
      'Work location: Remote/Office (later)',
      'Language lessons within the team',
      'Salary: Linked to KPI (base rate + bonuses)',
      'Additional features: Team events, Own merch',
    ],
    responsibilities: [
      'Write job descriptions',
      'Search for candidates',
      'Conduct initial interviews',
      'Employee hunting',
      'Build a candidate database',
      'Organize team-building events',
      'Support team spirit',
      'Employee surveys',
      'Report writing',
    ],
    requirements: {
      softSkills: [
        'Communication',
        'Sociability',
        'Dedication',
        'Stress resistance',
        'Adaptability',
        'Leadership',
        'Energetic',
      ],
      hardSkills: [
        'Experience: At least 6 months',
        'Understanding of Web3 and blockchain',
        'Agile methodology',
        'English level: B2',
        'Proficiency',
      ],
      willBeAPlus: ['Experience with cryptocurrencies', 'Previous position experience'],
    },
    linkToForm: 'https://forms.gle/HDbPFnkUcqCaJ9LY7',
  },
  {
    name: 'Media Buyer',
    greeting: `The marketplace is teeming with bans, but everything runs perfectly for you because you are a Media Buyer in ADS CONTROL 🐙`,
    imageUrl: '/vacancies/buyer.gif',
    label: 'media buyer',
    conditions: [
      'Remote/Office work (later)',
      'Work with large projects',
      'English language lessons within the team',
      'Free access to Netflix',
      'Top team',
      'Top product confidently heading to Top-1',
      'Base rate + % from the budget + KPI',
      'Additional features from the team',
    ],
    responsibilities: [
      'Development and management of advertising campaigns',
      'Writing specifications for designers',
      'Market and competitor analysis',
      'Communication with platform support and resolution of account blocking issues',
      'Monitoring, analysis, and optimization of advertising effectiveness',
      'Regular reporting on the results of advertising campaigns',
      'Collaboration with the team to achieve advertising goals',
      'Tracking the latest trends in the media and advertising industry for increased effectiveness',
    ],
    requirements: {
      softSkills: [
        'Ability to work with anti-detection browsers',
        'Proxies and trackers',
        'Teamwork skills',
        'High level of self-motivation and initiative',
      ],
      hardSkills: [
        'At least 1 year of experience as a Targetologist/Media Buyer (Meta Ads)',
        'Experience in working with grey niches',
      ],
      willBeAPlus: [
        'English proficiency at B1 level or higher',
        'Experience or understanding of Reddit Ads, Twitter Ads',
      ],
    },
    linkToForm: 'https://forms.gle/nQvB92ckazm6nRZR7',
  },
  {
    name: 'Social Media Manager',
    imageUrl: '/vacancies/smm.gif',
    label: 'SMM',
    greeting: 'Social Media Manager in ADS CONTROL 🐙 ',
    conditions: [
      'Work location: Remote/Office (later)',
      'Salary: Competitive',
      'Social media management',
      'Content creation and curation',
      'Flexible working hours',
    ],
    responsibilities: [
      'Development of static and dynamic designs',
      'Development of presentations',
      'Development of motion graphics',
      'Development of guidelines and style for projects',
      'Constant generation of creative ideas',
      'Brainstorming on product design',
      'Contribute your creativity to the technical specifications',
    ],
    requirements: {
      softSkills: [
        'Creativity',
        'Multitasking',
        'Stress resistance',
        'Flexibility/Adaptability',
        'Productivity',
        'Mindfulness',
      ],
      hardSkills: [
        '1 year of experience in the field of design',
        'Strong presentation and graphic design skills',
        'Experience in developing guidelines',
        'Experience with motion-design',
        'Experience with Adobe Photoshop/After Effects, Figma, Blender',
        'Ability to use search engines correctly',
        'English language from B1 (Intermediate) level',
      ],
      willBeAPlus: [
        'Speed in performing tasks',
        'Minimal understanding of web3/blockchain technologies',
      ],
    },
    linkToForm: 'https://forms.gle/4kRfxHtfiHeCGUxt9',
  },
  {
    name: 'Sales Manager',
    imageUrl: '/vacancies/sales.gif',
    label: 'Sales',
    greeting:
      "When You sign a new project, the whole team thanks you and gets charged up for signing new contracts - that's how you can describe a Sales Manager at ADS CONTROL 🐙",
    conditions: [
      'Work location: Remote/Office (later)',
      'Language lessons within the team',
      'Salary: Linked to KPI (base rate + bonuses)',
      'Additional features: Team events, Own merch',
    ],
    responsibilities: [
      'Work with the existing lead database',
      'Analysis of previous transactions',
      'Analyzing offers and products of potential customers',
      'Communication with potential customers',
      'Strong product presentation',
      'Search for new channels of communication with the existing lead base',
      'Optimization of scripts and offers',
      'Consulting potential clients',
      'Proper work with objections.',
    ],
    requirements: {
      softSkills: [
        'Communication skills',
        'Independence',
        'Stress resistance',
        'Adaptability',
        'Leadership',
        'Energy.',
      ],
      hardSkills: [
        'Experience: Minimum 6 months',
        'Understanding of Web3 and blockchain',
        'Agile methodology',
        'English level: B2',
      ],
      willBeAPlus: ['Experience with crypto', 'Experience in a similar position'],
    },
    linkToForm: 'https://forms.gle/tSeHQnXRzJTCmeu96',
  },
  {
    name: 'Lead Generation Manager',
    imageUrl: '/vacancies/buyer.gif',
    label: 'Lead Gen',
    greeting:
      'Lead Generation Manager at ADS CONTROL 🐙 is more than just a job. We have built a gamified motivation system with bonus grids and additional bonuses',
    conditions: [
      'Work location: Remote/Office (later)',
      'Language lessons within the team',
      'Salary: Linked to KPI (base rate + bonuses)',
      'Additional features: Team events, Own merch',
    ],
    responsibilities: [
      'Work with the existing lead database',
      'Search for new leads and add them to the database',
      'Optimization of existing and search for new sources of lead generation',
      'Optimize existing scripts and write new ones',
      'Proper project review',
      'Arrange a meeting with the Sales Manager',
      'Strong product presentation',
      'Working with objections correctly',
      'Writing reports and analyzing work',
    ],
    requirements: {
      softSkills: [
        'Communication skills',
        'Multitasking',
        'Stress resistance',
        'Flexibility / Adaptability',
        'Productivity',
        'Attentiveness',
      ],
      hardSkills: [
        'Experience in lead generation from 6 months',
        'Experience with marketing',
        'English language from B1 (Intermediate) level',
      ],
      willBeAPlus: ['Experience with crypto', 'Experience in a similar position'],
    },
    linkToForm: 'https://forms.gle/HYzhnQwGGbh5RDdF6',
  },
  {
    name: 'DESIGNER',
    imageUrl: '/vacancies/buyer.gif',
    label: 'DESIGNER',
    greeting:
      'When you came to the conference to just say hello to all the partners because everyone already knows that you are Business Development Manager at ADS CONTROL 🐙',
    conditions: [
      'Work location: Remote/Office (later)',
      'Language lessons within the team',
      'Salary: Linked to KPI (base rate + bonuses)',
      'Additional features: Team events, Own merch',
    ],
    responsibilities: [
      'Market and competitor research',
      'Working with the existing partner base',
      'Searching and attracting new partners',
      'Signing contracts with partners',
      'Constant communication with partners',
      'Optimization of existing and search for new sources of partner search',
      'Optimization of existing and writing new scripts',
      'Strong product presentation',
      'Correct work with objections',
      'Improving team reputation',
      'Writing reports and analyzing work',
    ],
    requirements: {
      softSkills: [
        'Communicability',
        'Multitasking',
        'Stress resistance',
        'Flexibility/Adaptability',
        'Productivity',
        'Attentiveness',
      ],
      hardSkills: [
        'Experience in the position for at least 6 months',
        'Experience with auxiliary tools',
        'Minimal understanding of web3/blockchain technologies',
        'English language from B1 (Intermediate) level',
      ],
    },
    linkToForm:
      'https://docs.google.com/forms/d/e/1FAIpQLSdJDfDtyie-KKdSENXBhtivfFB4FQQrrjaFf8i9I1zaCGkaGA/viewform',
  },
  {
    name: 'BUSINESS DEVELOPMENT MANAGER',
    imageUrl: '/vacancies/buyer.gif',
    label: 'Biz dev',
    greeting:
      'When you came to the conference to just say hello to all the partners because everyone already knows that you are Business Development Manager at ADS CONTROL 🐙',
    conditions: [
      'Work location: Remote/Office (later)',
      'Language lessons within the team',
      'Salary: Linked to KPI (base rate + bonuses)',
      'Additional features: Team events, Own merch',
    ],
    responsibilities: [
      'Market and competitor research',
      'Working with the existing partner base',
      'Searching and attracting new partners',
      'Signing contracts with partners',
      'Constant communication with partners',
      'Optimization of existing and search for new sources of partner search',
      'Optimization of existing and writing new scripts',
      'Strong product presentation',
      'Correct work with objections',
      'Improving team reputation',
      'Writing reports and analyzing work',
    ],
    requirements: {
      softSkills: [
        'Communicability',
        'Multitasking',
        'Stress resistance',
        'Flexibility/Adaptability',
        'Productivity',
        'Attentiveness',
      ],
      hardSkills: [
        'Experience in the position for at least 6 months',
        'Experience with auxiliary tools',
        'Minimal understanding of web3/blockchain technologies',
        'English language from B1 (Intermediate) level',
      ],
    },
    linkToForm:
      'https://docs.google.com/forms/d/e/1FAIpQLSdJDfDtyie-KKdSENXBhtivfFB4FQQrrjaFf8i9I1zaCGkaGA/viewform',
  },
];

export default VacanciesData;
