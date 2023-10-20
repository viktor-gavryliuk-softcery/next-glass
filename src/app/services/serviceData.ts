export interface iServiceItem {
    name: string;
    details?: string;
    number?: string;
    key?: string;
}

export interface iServiceData {
    key: string;
    name: string;
    description?: string;
    serviceItems?: iServiceItem[];
}

const serviceData: iServiceData[] = [
    {
        key: 'smm',
        name: "Social Media marketing",
        description: "The goal is to communicate & amplify your brand's voice and mission on social media to reach as many people as possible. But also use it as a platform to engage and show a presence in the web3 social ecosystem to help people understand your values and why they should be interested and invest in your project.",
        serviceItems: [
            {
                name: 'Social Media Strategy',
                details: 'A strategy that is focused on exploiting the best value for the project and ensuring that the critical details are defined for both the client and the social media manager running the account.'
            },
            {
                name: 'Copy-writing',
                details: 'You will receive full-stack writing from the start of your campaign to the end from two writers.'
            },
            {
                name: 'Media Directive Advisory',
                details: 'We highly suggest strong media for your social profile, and we know how to develop a look that is unique to your brand.'
            },
            {
                name: 'Inbound Communications',
                details: 'Solicitation can flood out genuine opportunities. We make sure all of the important ones reach you.'
            },
            {
                name: 'Brand Identity Development',
                details: 'Make sure your brand is unique all the way to the small details to make your project stand out.'
            },
            {
                name: 'Scheduling And Posting',
                details: 'Make sure your brand is unique all the way to the small details to make your project stand out.'
            },
            {
                name: 'AMAs & Twitter Spaces',
            },
        ]
    },
    {
        key: 'target',
        name: "Display/Target Advertisement",
        description: "Make your project advance beyond the organic reach by leveraging PPC / Social Ads in a data & results-driven way.",
        serviceItems: [
            {
                name: 'Ad Creatives',
                details: 'Including ad copy & ad banners for split testing your angles/narratives/Value propositions.'
            },
            {
                name: 'Campaigns',
                details: 'We execute on the strategy and set up campaigns accordingly.'
            },
            {
                name: 'KPI tracking',
                details: 'Setting up everything we need to effectively measure the paid efforts.'
            },
            {
                name: 'Result & Optimization report',
                details: 'We execute on the strategy and set up campaigns accordingly.'
            },
        ]
    },
    {
        key: 'consultation',
        name: "Consultation & Advisory",
        description: "Weekly consultation meetings to align on brand growth, review progress, and set future key performance indicators and goals",
    },
    {
        key: 'strategy',
        name: "Content Strategy Creation & Execution",

        serviceItems: [
            {
                name: 'Budget Allocation Advisory',
                details: 'We break down the numbers at the start of your campaign to give you an idea of the best way to optimize your marketing budget for Twitter.'
            },
            {
                name: 'Mint & Supply Cost Advisory',
                details: 'Alongside current trends, we also watch! the market and react to the best prices you may be able to receive for your mint.'
            },
            {
                name: 'Catalyst Planning & Execution',
                details: 'Important catalysts important to your growth will be completely planned and executed by us in regards to your social profile.'
            },
            {
                name: 'KPI Creation & Execution',
                details: 'Transparent and guaranteed KPIs will be delivered at the start of your campaign so you can keep track of our effectiveness.'
            },
        ]
    },
    {
        key: 'community',
        name: "Community management",
        description: "Our goal with web3 communities is to create a welcoming and friendly environment where people can come together and explore their interests and learn more.",
        serviceItems: [
            {
                name: 'Discord Community Manager',
                details: 'Our experienced manager ensures your Discord server runs smoothly and your community stays engaged.'
            },
            {
                name: 'Event Planning & Execution',
                details: 'We organize and execute events that drive engagement and excitement within your Discord community.'
            },
            {
                name: 'Discord Configuration',
                details: "We configure and customize your server to meet your brand's specific needs, including channel set up, permissions, and roles.We also ensure a seamless integration with your other social media channels."
            }
        ]
    },
    {
        key: 'pr',
        name: "Influence Marketing & PR",
        description: "The goal is to building up authority via some big voices in the space, getting brand recognition via the Influencer's audience and making people understand what value your project brings to the market.",
        serviceItems: [
            {
                name: 'Identifying Influencers',
                details: 'Identify relevant and influential individuals in the target market or niche based on engagement rate, reach, and brand values alignment.'
            },
            {
                name: 'Influencer Outreach',
                details: 'Establish contact and pitch brand value proposition, potentially with a personalized message or email, incentivising with WLs, or proposing a collaboration.'
            },
            {
                name: 'Negotiating Terms & Agreements',
                details: 'It is necessary to reach an agreement with the influencer prior to commencing the partnership.'
            },
            {
                name: 'Creating Content',
                details: 'ADS CONTROL will compose the tweet and transmit it to the influencer for publishing.'
            },
            {
                name: 'Collaborations',
                details: 'Collaborations with top projects in the space.'
            },
            {
                name: 'Press Release',
                details: 'Articles about your project on best Media.'
            },
        ]
    },
];

export default serviceData;