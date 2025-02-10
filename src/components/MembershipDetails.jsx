import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ShoppingCart,
  Dumbbell,
  Scissors,
  Coffee,
} from "lucide-react";

const MembershipPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const services = [
    {
      title: "Aarna Mart",
      icon: <ShoppingCart className="w-8 h-8" />,
      discount: "10-90% OFF",
      benefits: [
        "Massive Discounts on Groceries",
        "Early Access to Sales",
        "Loyalty Points Program",
        "Member-exclusive deals",
      ],
    },
    {
      title: "Aarna Gym",
      icon: <Dumbbell className="w-8 h-8" />,
      discount: "75% OFF",
      benefits: [
        "75% Discount on Gym Membership Fees",
        "Free Fitness Consultation",
        "Priority Access to New Classes",
        "10% off on gym supplements",
      ],
    },
    {
      title: "Aarna Salon",

      icon: <Scissors className="w-8 h-8" />,
      discount: "75% OFF",
      benefits: [
        "75% off on beauty treatments",
        "Free Hair and Skin Consultation",
        "Priority Booking",
        "20% off on seasonal treatments",
      ],
    },
    {
      title: "Aarna Food Court",
      icon: <Coffee className="w-8 h-8" />,
      discount: "25% OFF",
      benefits: [
        "25% off on all meals",
        "Exclusive Combo Deals",
        "Free Beverage with Every Meal",
        "Birthday Treats",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-[400px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-red-600 opacity-10 animate-pulse"></div>
        <div className="text-center z-10 px-4">
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="text-6xl font-bold mb-6"
          >
            Aarna Group
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl mb-8"
          >
            Exclusive ₹99 Membership
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors duration-300"
          >
            Join Now
          </motion.button>
        </div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10"
        >
          <ChevronDown className="w-8 h-8 text-white opacity-75" />
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16 "
        >
          Our Premium Services
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-tl-[15px] rounded-br-[15px] rounded-tr-[50px] rounded-bl-[50px] p-6 hover:shadow-lg hover:shadow-red-500 transition-all duration-300"
            >
              <div className="flex items-center mb-4 ">
                <div className="p-3 bg-red-600 rounded-lg mr-4">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <div className="text-red-500 font-bold">
                    {service.discount}
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {service.benefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center ml-5"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-gradient-to-r from-red-900/50 to-black py-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Join?</h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto px-4">
          Get exclusive access to all our premium services for just ₹99/month
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors duration-300"
        >
          Sign Up Now
        </motion.button>
        <div className="mt-8 text-gray-400">
          <p>Contact us: 📞 9109222890</p>
          <p>Email: info@aarna.com</p>
        </div>
      </motion.div>
    </div>
  );
};

export default MembershipPage;
