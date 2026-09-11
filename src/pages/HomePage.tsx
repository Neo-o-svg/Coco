import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import CocaHelp from "../components/CocaHelp/CocaHelp";
import Passion from "../components/Passion/Passion";
import LiftYourBusiness from "../components/LiftYourBusiness/LiftYourBusiness";
import Partners from "../components/Partners/Partners";
import WeDoIt from "../components/WeDoIt/WeDoIt";
import TrendingNews from "../components/TrendingNews/TrendingNews";
import CustomerSay from "../components/CustomerSay/CustomerSay";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <CocaHelp />
      <Passion />
      <LiftYourBusiness />
      <Partners />
      <WeDoIt />
      <TrendingNews />
      <CustomerSay />
      <Footer />
    </div>
  );
}
