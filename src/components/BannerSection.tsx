import React from 'react';


const BannerSection: React.FC = () => (
  <section className="w-full h-[100vh] sm:h-[80vh] md:min-h-screen bg-cover bg-center bg-no-repeat flex items-end justify-center md:justify-start relative" style={{backgroundImage: "url('/banner.jpg')", marginTop: 0, paddingTop: 0}}>
    <div className="absolute inset-0 bg-black bg-opacity-40 sm:bg-opacity-30"></div>
    <div className="relative z-10 text-center md:text-left p-4 pb-12 sm:p-6 sm:pb-16 md:p-8 lg:p-16 max-w-full md:max-w-4xl w-full md:w-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-lg leading-tight break-words">
        Manufacturer of High Performance Technical Textiles
      </h2>
    </div>
  </section>
);

export default BannerSection;
