
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Tag, Utensils, Dumbbell, Scissors, Star } from 'lucide-react';
import Banner from '../components/Banner';

const AboutUs = () => {
  return (
    <>
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Gradient Overlay */}
      <div className="relative overflow-hidden bg-black py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1)_0%,transparent_65%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
              Welcome to Aarna Groups
            </h1>
            <p className="text-xl md:text-2xl font-light text-red-200">Powered by SNBA Consumers</p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Building2, title: 'Aarna Mart', desc: 'Shopping Experience' },
            { icon: Dumbbell, title: 'Aarna Gym', desc: 'Fitness Journey' },
            { icon: Scissors, title: 'Aarna Salon', desc: 'Beauty Services' },
            { icon: Utensils, title: 'Aarna Food Court', desc: 'Dining Delights' }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-red-900/30 shadow-lg hover:shadow-red-600 transition-all duration-300"
            >
              <service.icon className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <h3 className="text-xl font-bold mb-2 text-red-100">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Our Vision</h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            Aarna Groups is dedicated to making essential services affordable, accessible, and high-quality for everyone. We bring together multiple businesses under one platform, ensuring a seamless experience across shopping, fitness, beauty, and dining.
          </p>
        </div>
        

        {/* Membership Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-red-900 to-red-950 rounded-2xl max-w-7xl p-10 ml-[110px] mb-16 border border-red-800/50 shadow-xl"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-200 to-white bg-clip-text text-transparent">
              Premium Membership
            </h2>
            <div className="text-2xl font-bold flex items-center gap-2">
              <Star className="text-yellow-500 w-6 h-6 fill-yellow-500" />
              <span className="text-red-200">₹99/month</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold flex items-center text-red-200">
                <Tag className="mr-3" />
                Exclusive Discounts
              </h3>
              <ul className="space-y-4 text-lg text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  75% off at Aarna Gym and Salon
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  10-90% off at Aarna Mart
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  25% off at Aarna Food Court
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold flex items-center text-red-200">
                <Users className="mr-3" />
                Member Benefits
              </h3>
              <ul className="space-y-4 text-lg text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  All taxes included
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Reduced GST rates
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  No hidden costs
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-10 mb-16 border border-red-900/30 max-w-7xl ml-[110px]">
          <h2 className="text-3xl font-bold mb-8 text-red-500">Our Mission</h2>
          <div className="">
            <div className="space-y-6">
              <p className="leading-relaxed text-lg text-gray-300">
                At SNBA Consumers, our goal is simple: to make everyday services affordable and accessible for everyone. We work hard to offer top-quality products and services at prices that help you save money. Whether it's shopping, staying fit, looking good, or dining out, we've got you covered with great deals that include all taxes.
              </p>
            </div>
            <div className="space-y-10 mt-2">
              <p className="leading-relaxed text-lg text-gray-300">
                We believe that enjoying life's essentials shouldn't cost a fortune. That's why we've created a membership that offers exclusive benefits in shopping, fitness, beauty, and dining, all designed to give you the best value for your money.
              </p>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-red-500 mb-8">Join Our Community</h2>
          <p className="text-lg leading-relaxed mb-10 text-gray-300">
            When you join SNBA Consumers, you become part of a community that cares about helping you get the most out of every day. We're here to make sure you enjoy the best services at the best prices, making your life easier and more enjoyable.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-4 rounded-full text-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg shadow-red-900/50"
          >
            Become a Member Today
          </motion.button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-red-950 via-red-900 to-red-950 mt-16 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-bold text-red-100">
            Come be a part of SNBA Consumers, where saving money and enjoying great services go hand in hand!
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;