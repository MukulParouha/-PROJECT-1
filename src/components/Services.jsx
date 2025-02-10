// import React, { useState } from 'react'; 
// import { ChevronRight, Percent } from 'lucide-react';
// import grocery from '../assets/images/services/supermart.jpg';
// import salon from '../assets/images/services/salon.jpg';
// import gym from '../assets/images/services/fitness.jpg';
// import food from '../assets/images/services/restraunt.jpg';

// const ServicesSection = () => {
//   const services = [
//     {
//       image: grocery,
//       title: "Supermarket",
//       description:
//         "Discover a world of fresh, high-quality groceries at our Grocery Store. We take pride in offering you a wide range of products to meet all your daily needs.",
//       discount: "10% to 90%",
//       link:"/aarna-mart"
//     },
//     {
//       image: food,
//       title: "Food, Restaurant & Sweets",
//       description:
//         "Indulge in a culinary journey with our delectable offerings in Food, Restaurant, and Sweets. Whether you're a food enthusiast or have a sweet tooth, we have something special for everyone.",
//       discount: "Up To 25%",
//       link:"/aarna-foodcourt"
//     },
//     {
//       image: salon,
//       title: "Personal Grooming",
//       description:
//         "Pamper yourself with our luxurious Salon Services designed to enhance your beauty and well-being. At Our Salon, we offer a range of services to make you look and feel your best.",
//       discount: "Up To 75%",
//       link:"/aarna-salon"
//     },
//     {
//       image: gym,
//       title: "Fitness",
//       description:
//         "Elevate your fitness journey with our comprehensive Gym Services at Our Gym. We are committed to helping you achieve your health and wellness goals through professional guidance and state-of-the-art facilities.",
//       discount: "Up To 75%",
//       link:"/aarna-gym"
//     },
//   ];

//   return (
//     <section className="py-16 bg-black ">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-bold text-white mb-4">Our Services</h2>
//           <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
//           <p className="max-w-3xl mx-auto text-lg text-gray-300">
//             Experience premium services under one roof with exclusive membership benefits and amazing discounts.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid gap-10 md:grid-cols-2">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="relative group overflow-hidden shadow-lg shadow-red-500 bg-gray-800 hover:shadow-2xl transition duration-500 rounded-tr-[50px] rounded-bl-[50px] rounded-tl-[15px] rounded-br-[15px]"
//             >
//               {/* Service Image */}
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
//               />

//               {/* Dark Overlay */}
//               <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-500 group-hover:opacity-70"></div>

//               {/* Service Details (Initially Hidden) */}
//               <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ">
//                 <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
//                 <p className="text-gray-300 text-sm">{service.description}</p>

//                 {/* Discount Badge */}
//                 <div className="mt-4 flex items-center bg-black/80 px-4 py-2 rounded-full backdrop-blur-sm">
//                   {/* <Percent className="h-4 w-4 text-red-600 mr-2" /> */}
//                   <span className="font-semibold text-white">{service.discount} OFF</span>
//                 </div>

//                 {/* Learn More Button */}
//                 <a href={service.link}
//                 className="mt-4 flex items-center text-white hover:text-red-500 font-medium transition-colors duration-300">
//                   <span>Learn More</span>
//                   <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;


// import React, { useEffect, useRef, useState } from 'react';
// import { ChevronRight, Percent } from 'lucide-react';
// import Card from '@/components/ui/card';
// import CardContent from '@/components/ui/cardcontent';

// const ServiceCard = ({ service, isInView }) => {
//   const { title, description, discount, link } = service;
  
//   return (
//     <Card className="relative h-[450px] overflow-hidden shadow-lg shadow-red-500/20 bg-gray-800 hover:shadow-2xl transition-all duration-700 rounded-tr-[50px] rounded-bl-[50px] rounded-tl-[15px] rounded-br-[15px]">
//       <CardContent className="p-0 h-full">
//         <div className="relative h-full">
//           {/* Image Container */}
//           <div 
//             className={`absolute inset-0 w-full h-full transition-transform duration-1000 ${
//               isInView ? 'translate-y-full' : 'translate-y-0'
//             }`}
//           >
//             <img
//               src="/api/placeholder/400/320"
//               alt={`${title} service preview`}
//               className="w-full h-full object-cover"
//             />
//             <div 
//               className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80"
//               aria-hidden="true"
//             />
//             <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-white">
//               {title}
//             </h3>
//           </div>

//           {/* Content Container */}
//           <div 
//             className={`absolute inset-0 p-8 bg-gradient-to-br from-gray-900 to-gray-800 transition-transform duration-1000 ${
//               isInView ? 'translate-y-0' : '-translate-y-full'
//             }`}
//           >
//             <div className="h-full flex flex-col">
//               <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
              
//               <div className="flex items-center space-x-2 mb-6">
//                 <div className="h-1 w-16 bg-red-600"></div>
//                 <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
//                   <Percent className="h-4 w-4 text-red-600 mr-2" aria-hidden="true" />
//                   <span className="font-semibold text-white">{discount} OFF</span>
//                 </div>
//               </div>

//               <p className="text-gray-300 text-lg leading-relaxed flex-grow">
//                 {description}
//               </p>

