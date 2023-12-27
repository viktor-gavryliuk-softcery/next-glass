export interface iServiceItem {
    name: string;
    details?: string;
    number?: string;
    key?: string;
}

export interface iServiceData {
    meta: {
        tag: string,
        description: string
    };
    key: string;
    name: string;
    description?: string;
    serviceItems?: iServiceItem[];
}

const serviceData: iServiceData[] = [
    {
        key: 'smm',
        meta: {
            tag: "Social Media Marketing Services - Boost Your Brand's Online Presence",
            description: "Enhance your online presence with our comprehensive social media marketing services. We'll help you engage with your audience, communicate your brand's mission, and stand out in the web3 social ecosystem. Learn more."
        },
        name: "Social Media marketing",
        description: "In today's digital age, effective social media marketing is crucial for businesses. Our mission is to help you communicate and amplify your brand's voice and mission on social media platforms, enabling you to reach a wider audience. Moreover, we leverage the web3 social ecosystem to showcase your values, attracting potential investors and interested parties.",
        serviceItems: [
            {
                name: 'Social Media Strategy',
                details: 'Our approach involves crafting a well-defined social media strategy that maximizes value for your project. We ensure that all essential details are clear for both the client and the social media manager responsible for your account.'
            },
            {
                name: 'Copywriting',
                details: 'Our team of two expert writers provides full-stack copywriting services throughout your campaign, ensuring that your content is engaging and impactful.'
            },
            {
                name: 'Media Directive Advisory',
                details: 'We advise on creating a compelling visual identity for your social profile, making it unique to your brand and capturing the attention of your target audience.'
            },
            {
                name: 'Inbound Communications',
                details: 'We manage solicitation effectively to ensure that you receive only the most important opportunities and inquiries, minimizing clutter.'
            },
            {
                name: 'Brand Identity Development',
                details: 'Our focus is on developing a distinctive brand identity that stands out from the crowd, paying attention to even the smallest details to make your project unique.'
            },
            {
                name: 'Scheduling And Posting',
                details: 'We meticulously handle the scheduling and posting of content to ensure consistency and engagement, making your brand memorable.'
            },
            {
                name: 'AMAs & Twitter Spaces',
                details: 'Explore our AMAs and Twitter Spaces services to engage with your audience in real-time and foster meaningful interactions.'
            },
        ]
    },
    {
        key: 'ppc',
        meta: {
            tag: "PPC and Social Ads Services - Boost Your Project's Visibility and Results",
            description: "Take your project to the next level with our data-driven PPC and social advertising services. We create compelling ad creatives, set up campaigns, track KPIs, and provide optimization reports for measurable success."
        },
        name: "Display and Targeted Advertisement Services",
        description: "In the digital world, organic reach can only take your project so far. To advance beyond this limitation, we offer Pay-Per-Click (PPC) and Social Advertising services that are rooted in data and results-driven strategies.",
        serviceItems: [
            {
                name: 'Ad Creatives',
                details: 'Our services encompass the creation of impactful ad copy and ad banners, allowing for split testing of different angles, narratives, and value propositions. This approach helps optimize your ad content for the best possible results.'
            },
            {
                name: 'Campaigns',
                details: `Our team executes the advertising strategy, setting up and managing campaigns tailored to your project's specific needs and goals.`
            },
            {
                name: 'KPI tracking',
                details: 'We establish the necessary infrastructure for effective Key Performance Indicator (KPI) tracking. This enables us to measure and analyze the success of your paid advertising efforts accurately.'
            },
            {
                name: 'Result & Optimization report',
                details: 'Our commitment to results extends to providing comprehensive reports on the performance of your campaigns. We continuously optimize and refine strategies to achieve the best possible outcomes.'
            },
        ]
    },
    {
        key: 'consultation',
        meta: {
            tag: "Consultation and Advisory Services for Brand Growth and Web3 Projects",
            description: "Enhance your brand's growth and succeed in web3 projects with our weekly consultation meetings. We align on key performance indicators, review progress, and set future goals, while providing specialized advisory services for the unique challenges of the web3 ecosystem."
        },
        name: "Consultation and Advisory Services",
        description: "Our consultation and advisory services go beyond the ordinary. We offer weekly meetings to align your brand's growth strategies, review progress, and set key performance indicators and goals for the future. In addition, we provide specialized advisory services tailored to the dynamic landscape of web3 projects.",
        serviceItems: [{
            name: 'Weekly Consultation Meetings',
            details: `Our team conducts weekly consultation meetings to ensure that your brand's growth stays on track. These meetings are an opportunity to align on key performance indicators (KPIs), review your progress, and set clear goals for the future.`
        },
        {
            name: 'Specialized Advisory for Web3 Projects',
            details: 'We understand that web3 projects present unique challenges and opportunities. Our advisory services are tailored to this innovative ecosystem, providing insights and strategies specific to the decentralized, blockchain-based, and crypto world.'
        },
        {
            name: 'Brand Growth Strategies',
            details: 'In addition to web3 advisory, we help you develop and execute brand growth strategies that are aligned with the evolving digital landscape. Our expertise extends to both traditional and cutting-edge marketing techniques.'
        }
        ]
    },
    {
        key: 'strategy',
        meta: {
            tag: "Content Strategy Creation & Execution - Boost Your Campaign's Success",
            description: "Elevate your campaign with our comprehensive content strategy services. We provide budget allocation advisory, mint & supply cost guidance, catalyst planning, and transparent KPI creation and execution. Learn how we can optimize your marketing efforts."
        },
        name: "Content Strategy Creation and Execution Services",
        description: "In today's digital landscape, a well-executed content strategy is vital for campaign success. Our services go beyond the ordinary, offering comprehensive solutions to optimize your marketing efforts.",
        serviceItems: [
            {
                name: 'Budget Allocation Advisory',
                details: 'We start by breaking down the numbers at the beginning of your campaign, providing invaluable insights on how to best optimize your marketing budget for platforms like Twitter.'
            },
            {
                name: 'Mint & Supply Cost Advisory',
                details: 'Staying up-to-date with current trends and market fluctuations, we offer advice on obtaining the best possible prices for your minting and supply costs.'
            },
            {
                name: 'Catalyst Planning & Execution',
                details: `We understand the significance of catalysts in your campaign's growth. Let us plan and execute the essential catalysts required for your social profile's success.`
            },
            {
                name: 'KPI Creation & Execution',
                details: 'At the outset of your campaign, we provide transparent and guaranteed Key Performance Indicators (KPIs) that will allow you to track the effectiveness of our strategies.'
            },
        ]
    },
    {
        key: 'community',
        meta: {
            tag: "Community Management Services for Web3: Building Engaging and Inclusive Spaces",
            description: "Join our mission in web3 communities to foster inclusivity and exploration. Our services include Discord community management, event planning and execution, and server configuration. Learn how we can help you build a vibrant online community."
        },
        name: "Web3 Community Management Services",
        description: "In the web3 landscape, community management is not just about engagement; it's about creating a welcoming space where people can connect, explore, and learn. We're on a mission to build inclusive web3 communities that prioritize these values.",
        serviceItems: [
            {
                name: 'Discord Community Manager',
                details: 'Our experienced community manager ensures your Discord server runs smoothly, and your community remains engaged. We understand the unique dynamics of web3 communities and tailor our approach accordingly.'
            },
            {
                name: 'Event Planning & Execution',
                details: 'We organize and execute events that are designed to drive engagement and excitement within your Discord community. These events foster a sense of belonging and shared interests among community members.'
            },
            {
                name: 'Discord Configuration',
                details: "We offer comprehensive Discord server configuration services. Our team customizes your server to meet your brand's specific needs, including setting up channels, permissions, and roles. We also ensure seamless integration with your other social media channels, creating a cohesive online presence."
            }
        ]
    },
    {
        key: 'pr',
        meta: {
            tag: "Influence Marketing & PR Services - Amplify Your Project's Authority and Brand Recognition",
            description: "Unlock the power of influencer marketing and PR to build authority and brand recognition for your project. We offer services from identifying influencers to negotiating agreements, creating content, and collaborating with top projects. Learn how we can elevate your brand's presence."
        },
        name: "Influence Marketing and PR Services",
        description: "Influence marketing and PR play a pivotal role in establishing authority and brand recognition. Our services are designed to leverage the voices of key influencers to help your project stand out in the market and communicate its unique value.",
        serviceItems: [
            {
                name: 'Identifying Influencers',
                details: 'We begin by identifying relevant and influential individuals within your target market or niche, considering factors such as engagement rate, reach, and alignment with your brand values.'
            },
            {
                name: 'Influencer Outreach',
                details: `Our team initiates contact with identified influencers and pitches your brand's value proposition. We may craft personalized messages or emails, offer incentives like WLs (Whitelist spots), or propose collaboration opportunities to gain their endorsement.`
            },
            {
                name: 'Negotiating Terms & Agreements',
                details: `Before commencing the partnership, it's crucial to reach a mutually beneficial agreement with the influencer, outlining the terms and expectations clearly.`
            },
            {
                name: 'Creating Content',
                details: 'ADS CONTROL takes charge of crafting impactful content, such as tweets, which are then transmitted to the influencer for publishing.'
            },
            {
                name: 'Collaborations',
                details: 'We explore collaboration opportunities with top projects in your space to broaden your reach and influence.'
            },
            {
                name: 'Press Release',
                details: `Our services extend to securing articles about your project on the best media platforms, further enhancing your project's visibility and reputation.`
            },
        ]
    },
];

export default serviceData;