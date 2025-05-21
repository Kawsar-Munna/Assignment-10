import HeroSlider from '../components/HeroSlider';
import FeaturedGroups from '../components/FeaturedGroups';
import HowItWorks from '../components/HowItWorks';
import PopularCategories from '../components/PopularCategories';
import CTASection from '../components/CTASection';
const Home = () => {
  return (
    <div className="pt-16">
      <HeroSlider />
      <FeaturedGroups />
      <HowItWorks />
      <CTASection />
      <PopularCategories />
     
      
      {/* More sections like Featured Groups, How It Works, etc. will come here */}
    </div>
  );
};

export default Home;
