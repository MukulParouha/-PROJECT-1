import React from "react";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";
import aarnalogo from "../assets/images/logo/aarna-logo.png";
import snbalogo from "../assets/images/logo/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-black to-black text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Section - Logos and Company Info */}
          <div className="space-y-6">
            <div className="flex flex-col space-y-4">
              <img
                src={snbalogo}
                alt="SNBA Logo"
                className="h-[55px] w-[180px]"
              />
              <img
                src={aarnalogo}
                alt="Aarna Logo"
                className="h-[120px] w-[170px]"
              />
            </div>
            {/* <p className="text-sm leading-relaxed text-white">
                            Elevating lifestyle experiences through innovative solutions. 
                            Your one-stop destination for premium services.
                        </p>
                        <div className="flex space-x-5">
                            <a 
                                href="#" 
                                className="hover:text-white transition-all duration-300 hover:scale-110"
                                aria-label="Twitter"
                            >
                                <Twitter size={22} />
                            </a>
                            <a 
                                href="#" 
                                className="hover:text-white transition-all duration-300 hover:scale-110"
                                aria-label="GitHub"
                            >
                                <Github size={22} />
                            </a>
                            <a 
                                href="#" 
                                className="hover:text-white transition-all duration-300 hover:scale-110"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={22} />
                            </a>
                        </div> */}
          </div>

          {/* Center Section - Services and Business Hours */}
          <div className="space-y-8">
            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-white text-lg font-semibold">Our Services</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/aarna-mart"
                    className="group flex items-center text-white space-x-2 hover:text-white transition-colors"
                  >
                    <ExternalLink
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <span>AARNA MART</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/aarna-gym"
                    className="group flex items-center text-white space-x-2 hover:text-white transition-colors"
                  >
                    <ExternalLink
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <span>AARNA GYM</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/aarna-salon"
                    className="group flex items-center text-white space-x-2 hover:text-white transition-colors"
                  >
                    <ExternalLink
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <span>AARNA UNISEX SALON</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/aarna-foodcourt"
                    className="group flex items-center text-white space-x-2 hover:text-white transition-colors"
                  >
                    <ExternalLink
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <span>AARNA FOOD COURT</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className="space-y-5 text-white">
            <h3 className="text-white text-lg font-semibold mb-5">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <a
                href="https://maps.app.goo.gl/bZDwXjpgNYbFmjbL8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-white transition-colors"
              >
                <MapPin size={40} className="text-white" />
                <span>
                  SNBA Consumers, 2nd floor, Mansarovar Bhavan, NIT Road,
                  Raipur, Chhattisgarh, India
                </span>
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center space-x-3 hover:text-white transition-colors"
              >
                <Phone size={18} className="text-white" />
                <span>9109222890</span>
              </a>
              <a
                href="mailto:contact@company.com"
                className="flex items-center space-x-3 hover:text-white transition-colors"
              >
                <Mail size={18} className="text-white" />
                <span>snbaconsumers@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Aarna Group. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-6">
              <a href="/Career">Career</a>
              <a href="/terms-of-services">Terms of Services</a>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/refund-policy">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
