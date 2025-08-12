import React from 'react';


const BannerSection: React.FC = () => (
  <section className="w-full h-72 md:h-96 bg-cover bg-center flex items-center justify-center" style={{backgroundImage: "url('/banner.PNG')"}}>
    <div className="bg-black bg-opacity-40 p-8 rounded-lg text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Welcome to Garg Enterprise</h2>
      <p className="text-lg md:text-2xl text-white font-medium drop-shadow">Your trusted partner for industrial equipment and solutions</p>
    </div>
  </section>
);

export default BannerSection;
