import React from 'react';
import { MapPin, Phone, Mail, Clock, Award, Users, Package } from 'lucide-react';

const ContactSection: React.FC = () => {
  const stats = [
    { icon: Award, label: 'Years of Experience', value: '15+' },
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Package, label: 'Products Delivered', value: '10K+' }
  ];

  return (
    <section className="w-full bg-blue-700 py-12">
      <div className="max-w-3xl mx-auto px-4 text-white">
        <h2 className="text-3xl font-bold mb-6">Get in touch with us</h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Reach Us</h3>
          <div className="flex items-start gap-3 mb-2">
            <MapPin className="h-6 w-6 text-yellow-300 mt-1" />
            <div>
              <div className="font-bold">Garg Enterprise</div>
              <div>Gat No 1605, Near Choudhary Dhaba, Chikhali, Pune-411062, Maharashtra, India</div>
              <a href="https://www.google.co.in/maps/dir//18.68769000,73.80333000" target="_blank" rel="noopener noreferrer" className="text-yellow-200 underline text-sm">Get Directions</a>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold">ASHISH GARG (CEO)</span>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <Phone className="h-5 w-5" />
            <span className="font-mono">View Mobile Number</span>
            <span className="bg-blue-900 px-2 py-0.5 rounded text-xs font-semibold">88% Call Response Rate</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-yellow-400 text-blue-900 font-bold px-4 py-2 rounded hover:bg-yellow-300 transition">Send SMS</button>
            <button className="bg-white text-blue-700 font-bold px-4 py-2 rounded hover:bg-blue-100 transition">Send Email</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;