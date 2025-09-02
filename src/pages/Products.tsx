import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import ProductShowcase from '../components/ProductShowcase';

const Products: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div>
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Our Products & Solutions</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of high-quality products designed to meet 
            your agricultural, industrial, and commercial needs.
          </p>
        </div>
      </div>
      
      <Navigation 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <ProductShowcase 
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default Products;
