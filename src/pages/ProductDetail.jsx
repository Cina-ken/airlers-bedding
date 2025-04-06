import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find((p) => p.id === parseInt(id)); // Find the product by ID

  if (!product) {
    return (
      <div className="font-opensans py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-playfair font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600">Sorry, we couldn’t find that product.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-opensans py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
          <img
            src={product.image || 'https://via.placeholder.com/400x300'}
            alt={product.name}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h1 className="text-3xl font-playfair font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-bold text-gray-800 mb-6">{product.price}</p>
          <Link
            to="/contact" // Navigate to /contact page
            className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;