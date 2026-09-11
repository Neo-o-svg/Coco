import type {
  CardItem,
  CheckPassionItem,
  CompanyLogo,
  FooterListItem,
  HeaderData,
  OneBlockSliderData,
  statisticItem,
  TwoBlockSliderData,
  weDoItItem,
} from "./types";

import BuildIcon from "./assets/icons/build.svg";
import ActivateIcon from "./assets/icons/activate.svg";
import MeasureIcon from "./assets/icons/measure.svg";
import StrengthenIcon from "./assets/icons/strengthen.svg";

import AirBnB from "./assets/icons/Airbnb.svg";
import Amazon from "./assets/icons/Amazon.svg";
import FedEx from "./assets/icons/FedEx.svg";
import Microsoft from "./assets/icons/Microsoft.svg";
import Google from "./assets/icons/Google.svg";
import Ola from "./assets/icons/OLA.svg";
import Walmart from "./assets/icons/Walmart.svg";
import Oyo from "./assets/icons/OYO.svg";

import LeadHappiness from "./assets/images/LeadHappiness.jpg";
import MutuallySupport from "./assets/images/MutuallySupport.jpg";
import HaveFun from "./assets/images/HaveFun.jpg";
import MakeYourBusiness from "./assets/images/MakeYourBusiness.jpg";

import TrendingNews_1 from "./assets/images/TrendingNews_1.jpg";
import TrendingNews_2 from "./assets/images/TrendingNews_2.jpg";

import CommentUserIcon from "./assets/icons/comment_user_icon.jpg";

export const cards: CardItem[] = [
  {
    image: BuildIcon,
    title: "Build your date fundamental",
    text: "Build access to date, develop valuable business insights and drive revenue while maintaining full control over access and use of date at all times.",
  },
  {
    image: ActivateIcon,
    title: "Activate your date",
    text: "Accurately address your specific audiences at scale across any channel, platform, publisher or network and safely translate date between identity space to improve results.",
  },
  {
    image: MeasureIcon,
    title: "Measure more effective",
    text: "Effectively measure people-based campaigns with the freedom to choose from best-of breed partners to optimize and drive media innovation.",
  },
  {
    image: StrengthenIcon,
    title: "Strengthen consumer privacy",
    text: "Protect your customer date with leading privacy-preserving technologies and advanced techniques to minimize date movement while still enabling insight generation.",
  },
];

export const checkPassionItems: CheckPassionItem[] = [
  {
    id: 1,
    title: "Close more deals with single-page contact management",
  },
  {
    id: 2,
    title: "Enjoy one-click calling, call scripts and voicemail automation",
  },
  {
    id: 3,
    title:
      "Take stages and milestones of your deals to keep the sales process on track",
  },
];

export const statisticItems: statisticItem[] = [
  {
    id: 1,
    title: "17k",
    text: "happy customers on worldwide",
  },
  {
    id: 2,
    title: "15+",
    text: "Hours of work experience",
  },
  {
    id: 3,
    title: "50+",
    text: "Creativity & passionate members",
  },
  {
    id: 4,
    title: "100+ ",
    text: "Integrations lorem ipsum integrations",
  },
];

export const companyLogos: CompanyLogo[] = [
  { id: 1, name: "AirBnB", icon: AirBnB },
  { id: 2, name: "Amazon", icon: Amazon },
  { id: 3, name: "FedEx", icon: FedEx },
  { id: 4, name: "Microsoft", icon: Microsoft },
  { id: 5, name: "Google", icon: Google },
  { id: 6, name: "Ola", icon: Ola },
  { id: 7, name: "Walmart", icon: Walmart },
  { id: 8, name: "Oyo", icon: Oyo },
];

export const weDoItList: weDoItItem[] = [
  {
    id: 1,
    image: LeadHappiness,
    title: "Lead happiness for customers",
    text: "Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster",
  },
  {
    id: 2,
    image: MutuallySupport,
    title: "Mutually support each other",
    text: "Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster",
  },
  {
    id: 3,
    image: HaveFun,
    title: "Have fun growing together",
    text: "Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster",
  },
  {
    id: 4,
    image: MakeYourBusiness,
    title: "Make Your Business Grow",
    text: "Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster",
  },
];

