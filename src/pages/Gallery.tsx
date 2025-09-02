import React from 'react';
// ...existing code...

const Gallery: React.FC = () => {
  const galleryImages = [
    { id: 1, title: 'Manufacturing Facility', category: 'facility' },
    { id: 2, title: 'Production Line', category: 'production' },
    { id: 3, title: 'Quality Control Lab', category: 'quality' },
    { id: 4, title: 'Warehouse Storage', category: 'storage' },
    { id: 5, title: 'Shade Net Production', category: 'production' },
    { id: 6, title: 'Packaging Department', category: 'packaging' },
    { id: 7, title: 'Raw Material Storage', category: 'storage' },
    { id: 8, title: 'Finished Products', category: 'products' },
    { id: 9, title: 'Team Meeting', category: 'team' },
    { id: 10, title: 'Client Visit', category: 'clients' },
    { id: 11, title: 'Installation Site', category: 'installation' },
    { id: 12, title: 'Agriculture Application', category: 'application' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
     
      {/* Site Images Gallery */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-black-600 mb-8">Our Facilities & Operations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
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
                  <p className="text-sm text-gray-600">Image Placeholder</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{image.title}</h3>
                <p className="text-sm text-gray-600 capitalize">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

  // ...existing code...
    </div>
  );
};

export default Gallery;
