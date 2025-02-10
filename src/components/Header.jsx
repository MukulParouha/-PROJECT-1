// import React, { useState, useEffect } from 'react';
// import logo from '../assets/images/logo/logo.png';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Check if page is scrolled
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);  // Change the state when scrolled
//       } else {
//         setIsScrolled(false);  // Reset the state when not scrolled
//       }
//     };

//     window.addEventListener('scroll', handleScroll); // Event listener for scroll

//     // Cleanup listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="relative">
//       {/* Navigation Bar */}
//       <nav
//         className={`fixed top-0 left-0 right-0 px-4 py-4 z-50 transition-all duration-300 ${
//           isScrolled ? 'bg-black text-white shadow-md' : 'bg-transparent text-white'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto flex items-center justify-between rounded-full py-2">
//           <div className="flex items-center">
//             <img
//               src={logo}
//               alt="SNBA Logo"
//               className="w-13 h-12 ml-3"
//             />
//           </div>

//           <div className="hidden md:flex items-center space-x-6 text-lg font-semibold">
//             <a
//               href="/"
//               className={`hover:text-red-600 ${isScrolled ? 'text-white' : 'text-white'}`}
//             >
//               Home
//             </a>

//             <a
//               href="/aboutus"
//               className={`hover:text-red-600 ${isScrolled ? 'text-white' : 'text-white'}`}
//             >
//               About Us
//             </a>
//             <a
//               href="/membershipplans"
//               className={`hover:text-red-600 ${isScrolled ? 'text-white' : 'text-white'}`}
//             >
//               Membership Plan
//             </a>
//             <a
//               href="/contactus"
//               className={`hover:text-red-600 ${isScrolled ? 'text-white' : 'text-white'}`}
//             >
//               Contact
//             </a>
//             <button
//               className={`px-4 py-2 rounded-full transition-colors ${
//                 isScrolled ? 'bg-red-600' : 'bg-red-600'
//               }`}
//             >
//               <a href='/Business'> Become a Partner</a>
//             </button>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Get current path

  // Check if page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="relative">
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 px-4 py-4 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black text-white shadow-md"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between rounded-full py-2">
          <div className="flex items-center">
            <img src={logo} alt="SNBA Logo" className="w-13 h-12 ml-3" />
          </div>

          <div className="hidden md:flex items-center space-x-6 text-xl font-semibold">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/aboutus" },
              { name: "Membership Plan", path: "/membershipplans" },
              { name: "Contact", path: "/contactus" },
              { name: "Career", path: "/Career" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-red-600 relative ${
                  isActive(item.path) ? "text-white" : "text-white"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-red-600 rounded-md"></span>
                )}
              </Link>
            ))}

            <button className="px-4 py-2 rounded-full bg-red-600">
              <Link to="/Business">Apply for Franchisee</Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
