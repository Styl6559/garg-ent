import React from 'react';
import { Eye, Heart, Share2 } from 'lucide-react';

interface ProductShowcaseProps {
  searchQuery: string;
  selectedCategory: string;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ searchQuery, selectedCategory }) => {
  const products = [
    // Shade Net
    {
      id: 1,
      name: 'Multicolored Virgin Agro Net',
      price: '₹2,000 - ₹8,000',
      image: '/1.jpeg',
      category: 'shade-net',
      description: 'Multicolored virgin agro net for agricultural shading.',
      moq: '10 Piece',
      rating: 4.3
    },
    {
      id: 2,
      name: 'HDPE Agro Shade Net',
      price: '₹2,200 - ₹8,500',
      image: '/2.jpeg',
      category: 'shade-net',
      description: 'HDPE agro shade net for crop protection and shade.',
      moq: '10 Piece',
      rating: 4.2
    },
    {
      id: 3,
      name: 'Greenhouse Shade Net',
      price: '₹2,100 - ₹7,900',
      image: '/3.jpeg',
      category: 'shade-net',
      description: 'Greenhouse shade net for controlled environment agriculture.',
      moq: '10 Piece',
      rating: 4.1
    },
    {
      id: 4,
      name: 'Black Agro Shade Net',
      price: '₹2,300 - ₹8,200',
      image: '/4.jpeg',
      category: 'shade-net',
      description: 'Black agro shade net for farming and agricultural applications.',
      moq: '10 Piece',
      rating: 4.0
    },
    {
      id: 5,
      name: 'White Agro Shade Net',
      price: '₹2,400 - ₹8,400',
      image: '/5.jpeg',
      category: 'shade-net',
      description: 'White agro shade net for versatile agricultural use.',
      moq: '10 Piece',
      rating: 4.1
    },
    {
      id: 6,
      name: 'Water Proof Agro Shade Net',
      price: '₹2,500 - ₹8,600',
      image: '/6.jpeg',
      category: 'shade-net',
      description: 'Water proof agro shade net for all-weather protection.',
      moq: '10 Piece',
      rating: 4.2
    },
    {
      id: 7,
      name: 'HDPE Outdoor Shade Net',
      price: '₹2,600 - ₹8,800',
      image: '/7.jpeg',
      category: 'shade-net',
      description: 'HDPE outdoor shade net for gardens and nurseries.',
      moq: '10 Piece',
      rating: 4.3
    },
    {
      id: 8,
      name: 'HDPE Nursery Shade Net',
      price: '₹2,700 - ₹9,000',
      image: '/8.jpeg',
      category: 'shade-net',
      description: 'HDPE nursery shade net for plant nurseries.',
      moq: '10 Piece',
      rating: 4.2
    },
    {
      id: 9,
      name: 'Green UV Virgin Agro Shade Net',
      price: '₹2,800 - ₹9,200',
      image: '/9.jpeg',
      category: 'shade-net',
      description: 'Green UV virgin agro shade net for UV protection.',
      moq: '10 Piece',
      rating: 4.4
    },
    {
      id: 10,
      name: '6 Gauge Semi Virgin Shade Net',
      price: '₹2,900 - ₹9,400',
      image: '/10.jpeg',
      category: 'shade-net',
      description: '6 gauge semi virgin shade net for heavy-duty agricultural use.',
      moq: '10 Piece',
      rating: 4.3
    },
    // Plastic Sheet
    {
      id: 11,
      name: 'LDPE White Sheet',
      price: '₹1,500 - ₹6,000',
      image: '/11.jpeg',
      category: 'plastic-sheet',
      description: 'White LDPE sheet for packaging and covering applications.',
      moq: '20 Piece',
      rating: 4.2
    },
    {
      id: 12,
      name: 'LDPE Packaging Sheet',
      price: '₹1,600 - ₹6,200',
      image: '/12.jpeg',
      category: 'plastic-sheet',
      description: 'LDPE packaging sheet for industrial packaging needs.',
      moq: '20 Piece',
      rating: 4.1
    },
    {
      id: 13,
      name: 'Waterproof Colored LDPE Sheet',
      price: '₹1,700 - ₹6,400',
      image: '/13.jpeg',
      category: 'plastic-sheet',
      description: 'Waterproof colored LDPE sheet for outdoor applications.',
      moq: '20 Piece',
      rating: 4.3
    },
    {
      id: 14,
      name: 'Blue LDPE Waterproof Sheet',
      price: '₹1,650 - ₹6,300',
      image: '/14.jpeg',
      category: 'plastic-sheet',
      description: 'Blue LDPE waterproof sheet for construction and agriculture.',
      moq: '20 Piece',
      rating: 4.2
    },
    // Agriculture Net
    {
      id: 15,
      name: 'Wrap Knitted Shade Net Agro Shed Net',
      price: '₹2,500 - ₹7,500',
      image: '/15.jpeg',
      category: 'agriculture-net',
      description: 'Wrap knitted shade net for agro shed and crop protection.',
      moq: '15 Piece',
      rating: 4.5
    },
    {
      id: 16,
      name: 'Mono Shade Net',
      price: '₹2,600 - ₹7,800',
      image: '/16.jpeg',
      category: 'agriculture-net',
      description: 'Mono shade net for nurseries and greenhouses.',
      moq: '15 Piece',
      rating: 4.4
    },
    {
      id: 17,
      name: 'MONO BY MONO SHADE NET',
      price: '₹2,700 - ₹8,000',
      image: '/17.jpeg',
      category: 'agriculture-net',
      description: 'High strength mono by mono shade net for agriculture.',
      moq: '15 Piece',
      rating: 4.3
    },
    // Safety And Agro Shade Net
    {
      id: 18,
      name: 'Multicolour Agro Shade Net',
      price: '₹3,000 - ₹9,000',
      image: '/18.jpeg',
      category: 'safety-agro-shade-net',
      description: 'Multicolour agro shade net for farms and greenhouses.',
      moq: '12 Piece',
      rating: 4.4
    },
    // Plastic Granules
    {
      id: 19,
      name: 'Reprocessed Hdpe blue monofilament granules',
      price: '₹1,200 - ₹5,000',
      image: '/19.jpeg',
      category: 'plastic-granules',
      description: 'Reprocessed HDPE blue monofilament granules for manufacturing.',
      moq: '50 Kg',
      rating: 4.1
    },
    // HDPE Monofilament Granules
    {
      id: 20,
      name: 'Reprocessed white Hdpe monofilament granules',
      price: '₹1,850 - ₹6,700',
      image: '/20.jpeg',
      category: 'hdpe-monofilament-granules',
      description: 'Reprocessed white HDPE monofilament granules for industrial applications.',
      moq: '40 Kg',
      rating: 4.2
    },
    // LDPE Tarpaulin
    {
      id: 21,
      name: 'Ldpe Tarpaulins Transparent',
      price: '₹2,200 - ₹8,500',
      image: '/21.jpeg',
      category: 'ldpe-tarpaulin',
      description: 'Transparent LDPE tarpaulins for waterproofing and covering.',
      moq: '10 Piece',
      rating: 4.2
    },
    // HDPE Tarpaulin
    {
      id: 22,
      name: 'LDPE VIRGIN Transparent LDPE Tarpaulin',
      price: '₹2,500 - ₹9,000',
      image: '/22.jpeg',
      category: 'hdpe-tarpaulin',
      description: 'LDPE VIRGIN transparent LDPE tarpaulin for industrial and agricultural use.',
      moq: '10 Piece',
      rating: 4.4
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