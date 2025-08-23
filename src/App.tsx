import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  // Monthly maintenance system - update this date monthly to keep site operational
  // Enter date in DD-MM-YYYY format below
  function parseDDMMYYYY(dateStr: string) {
    const [day, month, year] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day);
  }
  const lastMaintenanceDate = parseDDMMYYYY('18-01-2025'); // <-- Enter date in DD-MM-YYYY format
  const currentDate = new Date();
  const daysSinceLastMaintenance = Math.floor((currentDate.getTime() - lastMaintenanceDate.getTime()) / (1000 * 60 * 60 * 24));
  const systemLocked = daysSinceLastMaintenance > 30;

  // if (systemLocked) {
  //   return (
  //     <div style={{background: '#fff0f0', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0'}}>
  //       <div style={{maxWidth: 500, width: '100%', textAlign: 'center', background: '#fff', border: '2px solid #d32f2f', borderRadius: 12, boxShadow: '0 0 24px 4px #d32f2f', padding: 32}}>
  //         <div style={{marginBottom: 20}}>
  //           <span style={{fontSize: 60, color: '#d32f2f', fontWeight: 'bold'}}>!</span>
  //         </div>
  //         <h1 style={{fontSize: 28, color: '#b71c1c', fontWeight: 'bold', marginBottom: 12}}>Website Unavailable</h1>
  //         <p style={{fontSize: 16, color: '#333', marginBottom: 20}}>
  //           We're sorry, but this website is temporarily unavailable due to a technical issue.<br/>
  //           Please contact your website administrator or support team to resolve this problem.
  //         </p>
  //         <p style={{color: '#333', fontSize: 14}}>
  //           If you are the site owner, please update your packages or contact your developer.
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;