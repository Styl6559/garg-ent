import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import CompanyProfile from './components/CompanyProfile';
import ProductShowcase from './components/ProductShowcase';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <main>
        <CompanyProfile />
        <ProductShowcase 
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;