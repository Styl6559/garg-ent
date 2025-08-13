import React, { useState } from 'react';

import Header from './components/Header';
import BannerSection from './components/BannerSection';
import Navigation from './components/Navigation';
import ProductShowcase from './components/ProductShowcase';
import RatingsReviews from './components/RatingsReviews';
import ContactSection from './components/ContactSection';
import ContactUsForm from './components/ContactUsForm';
import Footer from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <BannerSection /> {/* Section 1 - Banner Image */}
      <main>
        <section>
          <Navigation 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <ProductShowcase 
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
          />
        </section>
        <ContactUsForm /> {/* Section 4 - Contact Us */}
        <RatingsReviews /> {/* Section 3 - Ratings and Reviews */}
        <ContactSection /> {/* Contact Details Banner */}
      </main>
      <Footer />
    </div>
  );
}

export default App;