//               <a
//                 href={link}
//                 className="mt-6 inline-flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-all duration-300 group/link"
//                 aria-label={`Learn more about ${title}`}
//               >
//                 <span>Explore More</span>
//                 <ChevronRight 
//                   className="h-5 w-5 transition-transform duration-300 group-hover/link:translate-x-1" 
//                   aria-hidden="true"
//                 />
//               </a>
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// const ServicesSection = () => {
//   const [isInView, setIsInView] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//         }
//       },
//       {
//         threshold: 0.3,
//         rootMargin: '-100px'
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const services = [
//     {
//       title: "Supermarket",
//       description: "Discover a world of fresh, high-quality groceries at our Grocery Store. We take pride in offering you a wide range of products to meet all your daily needs. Experience premium quality and exceptional service.",
//       discount: "10% to 90%",
//       link: "/aarna-mart"
//     },
//     {
//       title: "Food & Restaurant",
//       description: "Indulge in a culinary journey with our delectable offerings in Food and Restaurant. Whether you're a food enthusiast or simply looking for a delightful meal, we have something special for everyone.",
//       discount: "Up To 25%",
//       link: "/aarna-foodcourt"
//     },
//     {
//       title: "Personal Grooming",
//       description: "Pamper yourself with our luxurious Salon Services designed to enhance your beauty and well-being. Our expert stylists and premium services ensure you leave looking and feeling your absolute best.",
//       discount: "Up To 75%",
//       link: "/aarna-salon"
//     },
//     {
//       title: "Fitness",
//       description: "Elevate your fitness journey with our comprehensive Gym Services. Our state-of-the-art facilities and professional trainers are committed to helping you achieve your health and wellness goals.",
//       discount: "Up To 75%",
//       link: "/aarna-gym"
//     }
//   ];

//   return (
//     <section 
//       ref={sectionRef}
//       className="py-24 bg-gradient-to-b from-black to-gray-900"
//       aria-label="Our Services"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-20">
//           <h2 className="text-5xl font-bold text-white mb-4">Our Services</h2>
//           <div 
//             className="w-24 h-1 bg-red-600 mx-auto mb-8"
//             role="presentation"
//           />
//           <p className="max-w-3xl mx-auto text-lg text-gray-300">
//             Experience premium services under one roof with exclusive membership benefits and amazing discounts.
//           </p>
//         </div>

//         <div className="grid gap-8 md:grid-cols-2">
//           {services.map((service) => (
//             <ServiceCard 
//               key={service.link} 
//               service={service}
//               isInView={isInView}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import grocery from "../assets/images/services/supermart.jpg";
import salon from "../assets/images/services/salon.jpg";
import gym from "../assets/images/services/fitness.jpg";
import food from "../assets/images/services/restraunt.jpg";

const services = [
  {
    image: grocery,
    title: "Supermarket",
    description:
      "Discover a world of fresh, high-quality groceries at our Grocery Store. We take pride in offering you a wide range of products to meet all your daily needs.",
    discount: "10% to 90%",
    link: "/aarna-mart",
  },
  {
    image: food,
    title: "Food, Restaurant & Sweets",
    description:
      "Indulge in a culinary journey with our delectable offerings in Food, Restaurant, and Sweets. Whether you're a food enthusiast or have a sweet tooth, we have something special for everyone.",
    discount: "Up To 25%",
    link: "/aarna-foodcourt",
  },
  {
    image: salon,
    title: "Personal Grooming",
    description:
      "Pamper yourself with our luxurious Salon Services designed to enhance your beauty and well-being. At Our Salon, we offer a range of services to make you look and feel your best.",
    discount: "Up To 75%",
    link: "/aarna-salon",
  },
  {
    image: gym,
    title: "Fitness",
    description:
      "Elevate your fitness journey with our comprehensive Gym Services at Our Gym. We are committed to helping you achieve your health and wellness goals through professional guidance and state-of-the-art facilities.",
    discount: "Up To 75%",
    link: "/aarna-gym",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            Experience the premium services under one roof with exclusive membership benefits and amazing discounts.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative group overflow-hidden shadow-lg shadow-red-500 bg-gray-800 hover:shadow-2xl transition duration-500 rounded-tr-[50px] rounded-bl-[50px] rounded-tl-[15px] rounded-br-[15px]"
            >
              {/* Service Image */}
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-72 object-cover transition-opacity duration-700"
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 0.3 }}
                viewport={{ once: true }}
              />

              {/* Dark Overlay */}
              <motion.div
                className="absolute inset-0 bg-black transition-opacity duration-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.2 }}
                viewport={{ once: true }}
              ></motion.div>

              {/* Service Details */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 opacity-0 transition-opacity duration-700"
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                <div className="w-24 h-1 bg-red-600 mx-auto rounded-full" />
                <p className="text-white text-lg">{service.description}</p>

                {/* Discount Badge */}
                <div className="mt-4 flex items-center bg-black/80 px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="font-semibold text-white">{service.discount} OFF</span>
                </div>

                {/* Learn More Button */}
                <a
                  href={service.link}
                  className="mt-4 flex items-center text-white hover:text-red-500 font-medium transition-colors duration-300"
                >
                  <span className="text-lg">Learn More</span>
                  <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
