import React, { useState } from 'react';
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaWhatsappSquare, FaTwitter } from 'react-icons/fa';
import { SiWhatsapp } from "react-icons/si";
const SocialSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const socialLinks = [
    { icon: FaFacebook, color: 'bg-blue-600', href: 'https://www.facebook.com/profile.php?id=61571678816978' },
    { icon: SiWhatsapp, color: 'bg-green-500', href: 'https://wa.me/9340170474' },
    { icon: FaYoutube, color: 'bg-red-600', href: 'https://www.youtube.com/@SnbaConsumers' },
    { icon: FaInstagram, color: 'bg-pink-500', href: 'https://www.instagram.com/aarnagroupsofficial/' },
     { icon: FaTwitter, color: 'bg-blue-500', href: 'https://x.com/SConsumers61681' },
    // { icon: FaPaperPlane, color: 'bg-blue-400', href: '#' },
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 flex z-50">
      {/* Main Sidebar */}
      <div className={`flex flex-col gap-2 p-2 bg-black rounded-l-lg transition-all duration-300 
        ${isCollapsed ? 'w-12' : 'w-14'}`}>

        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            className={`${social.color} p-2 rounded-lg transition-all duration-200 
              hover:scale-110 hover:brightness-110`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <social.icon
              className="text-white"
              size={isCollapsed ? 20 : 24}
            />
          </a>
        ))}
      </div>

      {/* Toggle Button */}
      {/* <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="h-8 w-5 bg-gray-800 absolute -right-5 top-1/2 -translate-y-1/2
          rounded-r-lg flex items-center justify-center hover:bg-gray-700"
      >
        {isCollapsed ? (
          <ChevronRight size={16} className="text-white" />
        ) : (
          <ChevronLeft size={16} className="text-white" />
        )}
      </button> */}
    </div>
  );
};

export default SocialSidebar;