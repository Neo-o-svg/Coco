import type {
  CardItem,
  CheckPassionItem,
  CompanyLogo,
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
