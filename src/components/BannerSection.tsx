import React from 'react';


const BannerSection: React.FC = () => (
  <section className="w-full min-h-screen bg-cover bg-center flex items-end justify-start relative" style={{backgroundImage: "url('/banner.jpg')", marginTop: 0, paddingTop: 0}}>
    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
    <div className="relative z-10 text-left p-8 lg:p-16">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg leading-tight mb-8">Manufacturer of High Performance Technical Textiles</h2>
      <a
        href="/contact"
        className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow transition-colors"
        style={{zIndex: 2}}
      >
        Post Requirement
      </a>
    </div>
  </section>
);

export default BannerSection;
