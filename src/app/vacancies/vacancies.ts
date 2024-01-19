export interface iVacancy {
    name: string,
    label: string,
    imageUrl: string,
    greeting?: string,
    conditions: string[],
    responsibilities: string[],
    requirements: {
        softSkills: string[],
        hardSkills: string[],
        willBeAPlus: string[]
    },
    linkToForm: string
}

export type VacanciesDataType = iVacancy[];

const VacanciesData: VacanciesDataType = [
    {
        name: 'HR Manager',
        imageUrl: '/vacancies/hr.png',
        label: 'HR',
        greeting: 'Hello! We are looking for an HR Manager to join our team.',
        conditions: [
            'Work location: Remote/Office (later)',
            'Language lessons within the team',
            'Salary: Linked to KPI (base rate + bonuses)',
            'Additional features: Team events, Own merch'
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
            'Report writing'
        ],
        requirements: {
            softSkills: ['Communication', 'Sociability', 'Dedication', 'Stress resistance', 'Adaptability', 'Leadership', 'Energetic'],
            hardSkills: ['Experience: At least 6 months', 'Understanding of Web3 and blockchain', 'Agile methodology', 'English level: B2', 'Proficiency'],
            willBeAPlus: ['Experience with cryptocurrencies', 'Previous position experience']
        },
        linkToForm: 'https://forms.gle/HDbPFnkUcqCaJ9LY7'
    },
    {
        name: 'Media Buyer',
        greeting: "We are a team that provides marketing and PR services for projects in the web3/blockchain niche. Currently, we are looking for a Media Buyer for our ADS department who will become a part of our team!",
        imageUrl: '/vacancies/buyer.png',
        label: 'buyer',
        conditions: [
            "Remote/Office work (later)",
            "Work with large projects",
            "English language lessons within the team",
            "Free access to Netflix",
            "Top team",
            "Top product confidently heading to Top-1",
            "Base rate + % from the budget + KPI",
            "Additional features from the team"
        ],
        responsibilities: [
            "Development and management of advertising campaigns",
            "Writing specifications for designers",
            "Market and competitor analysis",
            "Communication with platform support and resolution of account blocking issues",
            "Monitoring, analysis, and optimization of advertising effectiveness",
            "Regular reporting on the results of advertising campaigns",
            "Collaboration with the team to achieve advertising goals",
            "Tracking the latest trends in the media and advertising industry for increased effectiveness"
        ],
        requirements: {
            softSkills: [
                "Ability to work with anti-detection browsers",
                "Proxies and trackers",
                "Teamwork skills",
                "High level of self-motivation and initiative"
            ],
            hardSkills: [
                "At least 1 year of experience as a Targetologist/Media Buyer (Meta Ads)",
                "Experience in working with grey niches"
            ],
            willBeAPlus: [
                "English proficiency at B1 level or higher",
                "Experience or understanding of Reddit Ads, Twitter Ads"
            ]
        },
        linkToForm: 'https://forms.gle/nQvB92ckazm6nRZR7'
    },
    {
        name: 'Marketing Specialist',
        imageUrl: '/vacancies/marketing.png',
        label: 'MArketing',
        greeting: 'Greetings! We are seeking a Marketing Specialist to join our dynamic team.',
        conditions: [
            'Work location: On-site',
            'Salary: Competitive',
            'Social media management',
            'Content creation and curation',
            'Flexible working hours'
        ],
        responsibilities: [
            'Create and manage engaging content for social media platforms',
            'Develop and execute marketing strategies',
            'Collaborate with cross-functional teams',
            'Analyze and report on campaign performance',
            'Stay updated on industry trends and emerging technologies'
        ],
        requirements: {
            softSkills: ['Creativity', 'Analytical thinking', 'Team collaboration', 'Communication'],
            hardSkills: ['Experience in niche [specific industry]', 'Social media management', 'Content creation skills', 'Analytical skills'],
            willBeAPlus: ['Certifications in [relevant certifications]', 'Experience with [specific tools or platforms]']
        },
        linkToForm: 'https://example.com/marketing-specialist-form'
    },
    {
        name: 'Chief Business Development Officer',
        imageUrl: '/vacancies/cbdo.png',
        label: 'CBDO',
        greeting: 'Greetings! We are looking for a dynamic Chief Business Development Officer to lead our growth strategy.',
        conditions: [
            'Work location: On-site',
            'Competitive salary and benefits',
            'Flexible working hours',
            'Opportunity for career advancement'
        ],
        responsibilities: [
            'Develop and execute the business development strategy',
            'Identify and pursue new business opportunities',
            'Build and maintain strong relationships with clients and partners',
            'Lead negotiations and close deals',
            'Provide leadership and guidance to the business development team'
        ],
        requirements: {
            softSkills: ['Leadership', 'Strategic thinking', 'Communication', 'Negotiation skills', 'Team collaboration'],
            hardSkills: ['Proven experience in business development at a leadership level', 'Strategic planning', 'Market analysis', 'Sales expertise'],
            willBeAPlus: ['MBA or equivalent qualification', 'Experience in [specific industry]', 'International business experience']
        },
        linkToForm: 'https://example.com/cbdo-form'
    }

];

export default VacanciesData;
