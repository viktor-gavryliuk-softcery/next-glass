export interface ReleaseType {
  thumbnail: string;
  imageSrc: string;
  altText: string;
  date: string;
  title: string;
  description: string;
  linkHref: string;
}

export const componentData = {
  thumbnail: "/nft.jpg",
  imageSrc: "/appearance_thumbnail.png",
  altText: "thumbnail",
  date: "Global / 23 April",
  title: "Nft soon",
  description: "Lorem ipsum dolor sit ametconsectetur. Rutrum ju...",
  linkHref: "/",
};

export const releaseData: ReleaseType[] = [
  {
    title: "How to promote Web3 projects? | XQL Podcast",
    altText: "XQL Podcast",
    date: "8 November",
    description:
      "Serhii Barshchuk, founder of ADS CONTROL, about promoting Web3 projects and the current state of the crypto market.",
    imageSrc: "/appearance/XQL.jpg",
    thumbnail: "/appearance/XQL.jpg",
    linkHref: "https://youtu.be/CbsZofAoVZI?si=5IPg41WGq7kBWZji",
  },
  {
    title: "Advertisement of the future",
    altText: "Web3 marketing",
    date: "7 October ",
    description:
      "Explore the future of advertising in the context of web3 and discover why ADS CONTROL has emerged as the number one player in this space.",
    imageSrc: "/appearance/marketingWeb3.jpg",
    thumbnail: "/appearance/marketingWeb3.jpg",
    linkHref:
      "https://thecymes.com/article/advertisement-of-the-future-or-the-1-web3-marketing-company-in-ukraine",
  },
  {
    title: "Marketing trends of web 3 projects in 2024",
    altText: "Marketing 2024",
    date: "18 December",
    description:
      "Explore the hottest marketing trends in the web3 industry for 2024.",
    imageSrc: "/appearance/marketing2024.png",
    thumbnail: "/appearance/marketing2024.png",
    linkHref:
      "https://thecymes.com/article/marketing-trends-of-web-3-projects-in-2024",
  },
];
