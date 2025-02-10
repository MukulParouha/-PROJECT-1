// import React from 'react';
// import { Users, MapPin, Heart, Award } from 'lucide-react';

// const StatsSection = () => {
//   const stats = [
//     {
//       icon: <Users className="h-8 w-8 text-red-600" />,
//       number: "1000+",
//       label: "Members"
//     },
//     {
//       icon: <MapPin className="h-8 w-8 text-red-600" />,
//       number: "",
//       label: "Multiple Locations"
//     },
//     {
//       icon: <Heart className="h-8 w-8 text-red-600" />,
//       number: "100%",
//       label: "Indian Owned"
//     },
//     {
//       icon: <Award className="h-8 w-8 text-red-600" />,
//       number: "",
//       label: "Quality Commitment"
//     }
//   ];

//   return (
//     <div className="w-full bg-black py-16">
//       <div className="mx-auto max-w-7xl px-4">
//         <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
//           {stats.map((stat, index) => (
//             <div 
//               key={index} 
//               className="flex flex-col items-center justify-center text-center"
//             >
//               {/* Icon Circle */}
//               <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-red-600/10 border-2 border-white transition-transform duration-300 hover:scale-110">
//                 {stat.icon}
//               </div>
              
//               {/* Stats */}
//               <div className="space-y-2">
//                 {stat.number && (
//                   <div className="text-3xl font-bold text-white">
//                     {stat.number}
//                   </div>
//                 )}
//                 <div className="text-2xl font-medium text-gray-300">
//                   {stat.label}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StatsSection;

import React from 'react';
import { Users, MapPin, Heart, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      number: "1000+",
      label: "Members",
      description: "Active community members"
    },
    {
      icon: <MapPin className="h-8 w-8 text-red-500" />,
      number: "15+",
      label: "Locations",
      description: "Across major cities"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      number: "100%",
      label: "Indian Owned",
      description: "Proudly local business"
    },
    {
      icon: <Award className="h-8 w-8 text-red-500" />,
      number: "5⭐",
      label: "Quality",
      description: "Customer satisfaction"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-black to-gray-900 py-16 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
           Statistics
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-2 text-xl">
            Discover how we're making a difference in the community through our commitment to excellence and service.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative p-6 rounded-tl-[50px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[50px] bg-gray-800/50 backdrop-blur-sm border shadow-lg shadow-red-500 border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full group-hover:bg-red-500/30 transition-all duration-300" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-500/10 to-red-600/30 border border-white group-hover:scale-110 transition-all duration-300">
                  {stat.icon}
                </div>
              </div>
              
              {/* Stats Content */}
              <div className="space-y-2">
                {stat.number && (
                  <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                )}
                <div className="text-xl font-semibold text-white">
                  {stat.label}
                </div>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 h-20 w-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 right-0 h-8 w-1 bg-gradient-to-b from-red-500/0 to-red-500/50" />
                <div className="absolute top-0 right-0 h-1 w-8 bg-gradient-to-l from-red-500/0 to-red-500/50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;