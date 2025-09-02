import React from 'react';
import BannerSection from '../components/BannerSection';
import RatingsReviews from '../components/RatingsReviews';

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Products Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Our Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {[
                  { title: 'Shade Net', img: '/1.jpeg' },
                  { title: 'Plastic Sheet', img: '/11.jpeg' },
                  { title: 'Agriculture Net', img: '/15.jpeg' },
                  { title: 'Safety And Agro Shade Net', img: '/18.jpeg' },
                  { title: 'Plastic Granules', img: '/19.jpeg' },
                  { title: 'Hdpe monofilament granules', img: '/20.jpeg' },
                  { title: 'LDPE Tarpaulin', img: '/21.jpeg' },
                  { title: 'HDPE Tarpaulin', img: '/22.jpeg' }
                ].map((product, idx) => (
                  <a
                    key={idx}
                    href="/products"
                    className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
                    title={product.title}
                  >
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-40 object-cover mb-4"
                    />
                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-gray-900 text-lg">{product.title}</h3>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          <RatingsReviews />
        </div>
      </div>
    </div>
  );
};

export default Home;
