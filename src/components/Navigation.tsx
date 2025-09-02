import React from 'react';
import { Filter, Search } from 'lucide-react';

interface NavigationProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery
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
    <nav className="bg-white border-b shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-4 gap-4">
          {/* Search Bar - full width on mobile, wider on desktop */}
          <div className="w-full lg:max-w-lg lg:flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search products..."
              />
            </div>
          </div>
          
          {/* Filter by Category and Select - stacked on mobile, inline on desktop */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-3">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700 font-medium">Filter by Category:</span>
            </div>
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border-2 border-gray-200 rounded-lg px-4 py-2.5 pr-10 text-sm font-medium text-gray-700 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:min-w-[220px] shadow-sm transition-all duration-200"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;