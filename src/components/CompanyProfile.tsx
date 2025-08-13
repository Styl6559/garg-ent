import React from 'react';
import { MapPin, Phone, Mail, Globe, Star, CheckCircle, Award } from 'lucide-react';

const CompanyProfile: React.FC = () => {
  return (
    <section className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-start space-x-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                GE
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">Garg Industries</h1>
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div className="flex items-center space-x-4 text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">4.5</span>
                    <span className="text-sm">(245 Reviews)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="h-4 w-4 text-orange-500" />
                    <span className="text-sm">Verified Supplier</span>
                  </div>
                </div>
                <div className="flex items-start space-x-1 mb-3">
                  <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
                  <span className="text-gray-700">
                    Plot No. 45, Industrial Area Phase-II, Pune, Maharashtra - 411019
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Established in 2008, Garg Enterprise is a leading manufacturer and supplier of high-quality 
                  industrial equipment, machinery, and electrical components. With over 15 years of experience, 
                  we serve clients across India with reliable products and exceptional service.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-gray-900 font-medium">+91 98765 43210</p>
                  <p className="text-gray-600 text-sm">Call for Best Price</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-gray-900">info@gargenterprise.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-gray-900">www.gargenterprise.com</p>
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors font-medium">
                Send Inquiry
              </button>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition-colors font-medium">
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;