import React from 'react';
import { Filter } from 'lucide-react';

interface NavigationProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory
}) => {
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'shade-net', name: 'Shade Net' },
    { id: 'plastic-sheet', name: 'Plastic Sheet' },
    { id: 'agriculture-net', name: 'Agriculture Net' },
    { id: 'safety-agro-shade-net', name: 'Safety And Agro Shade Net' },
    { id: 'plastic-granules', name: 'Plastic Granules' },
    { id: 'hdpe-monofilament-granules', name: 'Hdpe monofilament granules' },
    { id: 'ldpe-tarpaulin', name: 'LDPE Tarpaulin' },
    { id: 'hdpe-tarpaulin', name: 'HDPE Tarpaulin' }
  ];

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700 font-medium">Categories:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;