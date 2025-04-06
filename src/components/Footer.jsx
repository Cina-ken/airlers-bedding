import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 font-opensans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-playfair font-semibold">Airler's Bedding</h3>
            <p className="mt-2 text-sm text-gray-300">
              Luxury bedding for hotels, hostels, and individuals in Lagos.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-md font-playfair font-medium">Contact Us</h4>
            <p className="mt-2 text-sm text-gray-300">Lekki Palm City Estate, Lagos Island, Nigeria</p>
            <p className="text-sm text-gray-300">Phone: +234 123 456 7890</p>
            <p className="text-sm text-gray-300">Email: info@airlersbedding.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-playfair font-medium">Quick Links</h4>
            <ul className="mt-2 flex flex-wrap gap-4 text-sm text-gray-300 md:flex-col md:gap-2">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/listings" className="hover:text-white">Listings</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/videos" className="hover:text-white">Videos</Link></li>
            </ul>
          </div>

          {/* Social Media and WhatsApp */}
          <div>
            <h4 className="text-md font-playfair font-medium">Connect With Us</h4>
            <div className="mt-2 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaFacebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaTwitter size={20} />
              </a>
              <a href="https://wa.me/2341234567890" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Airler's Bedding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;