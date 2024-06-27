import B2B from "../B2B/B2B";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Expert from "../Expert/Expert";
import HowDo from "../HowDo/HowDo";
import Pricing from "../Pricing/Pricing";
import Review from "../Review/Review";
import WhyLeadHuntion from "../WhyLeadHuntion/WhyLeadHuntion";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <HowDo></HowDo>
      <Pricing></Pricing>
      <WhyLeadHuntion></WhyLeadHuntion>
      <Review></Review>
      <B2B></B2B>
      <Expert></Expert>
    </div>
  );
};

export default Home;
