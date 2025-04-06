// src/pages/Listings.js
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Listings = () => {
  return (
    <div className="font-opensans py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-12 text-gray-800">
          Our Bedding Collection
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={product.image || 'https://via.placeholder.com/400x300'}
                alt={product.name}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h2 className="text-xl font-playfair font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-lg font-bold text-gray-800 mt-2">{product.price}</p>
                <Link
                  to={`/product/${product.id}`} // Use Link with "to" instead of "href"
                  className="mt-4 inline-block bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listings;