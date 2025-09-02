import React from 'react';

const Gallery: React.FC = () => {
  const galleryImages = [
    { id: 1, title: 'Manufacturing Facility', category: 'facility', image: '/1.jpeg' },
    { id: 2, title: 'Production Line', category: 'production', image: '/2.jpeg' },
    { id: 3, title: 'Quality Control Lab', category: 'quality', image: '/3.jpeg' },
    { id: 4, title: 'Warehouse Storage', category: 'storage', image: '/4.jpeg' },
    { id: 5, title: 'Shade Net Production', category: 'production', image: '/5.jpeg' },
    { id: 6, title: 'Packaging Department', category: 'packaging', image: '/6.jpeg' },
    { id: 7, title: 'Raw Material Storage', category: 'storage', image: '/7.jpeg' },
    { id: 8, title: 'Finished Products', category: 'products', image: '/8.jpeg' },
    { id: 9, title: 'Team Meeting', category: 'team', image: '/9.jpeg' },
    { id: 10, title: 'Client Visit', category: 'clients', image: '/10.jpeg' },
    { id: 11, title: 'Installation Site', category: 'installation', image: '/11.jpeg' },
    { id: 12, title: 'Agriculture Application', category: 'application', image: '/12.jpeg' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Site Images Gallery */}
        <section>
          <div className="text-center mb-10">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Gallery</h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Take a visual journey through our state-of-the-art facilities and operations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling!.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">
                        {image.category === 'facility' && '🏭'}
                        {image.category === 'production' && '⚙️'}
                        {image.category === 'quality' && '🔬'}
                        {image.category === 'storage' && '📦'}
                        {image.category === 'packaging' && '📦'}
                        {image.category === 'products' && '🛍️'}
                        {image.category === 'team' && '👥'}
                        {image.category === 'clients' && '🤝'}
                        {image.category === 'installation' && '🔧'}
                        {image.category === 'application' && '🌾'}
                      </div>
                      <p className="text-sm text-gray-600">Image Preview</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-base mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-600 capitalize">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
