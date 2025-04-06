import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white py-4 fixed w-full top-0 z-10 font-opensans">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Brand/Logo */}
        <Link to="/" className="text-xl font-playfair font-bold">
          Airler's Bedding
        </Link>

        {/* Hamburger Icon (Visible on Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu Links (Hidden on Mobile, Visible on Desktop) */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
          <li><Link to="/listings" className="hover:text-gray-300">Listings</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          <li><Link to="/videos" className="hover:text-gray-300">Videos</Link></li>
        </ul>
      </div>

      {/* Mobile Menu (Visible when toggled) */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><Link to="/" onClick={toggleMenu} className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu} className="hover:text-gray-300">About</Link></li>
            <li><Link to="/services" onClick={toggleMenu} className="hover:text-gray-300">Services</Link></li>
            <li><Link to="/listings" onClick={toggleMenu} className="hover:text-gray-300">Listings</Link></li>
            <li><Link to="/contact" onClick={toggleMenu} className="hover:text-gray-300">Contact</Link></li>
            <li><Link to="/videos" onClick={toggleMenu} className="hover:text-gray-300">Videos</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;