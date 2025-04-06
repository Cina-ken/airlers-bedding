// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Listings from './pages/Listings';
import Contact from './pages/Contact';
import Videos from './pages/Videos';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
        </Layout>
      
    </Router>
  );
}

export default App;