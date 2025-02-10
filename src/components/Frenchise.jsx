import React from 'react';
import Card from '@/components/ui/card';
import Mart from '../assets/images/franchise/mart1.jpg'
import Salon from '../assets/images/franchise/salon.jpg'
import Gym from '../assets/images/franchise/gym.jpg'
import Food from '../assets/images/franchise/food.jpg'

const Header = () => {
  const services = [
    {
      title: "AARNA MART",
      discount: "10-90%",
      image: Mart,
      bgColor: "bg-purple-900"
    },
    {
      title: "AARNA UNISEX SALON",
      discount: "75%",
      image: Salon,
      bgColor: "bg-purple-900"
    },
    {
      title: "AARNA GYM",
      discount: "75%",
      image: Gym,
      bgColor: "bg-purple-900"
    },
    {
      title: "AARNA FOOD COURT",
      discount: "25%",
      image: Food,
      bgColor: "bg-purple-900"
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center py-12">
         <h1 className="text-4xl font-bold mb-4 text-white">Become a Partner with</h1>
         <div className="mb-8">
           <h2 className="text-6xl font-bold text-red-600">SNBA Consumers</h2>
         </div>
         <button className="bg-red-600 text-white px-8 py-2 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors">
           Apply now
         </button>
        
         
       </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              <Card className={`overflow-hidden transition-transform duration-300 group-hover:scale-105`}>
                {/* Service Image */}
                <div className="relative h-80 shadow-lg shadow-red-500 border-2 border-white rounded-tl-[50px] rounded-br-[50px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-br-[50px] rounded-tl-[50px]"
                  />
                  {/* Red Banner with Title */}
                  <div className="absolute top-4 left-0 bg-red-600 text-white py-2 px-4 transform -skew-x-12">
                    <span className="block transform skew-x-12 text-sm font-bold">
                      {service.title}
                    </span>
                  </div>
                  {/* Discount Badge */}
                  <div className="absolute bottom-4 left-0 bg-red-600 text-white py-2 px-4 transform -skew-x-12">
                    <div className="transform skew-x-12">
                      <span className="text-sm">UPTO</span>
                      <span className="text-2xl font-bold ml-2">{service.discount}</span>
                      <span className="text-sm ml-1">OFF</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Membership Section */}
        {/* <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 ">Subscribe Membership</h2>
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-baseline justify-center">
              <span className="text-4xl font-bold">Rs.</span>
              <span className="text-5xl font-bold mx-2">99</span>
              <div className="flex flex-col items-start">
                <span className="text-red-600 font-semibold">for 31 Days</span>
              </div>
            </div>
            <button className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition-colors duration-300 transform hover:scale-105">
              Buy Now
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Header;