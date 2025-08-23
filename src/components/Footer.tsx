import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 border-b border-gray-800 pb-6">
          <ul className="flex flex-col md:flex-row gap-2 md:gap-6 items-center text-sm">
            <li><Link to="/about" className="hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About Us</Link></li>
            <li><Link to="/products" className="hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Products & Services</Link></li>
            <li><Link to="/contact" className="hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact Us</Link></li>
            <li><a href="https://www.indiamart.com/garg-industries-india/sitenavigation.html" target="_blank" rel="noopener noreferrer" className="hover:underline">Sitemap</a></li>
            <li><a href="#" className="hover:underline">Download Brochure</a></li>
          </ul>
          <div className="flex justify-center md:justify-end gap-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Facebook className="h-6 w-6" /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter className="h-6 w-6" /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Linkedin className="h-6 w-6" /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Instagram className="h-6 w-6" /></a>
          </div>
        </div>
        <div className="text-center text-gray-400 text-xs mt-6">© {new Date().getFullYear()} Garg Industries. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;