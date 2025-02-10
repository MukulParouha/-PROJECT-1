import React from 'react';

const Why = () => {
    
  const features = [
    {
      title: "Diverse Range of Services",
      description: "From supermarkets and restaurants to salons and gyms, Aarna Groups brings multiple essential services under one roof, ensuring convenience and quality in every experience.",
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Customer-Centric Approach",
      description: "Your satisfaction is our priority. We take pride in providing the best possible service with dedicated before and after-sales support.",
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Unmatched Quality & Customer Satisfaction",
      description: "We prioritize customer satisfaction by offering premium services, top-quality products, and a seamless experience across all our businesses.",
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Exclusive Discounts & Membership Benefits",
      description: "Enjoy exciting discounts ranging from 10% to 90% across various services, making luxury and comfort accessible to everyone.",
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-black min-h-screen py-16 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-red-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Why Choose Us
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] max-w-5xl mx-auto ">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white/5 backdrop-blur-lg rounded-tr-[50px] rounded-br-[30px] rounded-tl-[10px] rounded-bl-[10px]  p-8 border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:shadow shadow-lg shadow-red-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
              
              <div className="flex items-start space-x-6 max-w-7xl mx-auto">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg shadow-red-500/20 group-hover:shadow-red-500/40 transition-all duration-300">
                    <feature.icon />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-md">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Why;