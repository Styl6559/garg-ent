import React from 'react';
import { Search, MapPin, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-700">IndiaMART</h1>
            </div>
          </div>
          
          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search for products, services & suppliers"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors">
              Post Requirement
            </button>
            <button className="text-blue-700 hover:text-blue-800 px-3 py-2 rounded-lg transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;