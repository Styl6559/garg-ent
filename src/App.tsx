import React, { useState } from 'react';

import Header from './components/Header';
import BannerSection from './components/BannerSection';
import Navigation from './components/Navigation';
import ProductShowcase from './components/ProductShowcase';
import RatingsReviews from './components/RatingsReviews';
import ContactSection from './components/ContactSection';
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
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <ProductShowcase 
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
          />
        </section>
        <RatingsReviews /> {/* Section 3 - Ratings and Reviews */}
        <ContactSection /> {/* Section 4 - Contact Details Banner */}
      </main>
      <Footer />
    </div>
  );
}

export default App;