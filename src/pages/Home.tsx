import React from 'react';
import BannerSection from '../components/BannerSection';
import RatingsReviews from '../components/RatingsReviews';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <BannerSection />
      
      {/* Main Content */}
      <main>
        {/* Welcome Section */}
        <section className="bg-white py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Welcome to Garg Industries
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Driving progress through durable, high-performance and sustainable solutions
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="bg-white py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-10">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Our Products
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Discover our comprehensive range of high-quality industrial and agricultural products
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { title: 'Shade Net', img: '/1.jpeg' },
                { title: 'Plastic Sheet', img: '/11.jpeg' },
                { title: 'Agriculture Net', img: '/15.jpeg' },
                { title: 'Safety And Agro Shade Net', img: '/18.jpeg' },
                { title: 'Plastic Granules', img: '/19.jpeg' },
                { title: 'HDPE Monofilament Granules', img: '/20.jpeg' },
                { title: 'LDPE Tarpaulin', img: '/21.jpeg' },
                { title: 'HDPE Tarpaulin', img: '/22.jpeg' }
              ].map((product, idx) => (
                <a
                  key={idx}
                  href="/products"
                  className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                  title={product.title}
                >
                  <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-base group-hover:text-blue-600 transition-colors duration-200">
                      {product.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="bg-white py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <RatingsReviews />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
