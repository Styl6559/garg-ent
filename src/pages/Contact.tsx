import React from 'react';
import ContactUsForm from '../components/ContactUsForm';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Contact Form Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
