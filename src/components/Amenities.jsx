import React, { useEffect, useState } from 'react';

const StatCard = ({ number, title, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCount(prev => {
          if (prev < number) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [number, delay]);

  return (
    <div className={`transform transition-all duration-700 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
    }`}>
      <div className="flex flex-col items-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <span className="text-6xl font-bold text-red-500 mb-4">
          {count}
        </span>
        <div className="h-1 w-20 bg-gray-200 mb-4">
          <div className="h-full bg-red-500 transform origin-left transition-transform duration-1000"
               style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></div>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 text-center max-w-[200px]">
          {title}
        </h3>
      </div>
    </div>
  );
};

const Amenities = () => {
  const stats = [
    { number: 99, title: " ₹ Exclusive Membership", delay: 0 },
    { number: 4, title: "Amazing Amenities", delay: 200 },
    { number: 1, title: "One Destination", delay: 400 }
  ];

  return (
    <div className="h-[400px] bg-gray-300 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex justify-center">
              <StatCard {...stat} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;