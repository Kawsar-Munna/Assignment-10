import { useEffect, useState } from 'react';

const slides = [
  {
    title: 'Find Your Outdoor Adventure',
    description: 'Join local hiking groups and explore the beauty of nature with like-minded enthusiasts.',
    image: 'https://i.ibb.co/vx3kSWLX/fd8167e21ca64cc98b1b44ac1be80123.jpg',
    button: 'Discover Hiking Groups',
  },
  {
    title: 'Connect Through Reading',
    description: 'Join local book clubs and engage in meaningful discussions with fellow book lovers.',
    image: 'https://i.ibb.co/HLx02JKB/acd2fd98767cc06b2740acddf22053b4.jpg',
    button: 'Find Book Clubs',
  },
  {
    title: 'Express Your Creativity',
    description: 'Join local art groups and unleash your artistic potential in supportive communities.',
    image: 'https://i.ibb.co/fGPs9N1B/da33b04792f4dc86cb3ea07fba60a281.jpg',
    button: 'Explore Art Groups',
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] overflow-hidden mt-[-100px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/30 z-10" />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-lg">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">{slide.title}</h1>
                <p className="mt-4 text-xl text-white">{slide.description}</p>
                <div className="mt-6">
                  <button className="bg-primary text-white px-6 py-3 rounded-button hover:bg-primary/90">{slide.button}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-30">
        <div className="flex space-x-2">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${idx === current ? 'bg-white' : 'bg-white/50'}`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
