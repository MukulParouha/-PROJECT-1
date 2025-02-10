// import React from 'react'
// import bgvideo from '../assets/videos/snba-bg-video.mp4';

// const Hero = () => {
//   return (
//     <div className='relative'>
//         <video 
//           autoPlay
//           loop
//           muted
//           className='h-full w-full mt-16' // This ensures the video covers the entire screen
//         >
//             <source src={bgvideo} type="video/mp4" />
//         </video>
//     </div>
//   )
// }

// export default Hero;

import React from 'react';
import bgvideo from '../assets/videos/Webvideo.mp4';  // Import the video

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover" 
        style={{ margin: 0, padding: 0 }}
      >
        <source src={bgvideo} type="video/mp4"/>
      </video>
    </div>
  );
};

export default HeroSection;
