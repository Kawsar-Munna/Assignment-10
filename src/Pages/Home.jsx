import React, { useState, useEffect } from 'react';
import HeroSlider from '../components/HeroSlider';
import FeaturedGroups from '../components/FeaturedGroups';
import HowItWorks from '../components/HowItWorks';
import PopularCategories from '../components/PopularCategories';
import CTASection from '../components/CTASection';
import ThemeToggle from '../components/ThemeToggle';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (replace with your actual data fetching)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="pt-16 bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-300 relative">
      
      {/* Theme Toggle Button */}
      <div className="fixed top-4 right-20 lg:right-[180px] z-50">
        <ThemeToggle />
      </div>

      {/* Page Sections */}
      <HeroSlider />

      {/* 🆕 Text Section */}
      {/* <section className="px-6 py-10 text-center bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <h2 className="text-3xl font-bold mb-4">Connect With Like-Minded Hobbyists</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Whether you're into painting, photography, gaming, or reading — HobbyHub makes it easy to
          find or start a group that shares your interests. Discover new friends, stay inspired,
          and grow your passion!
        </p>
      </section> */}

      <FeaturedGroups />
      <HowItWorks />
      <CTASection />
      <PopularCategories />
    </div>
  );
};

export default Home;
