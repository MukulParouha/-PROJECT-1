// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Dumbbell, Badge, Building2, Users, ChevronRight  } from 'lucide-react';

// const GymService = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const features = [
//     {
//       icon: <Dumbbell size={32} />,
//       title: "Affordable Subscription",
//       description: "Join Aarna Gym for just ₹99/month and gain access to exceptional fitness resources! This affordable subscription empowers you to prioritize your health without overspending while reaping the benefits of our facilities.",
//       highlightColor: "from-red-500 to-red-600",
//       iconBg: "bg-red-500",
//       delay: 0
//     },
//     {
//       icon: <Badge size={32} />,
//       title: "Huge Savings",
//       description: "With a remarkable 75% off on all memberships, Aarna Gym offers incredible value! Experience top-notch fitness classes and expert training at a fraction of the regular price, making your fitness journey budget-friendly.",
//       highlightColor: "from-red-600 to-red-700",
//       iconBg: "bg-red-600",
//       delay: 0.2
//     },
//     {
//       icon: <Building2 size={32} />,
//       title: "Quality Facilities",
//       description: "Aarna Gym is equipped with state-of-the-art facilities and high-quality equipment. Our commitment to providing an exceptional workout environment ensures that you have everything you need to achieve your fitness goals.",
//       highlightColor: "from-red-700 to-red-800",
//       iconBg: "bg-red-700",
//       delay: 0.4
//     },
//     {
//       icon: <Users size={32} />,
//       title: "Expert Guidance",
//       description: "Our knowledgeable trainers are dedicated to helping you succeed. They provide personalized workout plans and support, ensuring that you stay motivated and on track towards achieving your health and fitness objectives.",
//       highlightColor: "from-red-800 to-red-900",
//       iconBg: "bg-red-800",
//       delay: 0.6
//     }
//   ];

//   return (
//     <>
//       <div className="min-h-screen bg-black py-16 px-4 relative overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="grid grid-cols-12 gap-4 h-full">
//             {[...Array(48)].map((_, i) => (
//               <div key={i} className="h-24 bg-red-500/20 rounded-lg transform rotate-12"></div>
//             ))}
//           </div>
//         </div>

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16 relative"
//         >
//           <h1 className="text-5xl font-bold text-white mb-4">
//             {/* <span className="bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text"> */}
//               Aarna Gym
//             {/* </span> */}
//           </h1>
//           <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mt-2 rounded-full"></div>
//           <p className="text-gray-400 text-lg max-w-2xl mt-2 mx-auto">
//             Experience the future of shopping with our innovative features and unbeatable offers
//           </p>
//         </motion.div>

//         {/* Features Grid */}
//         <div className="container mx-auto max-w-6xl relative">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: feature.delay }}
//                 onHoverStart={() => setHoveredCard(index)}
//                 onHoverEnd={() => setHoveredCard(null)}
//                 className="relative group"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-700/20 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
//                 <div className="relative  bg-gradient-to-br from-black via-gray-900 to-red-500 rounded-2xl p-8 border border-gray-800 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300">
//                   {/* Icon Container */}
//                   <div className={`${feature.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300`}>
//                     <motion.div
//                       animate={{ rotate: hoveredCard === index ? 360 : 0 }}
//                       transition={{ duration: 0.5 }}
//                       className="text-white"
//                     >
//                       {feature.icon}
//                     </motion.div>
//                   </div>

//                   <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
//                     {feature.title}
//                   </h2>
//                   <p className="text-white leading-relaxed mb-6">
//                     {feature.description}
//                   </p>

//                   <motion.button
//                     whileHover={{ x: 10 }}
//                     className="flex items-center text-red-500 hover:text-red-400 transition-colors duration-300"
//                   >
//                     Learn More <ChevronRight className="ml-2" size={16} />
//                   </motion.button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* CTA Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.8 }}
//             className="text-center mt-16 relative"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-700/10 rounded-full blur-3xl"></div>
//             <h3 className="text-3xl font-bold text-white mb-6">
//               Ready to Start Saving?
//             </h3>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-gradient-to-r from-red-500 to-red-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-red-500/20 transition-all duration-300"
//             >
//               Join Now for ₹99/month
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default GymService;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Dumbbell, Badge, Building2, Users, 
  ChevronRight, Trophy, Clock, Star,
  CalendarCheck, ArrowRight
} from 'lucide-react';

