
import React from 'react';
import { Phone, Apple, Play, Star, Download } from 'lucide-react';
import mobile from '../assets/images/mobileimage.jpg'

const AppBanner = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left space-y-8">


            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Transform Your
              <span className="block text-white">
                life with
              </span>
              <span className='text-7xl text-red-500 mt-2'>SNBA Consumers</span>
            </h2>
            <p className="text-xl text-white/80">
              Download our app and unlock a world of wellness, beauty, and exclusive member benefits.
            </p>
            {/* Rating Section */}
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-600 fill-yellow-600" />
                ))}
              </div>
              <span className="text-white">4.0/5 (1k+ Reviews)</span>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="group relative overflow-hidden shadow-sm shadow-red-500 bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white px-8 py-4 rounded-2xl transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <Apple className="w-8 h-8 " />
                  <div className="text-left">
                    <p className="text-sm opacity-80">Download on the</p>
                    <p className="text-lg font-semibold">App Store</p>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </button>

              <button className="group relative overflow-hidden shadow-sm shadow-red-500 bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white px-8 py-4 rounded-2xl transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <Play className="w-8 h-8" />
                  <div className="text-left">
                    <p className="text-sm opacity-80">GET IT ON</p>
                    <p className="text-lg font-semibold">Google Play</p>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </button>
            </div>
          </div>

          {/* Phone Mockup Section */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-[580px] bg-black rounded-[60px] border-8 border-gray-900 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Notch */}
              {/* <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-3xl"></div> */}

              {/* Screen Content */}
              <div className="absolute inset-2 bg-gradient-to-br from-red-700 via-red-600 to-red-500 rounded-[48px] overflow-hidden">
                <img
                  src={mobile}
                  alt="App Interface"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>

              {/* <div className="absolute -right-12 mt-16 ml-16 inline-block bg-red-500 backdrop-blur-lg px-6 py-2 rounded-full">
                <span className="text-white">✨ Available Now</span>
              </div> */}

              {/* Floating Download Stats */}
              <div className="absolute -right-20 bottom-1/4 bg-red-500 backdrop-blur-lg p-4 rounded-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <Download className="w-6 h-6 text-white " />
                  <div className="text-white">
                    <p className="text-sm opacity-80">Downloads</p>
                    <p className="text-xl font-bold">50K+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;