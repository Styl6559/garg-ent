import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Brand and Social */}
          <div className="space-y-6">
            <div>
              <img src="/logo.png" alt="Garg Enterprise" className="h-16 w-16 rounded-full object-cover mb-4" />
            </div>
            <div className="flex gap-4">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                <MessageCircle className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
            <div>
              <a 
                href="https://www.indiamart.com/garg-industries-india/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <h3 className="text-lg font-semibold mb-3 hover:text-blue-400 transition-colors cursor-pointer">
                  Post Requirement
                </h3>
                <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors">
                  Need custom textile solutions? Share your requirements and get personalized quotes.
                </p>
              </a>
            </div>
          </div>

          {/* Middle Section - General Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">General Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/products" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Product Solutions
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section - Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-gray-400">info@gargenterprise.com</p>
                  <p className="text-gray-400">sales@gargenterprise.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-400" />
                <div>
                  <p className="text-gray-400">+91 9876543210</p>
                  <p className="text-gray-400">+91 20-2567-8901</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-400 mt-1" />
                <div>
                  <p className="text-gray-400">Plot No. 45, Industrial Area Phase-II</p>
                  <p className="text-gray-400">Pune, Maharashtra - 411019</p>
                  <p className="text-gray-400">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Garg Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;