import React from 'react';
import aarnamart from '../assets/images/aarnamart.jpg'
import aarnasalon from '../assets/images/aarnasalon.jpg'
import aarnagym from '../assets/images/aarnagym.jpg'
import aarnafood from '../assets/images/aarnafood.jpg'

const Member  = () => {
  const services = [
    {
      title: "AARNA MART",
      discount: "10-90",
      image: aarnamart,
      imageAlt: "Supermarket aisle with shopping cart",
    },
    {
      title: "AARNA UNISEX SALON",
      discount: "75",
      image: aarnasalon,
      imageAlt: "Modern salon interior",
    },
    {
      title: "AARNA GYM",
      discount: "75",
      image: aarnagym,
      imageAlt: "Gym equipment and training",
    },
    {
      title: "AARNA FOOD COURT",
      discount: "25",
      image: aarnafood,
      imageAlt: "Various food dishes",
    },
  ];

  return (
    <div className="bg-black min-h-screen py-16 px-4">
      {/* Main Heading */}
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Choose The Best Pricing For You
        </h1>
        <p className="text-gray-400 text-lg">
          Who Are In Extremely Love With Eco Friendly System.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div 
            key={service.title}
            className="relative group overflow-hidden rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105"
          >
            {/* Card Content */}
            <div className="relative h-[400px] overflow-hidden">
              {/* Image */}
              <img
                src={service.image}
                alt={service.imageAlt}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              {/* Service Title Banner */}
              {/* <div className="absolute top-6 left-0 bg-red-600 py-2 px-4 transform -skew-x-12">
                <span className="text-white font-bold text-lg tracking-wider skew-x-12 inline-block">
                  {service.title}
                </span>
              </div> */}

              {/* Discount Badge */}
              {/* <div className="absolute bottom-6 left-0 bg-red-600 py-3 px-6 transform -skew-x-12">
                <div className="skew-x-12">
                  <span className="text-white text-sm font-medium">UPTO</span>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-white text-4xl font-bold">{service.discount}</span>
                    <span className="text-white text-2xl font-bold">%</span>
                    <span className="text-white text-xl font-bold">OFF</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Membership Section */}
      <div className="mt-20 text-center space-y-8">
        <h2 className="text-3xl font-bold text-white">
          Subscribe Membership
        </h2>
        <div className="flex justify-center items-baseline space-x-2">
          <span className="text-6xl font-bold text-white">Rs. 99</span>
          <span className="text-red-600 text-xl font-medium">for 31 Days</span>
        </div>
        <button className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold 
                         transform transition-all duration-300 hover:bg-red-700 
                         hover:scale-105 focus:outline-none focus:ring-2 
                         focus:ring-red-500 focus:ring-opacity-50">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Member ;