const GymService = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Dumbbell size={32} />,
      title: "Premium Equipment",
      description: "Access state-of-the-art fitness equipment from leading brands. Our facility features the latest technology in cardio and strength training machines.",
      highlightColor: "from-red-500 to-red-600",
      iconBg: "bg-gradient-to-br from-red-500 to-red-600",
      delay: 0
    },
    {
      icon: <Trophy size={32} />,
      title: "Expert Trainers",
      description: "Work with certified personal trainers who create customized workout plans. Our experts help you achieve your fitness goals with personalized attention.",
      highlightColor: "from-red-600 to-red-700",
      iconBg: "bg-gradient-to-br from-red-600 to-red-700",
      delay: 0.2
    },
    {
      icon: <Clock size={32} />,
      title: "24/7 Access",
      description: "Train on your schedule with round-the-clock facility access. Our secure premises ensure a safe workout environment at any time of day or night.",
      highlightColor: "from-red-700 to-red-800",
      iconBg: "bg-gradient-to-br from-red-700 to-red-800",
      delay: 0.4
    },
    {
      icon: <Star size={32} />,
      title: "Luxury Amenities",
      description: "Enjoy premium facilities including sauna, steam room, and recovery zone. Our amenities enhance your fitness experience and aid in post-workout recovery.",
      highlightColor: "from-red-800 to-red-900",
      iconBg: "bg-gradient-to-br from-red-800 to-red-900",
      delay: 0.6
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Professional Athlete",
      content: "Aarna Gym transformed my training regime. The facilities and expert guidance are unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Fitness Enthusiast",
      content: "The 24/7 access and premium equipment make this the perfect gym for busy professionals.",
      rating: 5
    },
    {
      name: "Lisa Parker",
      role: "Yoga Instructor",
      content: "The atmosphere and community at Aarna Gym are incredible. It's more than just a gym.",
      rating: 5
    }
  ];

  const stats = [
    { label: "Active Members", value: "2,500+" },
    { label: "Expert Trainers", value: "25+" },
    { label: "Fitness Classes", value: "50+" },
    { label: "Success Stories", value: "1,000+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent animate-pulse"></div>
        <div className="grid grid-cols-12 gap-4 h-full opacity-30">
          {[...Array(48)].map((_, i) => (
            <div 
              key={i} 
              className="h-24 bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-lg transform rotate-12"
            ></div>
          ))}
        </div>
      </div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative"
      >
        <h1 className="text-6xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">
            AARNA GYM
          </span>
        </h1>
        <div className="w-40 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-300 text-xl max-w-3xl mt-6 mx-auto font-light">
          Transform your life with premium fitness facilities, expert guidance, and a supportive community
        </p>
      </motion.div>

      {/* Stats Section */}
      <div className="container mx-auto max-w-6xl mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-red-500 mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto max-w-6xl relative mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-700 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-800 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300">
                <div className={`${feature.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                  <motion.div
                    animate={{ rotate: hoveredCard === index ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-white"
                  >
                    {feature.icon}
                  </motion.div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
                  {feature.title}
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* <motion.button
                  whileHover={{ x: 10 }}
                  className="flex items-center text-red-500 hover:text-red-400 transition-colors duration-300 font-semibold"
                >
                  Learn More <ArrowRight className="ml-2" size={16} />
                </motion.button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto max-w-4xl mb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-700"></div>
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} size={20} className="text-red-500 fill-red-500" />
              ))}
            </div>
            <p className="text-gray-300 text-lg mb-6 italic">"{testimonials[activeTestimonial].content}"</p>
            <p className="text-white font-semibold">{testimonials[activeTestimonial].name}</p>
            <p className="text-red-500">{testimonials[activeTestimonial].role}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-700/10 rounded-full blur-3xl"></div>
        <h3 className="text-4xl font-bold text-white mb-6">
          Start Your Fitness Journey Today
        </h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Join now and get 30% off your first 3 months, plus a free personal training session
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-500 to-red-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-red-500 transition-all duration-300"
          >
            Subscribe Now
          </motion.button>
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-red-500 text-red-500 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-red-500 transition-all duration-300"
          >
            View Offers
          </motion.button> */}
        </div>
      </motion.div>
    </div>
  );
};

export default GymService;