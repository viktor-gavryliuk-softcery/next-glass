export interface ITeamMember {
  id: number;
  name: string;
  position: string;
  rewards: string[];
  describe: string;
  image: string;
  contacts: {
    email: string;
    telegram: string;
    linkedin: string;
  };
}

export const mockTeamData: ITeamMember[] = [
  {
    id: 1,
    image: "/team/serhii.jpeg",
    name: "Serhii Barshchuk",
    position: "Founder & CEO",
    rewards: ["#1", "#2", "#3"],
    contacts: {
      linkedin: "https://www.linkedin.com/in/barshchuk",
      telegram: "https://t.me/barshchuk",
      email: "mailto:serhii_ceo@adscontrol.io",
    },
    describe:
      "Graduated from Kyiv Polytechnic University from specialization System Analysis (IASA). Huge experience in building teams and and organizing work, worked with advertising (in the media) for a long time and also has experience working as a CMO in 3 companies that operate in the markets of the USA, Europe and Ukraine.",
  },

  {
    id: 2,
    image: "/team/elina.JPG",
    name: "Elina Panova",
    position: "CMO",
    rewards: ["#7", "#8", "#9"],
    contacts: {
      linkedin: "https://www.linkedin.com/in/elina-panova-3b7b31235/",
      telegram: "@elipan26",
      email: "mailto:elina_pm@adscontrol.io",
    },
    describe:
      "Have experience of working as a SMM-manager for businesses and PM of marketing teams. The Kharkiv National University of Economics with specialization Public Administration gave me opportunity to understand the basics of business field. And now our clients can enjoy the marketing service that examines business development and user experience. but not just a posts to social media.",
  },
];
