import React from 'react';
import { Eye, Heart, Share2 } from 'lucide-react';

interface ProductShowcaseProps {
  searchQuery: string;
  selectedCategory: string;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ searchQuery, selectedCategory }) => {
  const products = [
    {
      id: 1,
      name: 'Industrial Motor Pump',
      price: '₹15,000 - ₹25,000',
      image: 'https://images.pexels.com/photos/9489659/pexels-photo-9489659.jpeg',
      category: 'industrial',
      description: 'Heavy duty industrial motor pump for commercial applications',
      moq: '10 Piece',
      rating: 4.3
    },
    {
      id: 2,
      name: 'CNC Machine Parts',
      price: '₹8,500 - ₹12,000',
      image: 'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg',
      category: 'machinery',
      description: 'High precision CNC machine components and spare parts',
      moq: '50 Piece',
      rating: 4.5
    },
    {
      id: 3,
      name: 'Electrical Control Panel',
      price: '₹18,000 - ₹35,000',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg',
      category: 'electrical',
      description: 'Custom electrical control panels for industrial automation',
      moq: '5 Piece',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Hydraulic Cylinder',
      price: '₹12,000 - ₹20,000',
      image: 'https://images.pexels.com/photos/6077386/pexels-photo-6077386.jpeg',
      category: 'industrial',
      description: 'Heavy duty hydraulic cylinders for construction equipment',
      moq: '15 Piece',
      rating: 4.2
    },
    {
      id: 5,
      name: 'Auto Spare Parts',
      price: '₹2,500 - ₹8,000',
      image: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg',
      category: 'automotive',
      description: 'Genuine automotive spare parts and accessories',
      moq: '25 Piece',
      rating: 4.4
    },
    {
      id: 6,
      name: 'Chemical Processing Equipment',
      price: '₹45,000 - ₹75,000',
      image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg',
      category: 'chemicals',
      description: 'Stainless steel chemical processing and mixing equipment',
      moq: '2 Piece',
      rating: 4.6
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Products</h2>
            <p className="text-gray-600">
              Showing {filteredProducts.length} products
              {selectedCategory !== 'all' && (
                <span className="ml-1 text-blue-600">
                  in {selectedCategory} category
                </span>
              )}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white">
              <option>Sort by Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                    <Share2 className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                    ⭐ {product.rating}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="text-blue-600 font-semibold">
                    {product.price}
                  </div>
                  <div className="text-gray-500 text-sm">
                    MOQ: {product.moq}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium">
                    Get Quote
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Eye className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg transition-colors font-medium">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;