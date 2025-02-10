import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import lifestyle from '../assets/images/lifestyle.jpg';
import mart from '../assets/images/aarnamart1.jpg';
import gym from '../assets/images/gym.jpg';
import food from '../assets/images/food.jpg';
import salon from '../assets/images/salon.jpg';

const SplitLayout = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    {
      title: 'INSPIRING SPACES',
      subtitle: 'Where Wellness Meets Luxury',
      image: gym,
      text: 'From the warm welcome of the yoga studio to the cool shade of the cabana, every inch is designed with your well-being in mind.',
      // stats: ['5000+ sq ft', '24/7 Access', 'Expert Trainers'],
      path: "/aarna-gym",
    },
    {
      title: 'LUXURY AMENITIES',
      subtitle: 'Exceptional Experiences',
      image: salon,
      text: 'Programs. Lessons. Sessions. Workouts. So many wonderful ways to spend time and reach your fitness goals in ultimate comfort.',
      // stats: ['Spa Services', 'Personal Training', 'Group Classes'],
      path: "/aarna-salon",
    },
    {
      title: 'PREMIUM SHOPPING',
      subtitle: 'Curated Collections',
      image: mart,
      text: 'Access to exclusive athletic wear and equipment. Our carefully curated selection ensures you have the best tools for success.',
      // stats: ['Designer Brands', 'Expert Fitting', 'Member Discounts'],
      path:"/aarna-mart"
    },
    {
      title: 'HEALTHY DINING',
      subtitle: 'Farm to Table Excellence',
      image: food,
      text: 'Nutritious and delicious meals prepared by expert chefs. Fuel your body with the highest quality ingredients.',
      // stats: ['Organic Menu', 'Custom Plans', 'Chef Consultations'],
      path: "/aarna-foodcourt",
    },
  ];

  useEffect(() => {
    const handleScroll = (e) => {
      const scrolled = e.target.scrollTop > 50;
      setIsScrolled(scrolled);
    };

    const rightPanel = document.getElementById('rightPanel');
    if (rightPanel) {
      rightPanel.addEventListener('scroll', handleScroll);
      return () => rightPanel.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="flex h-screen w-screen bg-black py-16">
      {/* Left Side - Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-1/2 overflow-hidden"
      >
        {/* Hero Image */}
        <div className="absolute inset-0">
          <motion.img
            src={lifestyle}
            alt="Lifestyle"
            className="h-full w-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col justify-between p-12 ml-[370px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-24"
          >
            <h1 className="text-6xl font-bold text-white">
              Live Vibrantly
              <br />
              with
              <span className="mt-2 block text-6xl bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                SNBA
                <br />
                Consumer
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <button className="group relative overflow-hidden rounded-lg bg-red-600 px-8 py-4 text-lg font-bold text-white transition-all duration-300">
              <span className="relative z-10 flex items-center">
                Buy Membership
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown 
              className="h-8 w-8 text-white/70 animate-bounce mb-[100px]" 
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Scrollable Content */}
      <div 
        id="rightPanel"
        className="w-1/2 overflow-y-auto bg-gradient-to-b from-black to-gray-900 scroll-smooth"
      >
        <div className="max-w-2xl p-12 space-y-32">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className={`sticky top-0 z-20 border-t-2 border-red-600 pt-4 backdrop-blur-sm transition-all duration-300 ${
              isScrolled ? 'bg-black/70' : 'bg-transparent'
            }`}
          >
            <h2 className="text-lg font-bold uppercase tracking-wider text-red-600">
              LOVE YOUR LIFE
            </h2>
          </motion.div>

          {/* Content Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group space-y-8"
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="space-y-2">
                <h3 className="text-sm font-medium uppercase tracking-wider text-red-500">
                  {section.subtitle}
                </h3>
                <h2 className="text-3xl font-bold text-white transition-colors duration-300 group-hover:text-red-600">
                  {section.title}
                </h2>
              </div>
              
              <p className="text-lg leading-relaxed text-gray-300">
                {section.text}
              </p>

              {/* <div className="flex gap-6">
                {section.stats.map((stat, i) => (
                  <div key={i} className="text-sm text-gray-400">
                    • {stat}
                  </div>
                ))}
              </div> */}

              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <img
                  src={section.image}
                  alt={section.title}
                  className={`h-full w-full object-cover transition-all duration-700 ${
                    hoveredImage === index
                      ? 'scale-110 brightness-90'
                      : 'scale-100 brightness-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-6 left-6 transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <a href={section.path} className="flex items-center space-x-2 text-white">
                    <span className="text-sm font-bold">EXPLORE MORE</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplitLayout;