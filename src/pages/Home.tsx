import React from 'react';
import BannerSection from '../components/BannerSection';

const Home: React.FC = () => {
  return (
    <div>
      <BannerSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to Our Manufacturing Company
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Leading manufacturer of high-quality products including shade nets, 
            agriculture nets, tarpaulins, and plastic granules. Serving customers with 
            excellence and innovation for over a decade.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-3xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold mb-2">Manufacturing Excellence</h3>
              <p className="text-gray-600">State-of-the-art manufacturing facilities ensuring top quality products.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-600 text-3xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly Solutions</h3>
              <p className="text-gray-600">Committed to sustainable and environmentally responsible manufacturing.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-purple-600 text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Customer Trust</h3>
              <p className="text-gray-600">Building lasting relationships through quality products and reliable service.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
