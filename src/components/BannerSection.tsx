import React from 'react';


const BannerSection: React.FC = () => (
  <section className="w-full h-72 md:h-96 bg-cover bg-center flex items-center justify-center relative" style={{backgroundImage: "url('/banner.jpg')"}}>
    <div className="bg-black bg-opacity-40 p-4 md:p-8 rounded-lg text-center w-full max-w-xl mx-auto">
      <h2 className="text-2xl md:text-5xl font-bold text-white mb-3 md:mb-4 drop-shadow-lg">Welcome to Garg Industries</h2>
      <p className="text-base md:text-2xl text-white font-medium drop-shadow mb-4 md:mb-6">Your trusted partner for industrial equipment and solutions</p>
      <a
        href="/contact"
        className="block w-full md:w-auto mx-auto bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg text-base md:text-lg font-semibold shadow transition-colors"
        style={{zIndex: 2}}
      >
        Post Requirement
      </a>
    </div>
  </section>
);

export default BannerSection;
