import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 border-b border-gray-800 pb-6">
          <ul className="flex flex-col md:flex-row gap-2 md:gap-6 items-center text-sm">
            <li><a href="#" className="hover:underline">Products & Services</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Sitemap</a></li>
            <li><a href="#" className="hover:underline">Download Brochure</a></li>
          </ul>
          <div className="flex justify-center md:justify-end gap-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Facebook className="h-6 w-6" /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter className="h-6 w-6" /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Linkedin className="h-6 w-6" /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Instagram className="h-6 w-6" /></a>
          </div>
        </div>
        <div className="text-center text-gray-400 text-xs mt-6">© {new Date().getFullYear()} Garg Enterprise. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;