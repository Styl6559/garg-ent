import React from 'react';
import ContactUsForm from '../components/ContactUsForm';
// import ContactSection from '../components/ContactSection';

const Contact: React.FC = () => {
  return (
    <div>
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Contact Us</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Get in touch with us for all your product needs. We're here to help you 
            find the perfect solution for your requirements.
          </p>
        </div>
      </div>
      
      <ContactUsForm />
      {/* <ContactSection /> */}
    </div>
  );
};

export default Contact;
