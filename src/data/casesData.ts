export type caseProps = {
    name: string,
    slug: string,
    img: string,
    avatar: string,
    theme?: string,
    duration: string,
    budget: string,
    services?: string[],
    description: string,
    left: string,
    right: string,
    approach: string,
    results: string,
    impact: string,
    special?: {
        title: string,
        data: string
    },
    images?: string[],
    videos?: string[]
}

const casesData: caseProps[] = [
    {
        name: '1inch',
        description: `Discover the story of 1INCH's crypto marketing success with ADS CONTROL, a partnership that exemplifies excellence in the crypto space.`,
        left: 'Experience a compelling success story of crypto marketing as we delve into the strategic collaboration between 1INCH and ADS CONTROL, aimed at engaging the global cryptocurrency trading community.',
        right: '1INCH, a prominent exchange aggregator, specializes in scanning decentralized exchanges to secure the most competitive cryptocurrency prices for traders. This innovative platform is powered by the 1INCH utility and governance token, a vital element in its decentralized "instant governance" model and liquidity mining through token staking.',
        slug: '1inch',
        img: '/cases/images/1inch.png',
        avatar: '/cases/avatars/1inch.png',
        approach: 'ADS CONTROL and 1INCH joined forces to implement a robust influencer marketing strategy paired with precision targeting. Recognizing the need for authentic engagement and education, we carefully selected influencers capable of bridging the knowledge gap within the crypto space. In addition, our data-driven advertisements, tailored to specific demographics, were deployed to maximize campaign effectiveness.',
        results: `Our collaboration with 1INCH led to a remarkable increase in user engagement and growth within the global cryptocurrency trading community. This campaign underscored the effectiveness of ADS CONTROL in driving crypto trends while warmly welcoming newcomers to the world of cryptocurrency trading.`,
        impact: `The partnership between ADS CONTROL and 1INCH stands as a testament to the power of authentic and strategic crypto marketing. This case study showcases our ability to shape market perceptions and onboard new crypto enthusiasts, demonstrating how 1INCH continues to innovate and thrive in the competitive crypto landscape.

        Discover the story of 1INCH's crypto marketing success with ADS CONTROL, a partnership that exemplifies excellence in the crypto space.`,
        budget: '$20.000',
        duration: '4 months',
        theme: 'dex',
        services: ['influencer marketing', 'target ads', 'PR']
    },
    {
        name: 'WhiteBit',
        left: `WhiteBIT is one of the largest European centralized cryptocurrency exchanges, founded in 2018. `,
        right: 'It offers spot, futures, and margin trading products with up to 100x leverage to 4+ million retail users worldwide.',
        description: 'WhiteBIT is one of the largest European centralized cryptocurrency exchanges, founded in 2018. It offers spot, futures, and margin trading products with up to 100x leverage to 4+ million retail users worldwide.',
        slug: 'white-bit',
        img: '/cases/images/whiteBit.png',
        avatar: '/cases/avatars/whiteBit.png',
        approach: 'ADS CONTROL harnessed influencer marketing and precision targeting. Local influencers were chosen to bridge the crypto knowledge gap, fostering authenticity. Data-driven ads tailored to [GEO] demographics maximized campaign impact.',
        results: `WhiteBit exchange experienced heightened engagement and user growth in [GEO]. The campaign spotlighted ADS CONTROL's expertise in driving crypto trends, while welcoming new users to the world of cryptocurrency.`,
        impact: `The ADS CONTROL x WhiteBit partnership exemplifies effective crypto marketing, merging authenticity and strategy. This case serves as a testament to ADS CONTROL's ability to shape market perceptions and onboard new crypto enthusiasts.`,
        budget: '$10.000',
        duration: '3 months',
        theme: 'Exchange',
        services: ['influencer marketing', 'target ads', 'PR']
    },
    {
        name: 'Bohemian Bulldogs',
        slug: 'bohemian-bulldogs',
        img: '/cases/images/bohemianBulldogs.png',
        avatar: '/cases/avatars/bohemianBulldogs.png',
        description: 'Explore the journey of Bohemian Bulldogs NFT Collection, a testament to the power of strategic marketing in the NFT world, and discover how we can help your project thrive in this exciting space.',
        left: 'Step into the world of NFTs and explore the extraordinary journey of the Bohemian Bulldogs NFT Collection, a project that entrusted ADS CONTROL with full-service marketing and achieved remarkable results.',
        right: 'The Bohemian Bulldogs NFT Collection is a testament to the growing NFT market, having minted over 100ETH with their unique and captivating digital assets.',
        approach: 'For Bohemian Bulldogs, we provided comprehensive full-service marketing solutions tailored to the NFT space. Our strategies encompassed the entire spectrum of marketing, from creating compelling content and visuals to community engagement and promotion. We worked closely with the Bohemian Bulldogs team to ensure their NFT collection received the attention it deserved.',
        results: `Our collaboration with Bohemian Bulldogs yielded incredible outcomes. The collection not only gained significant visibility but also garnered substantial investment, with over 100ETH minted. Our full-service marketing approach proved to be instrumental in achieving these impressive results.`,
        impact: `The success of Bohemian Bulldogs NFT Collection exemplifies our commitment to providing effective marketing solutions tailored to the NFT market. We take pride in contributing to the growth of NFT projects and helping them reach their full potential. This case study showcases the potential for success within the NFT space and highlights our expertise in navigating this dynamic and rapidly evolving landscape.

        Explore the journey of Bohemian Bulldogs NFT Collection, a testament to the power of strategic marketing in the NFT world, and discover how we can help your project thrive in this exciting space.`,
        budget: '$10.000',
        duration: '3 months',
        theme: 'NFT Collection',
        services: ['Full marketing service']
    },
    {
        name: 'cryptoinfluencers',
        slug: 'cryptoinfluencers',
        img: '/cases/images/cryptoinfluencers.png',
        avatar: '/cases/avatars/cryptoinfluencers.png',

        description: 'A project close to our hearts',
        left: 'Introducing CRYPTOINFLUENCERS, a project close to our hearts as we proudly served as their dedicated marketing partner. With a vast influencer base at our disposal, we acted as the guarantors of fruitful collaborations and went the extra mile to negotiate with the very best influencers for their projects.',
        right: 'Our commitment to excellence was mirrored in our comprehensive marketing approach, which ensured that our client, CRYPTOINFLUENCERS, thrived and continued to redefine influencer marketing.',
        approach: 'As part of our commitment to delivering exceptional results, we offered full marketing services for CRYPTOINFLUENCERS. Our strategies encompassed every facet of marketing, from creating compelling content to reaching their target audience effectively. We leveraged our expertise to expand the reach and influence of CRYPTOINFLUENCERS.',
        results: `Our marketing efforts not only propelled CRYPTOINFLUENCERS to the forefront of the influencer marketing industry but also opened up new horizons for influencers and brands alike. Through our meticulous negotiations and tailored marketing strategies, we ensured the success of influencer collaborations and the growth of CRYPTOINFLUENCERS.`,
        impact: `CRYPTOINFLUENCERS' journey, as our client, serves as a testament to the power of strategic marketing and influencer partnerships. It showcases how a dedicated platform can elevate influencer marketing to new heights, fostering trust and delivering impressive results.`,
        budget: '$1.000',
        duration: '1 month',
        special: {
            title: "Our Pioneering Role",
            data: `CRYPTOINFLUENCERS plays a pivotal role in the influencer marketing landscape, and we were honored to be their marketing partner. We assembled an extensive network of influencers, enabling us to guarantee fruitful partnerships that aligned with our client's project goals. We meticulously negotiated with top-tier influencers, ensuring that our client's brand received the visibility and impact it deserved.`
        },
        theme: 'PR Agency',
        services: ['Social Media Management', 'Display/Target Advertisement']
    },
    {
        name: 'Heroes Battle Arena',
        slug: 'heroes-battle-arena',
        img: '/cases/images/heroesBattleArena.png',
        avatar: '/cases/avatars/heroesBattleArena.png',

        description: 'Join the epic journey of Heroes Battle Arena and experience a revolution in gaming where strategy, NFTs, and divine forces combine to redefine the way we play and earn.',
        left: 'Get ready to embark on an epic adventure into the world of Heroes Battle Arena, a groundbreaking Multichain Play-to-Earn Strategic RPG that defies conventions with its zero start investments. Rooted in NFTs featuring armies, magic stones, and divine beings, this project is set to redefine the gaming landscape.',
        right: 'With our strategic marketing efforts, we took Heroes Battle Arena to new heights, crafting a management Twitter account, collaborating with influencers, and forging powerful partnerships with other projects.',
        approach: `To ensure Heroes Battle Arena's success, we implemented a multifaceted approach. First, we created a dedicated management Twitter account to engage with the community, share exciting updates, and build a strong online presence. We also harnessed the power of influencers, collaborating with notable figures in the gaming and crypto space to amplify the project's reach and impact. Additionally, we facilitated partnerships and collaborations with other projects, enhancing the project's visibility and ecosystem.`,
        results: `Our strategic marketing efforts yielded remarkable results for Heroes Battle Arena. The management Twitter account became a hub for the project's updates and community engagement. Influencers helped build excitement and anticipation among their followers, driving interest and participation. Collaborations with other projects expanded the project's horizons, creating a vibrant gaming ecosystem`,
        impact: `Heroes Battle Arena stands as a testament to the potential of strategic marketing in the gaming and NFT space. It showcases how innovative projects can thrive and capture the imagination of players and investors alike. The journey of Heroes Battle Arena is a testament to the power of creativity, collaboration, and the limitless possibilities of Play-to-Earn gaming.

        Join the epic journey of Heroes Battle Arena and experience a revolution in gaming where strategy, NFTs, and divine forces combine to redefine the way we play and earn.`,
        budget: 'NDA',
        duration: 'NDA',

        special: {
            title: "A Revolutionary Quest",
            data: `Heroes Battle Arena is not your typical RPG; it's a visionary project that ushers in a new era of gaming. In a world where players can earn while they play, this Multichain RPG promises thrilling battles, unique NFT armies, powerful magic stones, and the very presence of Gods. It's a quest for both seasoned gamers and newcomers, offering a zero start investment opportunity.`
        },
        theme: 'NFT Collection',
        services: ['Full marketing service']
    },
    {
        name: 'Metabody',
        slug: 'metabody',
        img: '/cases/images/metabody.png',
        avatar: '/cases/avatars/metabody.png',
        left: `Enter a realm where reality seamlessly converges with the boundless possibilities of the metaverse. Welcome to METABODY, a unique project that not only embodies the metaverse but also places a strong emphasis on animation, achieving an unparalleled level of precision and smoothness in movement.`,
        right: `Our role in this exciting venture involved advertising on Facebook and Instagram, amplifying METABODY's reach and inviting audiences into a world of remarkable animation artistry.`,
        description: `Embark on an extraordinary journey with METABODY and witness the meeting of reality and the metaverse through animation like never before.`,
        approach: `In our partnership with METABODY, we leveraged the power of Facebook and Instagram to bring this remarkable project to a broader audience. Our advertising campaigns were designed to captivate and draw in users who could appreciate the fine art of animation and the immersive potential of the metaverse.`,
        results: `Our advertising efforts on Facebook and Instagram had a transformative impact on METABODY. The project witnessed an increase in visibility and engagement, capturing the attention of individuals who shared a deep appreciation for animation and metaverse experiences. The campaigns successfully conveyed METABODY's commitment to crafting a metaverse world like no other.`,

        impact: `METABODY's journey serves as a testament to the fusion of artistry, technology, and marketing. It exemplifies how a responsible approach to a metaverse project can yield incredible results. METABODY invites users to explore a world where animation breathes life into the metaverse, creating a realm that is as close to reality as one can imagine.`,
        duration: '2 months',
        budget: '$3.000',
        theme: 'Metaverse',
        services: ['Social Media Management', 'Display/Target Advertisement']

    },
    {
        name: 'Metacossacs',
        slug: 'metacossacs',
        img: '/cases/images/metacossacs.png',
        avatar: '/cases/avatars/metacossacs.png',
        description: 'Join the journey of Metacossacs and experience the transformative power of NFTs, purpose-driven projects, and the magic that can happen when we work together to make a difference.',
        left: `In a heartwarming tale of solidarity and purpose, we proudly present the extraordinary journey of Metacossacs. This charitable NFT project, driven by the noble cause of aiding those affected by the war in Ukraine, embarked on a remarkable quest without a marketing budget. `,
        right: 'With our full-service marketing support, Metacossacs not only reached a staggering 500,000 target audience but also fostered a meaningful partnership between the Ministry of Digital Transformation of Ukraine and a prominent European charitable foundation.',
        duration: '3 months',

        impact: `Metacossacs is a shining example of how purpose-driven initiatives can thrive with strategic marketing support. The project not only succeeded in aiding those in need but also demonstrated the potential of NFTs in supporting charitable causes. This case study showcases the power of unity, digital innovation, and the incredible impact we can achieve when we come together for a common cause.

        Join the journey of Metacossacs and experience the transformative power of NFTs, purpose-driven projects, and the magic that can happen when we work together to make a difference.`,
        results: `The collaboration between Metacossacs and our team resulted in an extraordinary success story. The project reached an astonishing 500,000 target audience members, spreading the message of compassion and support. Furthermore, the partnership forged between the Ministry of Digital Transformation of Ukraine and the European charitable foundation stands as a testament to the project's significant impact.`,
        approach: `Despite the absence of a marketing budget, we stood alongside Metacossacs, providing comprehensive full-service marketing support. Our strategies were carefully crafted to reach a vast and engaged audience, enabling us to communicate the project's noble cause effectively. We fostered partnerships and alliances, including a remarkable collaboration between the Ministry of Digital Transformation of Ukraine and a renowned European charitable foundation.`,
        budget: '$0',

        special: {
            title: 'A noble mission',
            data: `Metacossacs is more than just an NFT project; it is a beacon of hope for those affected by the war in Ukraine. With a core mission to extend a helping hand to the affected communities, Metacossacs blends the world of NFTs with a purpose-driven approach. It encourages individuals with a shared vision to join hands and contribute to a brighter future.`
        },
        theme: 'NFT Collection',
        services: ['Full marketing service']

    },

];

export default casesData;