export const twoBlockSlider: TwoBlockSliderData[] = [
  {
    id: 1,
    date: "Jan 30, 2021",
    author: "Albert Sans",
    title: "What makes an authentic employee profile, and why does it matter ?",
    image: TrendingNews_1,
  },
  {
    id: 2,
    date: "Jan 30, 2021",
    author: "Albert Sans",
    title: "How to build a Kaylen relationship with a good company",
    image: TrendingNews_2,
  },
  {
    id: 3,
    date: "Jan 30, 2021",
    author: "Albert Sans",
    title: "What makes an authentic employee profile, and why does it matter ?",
    image: TrendingNews_1,
  },
  {
    id: 4,
    date: "Jan 30, 2021",
    author: "Albert Sans",
    title: "How to build a Kaylen relationship with a good company",
    image: TrendingNews_2,
  },
];

export const oneBlockSlider: OneBlockSliderData[] = [
  {
    id: 1,
    rate: "5.0",
    comment: `“With Agency the results are very satisfying. wrapped with Hight quality and innovative design that makes a surge of visitors on my website”`,
    photo: CommentUserIcon,
    name: "Renee Wells",
    position: "Product Designer, Quotient",
  },
  {
    id: 2,
    rate: "5.0",
    comment: `“With Agency the results are very satisfying. wrapped with Hight quality and innovative design that makes a surge of visitors on my website”`,
    photo: CommentUserIcon,
    name: "Renee Wells",
    position: "Product Designer, Quotient",
  },
  {
    id: 3,
    rate: "5.0",
    comment: `“With Agency the results are very satisfying. wrapped with Hight quality and innovative design that makes a surge of visitors on my website”`,
    photo: CommentUserIcon,
    name: "Renee Wells",
    position: "Product Designer, Quotient",
  },
];

export const footerListData: FooterListItem[] = [
  {
    type: "Company",
    items: ["About", "Pricing", "Jobs", "Blog"],
  },
  {
    type: "Product",
    items: [
      "Sales Software",
      "Marketplace",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    type: "Discover",
    items: ["CRM Comparision", "Partner Program", "What is CRM", "Resource"],
  },
  {
    type: "Help Center",
    items: ["Community", "Knowledge Base", "Academy", "Support"],
  },
];

export const heroHeaderData: HeaderData = {
  title: `Digitally forward creative`,
  subtitle: `When it comes to interactive marketing, we've got you covered. Be where the world is going`,
};

export const cocaHelpHeaderData: HeaderData = {
  title: `Coca help our client solve complex customer problems with date
            that does more.`,
  subtitle: `Our platform offers the modern enterprise full control of how date
            can be access and used with industry leading software solutions
            for identity, activation, and date collaboration`,
};

export const passionHeaderData: HeaderData = {
  title: "Passion to increase company revenue up to 85%",
  subtitle: `Automate your sales, marketing and service in one platform. 
          Avoid
          date leaks and enable consistent messaging`,
};

export const liftBusinessHeaderData: HeaderData = {
  title: `Lift your business to new heights with our digital marketing
              services`,
  subtitle: `To build software that gives customer facing teams in small and
              medium-sized businesses the ability to create rewarding and
              long-lasting relationships with customers`,
};

export const partnersHeaderData: HeaderData = {
  title: "890+",
  subtitle: " some big companies that we work with, and trust us very much",
};

export const weDoItHeaderData: HeaderData = {
  title: "Advertise, analyze, and optimize! We do it all for you",
  subtitle: `Build more meaningful and lasting relationships - <br /> better
              understand their needs, identify new opportunities to help address
              any problems faster`,
};

export const trendingNewsHeaderData: HeaderData = {
  title: "Trending news from Coca",
  subtitle: "we have some new Service to pamper you",
};

export const customerSayHeaderData: HeaderData = {
  title: "What our customer are saying",
  subtitle: `We are trusted numerous companies from different business to meet their needs`,
};

export const thinkBeyondHeaderData: HeaderData = {
  title: "Think beyond the wave",
  subtitle: `Ask about Sans products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help`,
};
