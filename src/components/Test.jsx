
// import React from 'react';

// const WhyChooseUs = () => {
//   const features = [
//     {
//       title: "We Value Quality",
//       description: "We believe in pushing boundaries and delivering excellence. Our premium offerings are crafted with precision, ensuring lasting quality and reliability in every product and service.",
//       icon: () => (
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       )
//     },
//     {
//       title: "Customer-Centric Approach",
//       description: "Your satisfaction is our priority. We take pride in providing the best possible service with dedicated before and after-sales support.",
//       icon: () => (
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//         </svg>
//       )
//     },
//     {
//       title: "Innovation-Driven",
//       description: "We embrace the latest trends and technology to provide smart, efficient, and user-friendly solutions that simplify daily tasks.",
//       icon: () => (
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//         </svg>
//       )
//     },
//     {
//       title: "Professional Expertise",
//       description: "With years of industry knowledge, our team brings deep expertise and know-how to deliver exceptional solutions tailored to your needs.",
//       icon: () => (
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
//         </svg>
//       )
//     }
//   ];

//   return (
//     <div className="relative bg-gradient-to-br from-black via-gray-900 to-black min-h-screen py-16 px-4 overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-red-600/10 rounded-full blur-3xl" />
//         <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-red-600/10 rounded-full blur-3xl" />
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-bold text-white mb-4">
//             Why Choose Us
//           </h1>
//           <div className="w-24 h-1 bg-red-600 mx-auto rounded-full" />
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//           {features.map((feature, index) => (
//             <div 
//               key={index} 
//               className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-300"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
              
//               <div className="flex items-start space-x-6 max-w-7xl mx-auto">
//                 <div className="flex-shrink-0">
//                   <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg shadow-red-500/20 group-hover:shadow-red-500/40 transition-all duration-300">
//                     <feature.icon />
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-400 leading-relaxed">
//                     {feature.description}
//                   </p>
//                 </div>
//               </div>

//               {/* Decorative corner */}
//               {/* <div className="absolute -top-px -right-px w-16 h-16 overflow-hidden">
//                 <div className="absolute top-0 right-0 w-4 h-4 bg-red-500/20 transform rotate-45 translate-x-1/2 -translate-y-1/2 group-hover:bg-red-500/40 transition-all duration-300" />
//               </div> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;

import React from "react";

const Franchisecomp = () => {
  const franchiseOptions = [
    {
      title: "Retail Franchise",
      description:
        "Offer premium lifestyle products that blend elegance, functionality, and durability. Join us in redefining customer experiences with excellence.",
      benefits: [
        "Exclusive access to Aarna's premium product line",
        "Comprehensive training and support",
        "Strong brand presence and customer trust",
      ],
      image: "/path-to-retail-franchise.jpg",
    },
    {
      title: "Tech Solutions Franchise",
      description:
        "Become a part of Aarna's innovation-driven ecosystem, delivering smart and efficient solutions that simplify everyday tasks.",
      benefits: [
        "Cutting-edge tech-driven solutions",
        "Continuous research & development support",
        "Expert consultations and collaboration opportunities",
      ],
      image: "/path-to-tech-franchise.jpg",
    },
    {
      title: "Service Franchise",
      description:
        "Provide specialized, customer-first services designed to meet modern needs with precision, quality, and excellence.",
      benefits: [
        "Tailored service solutions",
        "Customer-centric business model",
        "Support from a trusted brand in the industry",
      ],
      image: "/path-to-service-franchise.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-4">
          Become a Franchise Partner with <span className="text-black">Aarna</span>
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Join a brand that stands for trust, innovation, and excellence.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition">
          Apply Now
        </button>
      </div>

      {/* Franchise Options Section */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {franchiseOptions.map((option, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <img
              src={option.image}
              alt={option.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">{option.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{option.description}</p>
            <ul className="text-gray-500 text-sm mt-4 list-disc list-inside">
              {option.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Franchisecomp;
