import React from 'react';
import images from '../assets/images';

const Services = () => {
  return (
    <div className="font-opensans py-16 bg-gray-100">
      {/* Page Header */}
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-12 text-gray-800">
          Our Services
        </h1>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 space-y-12">
        {/* Service 1: Supply to Hotels */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center">
          <img
            src={images.hotelBedding}
            alt="Hotel Bedding"
            className="w-full md:w-1/3 h-64 object-cover rounded-lg mb-6 md:mb-0 md:mr-6"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-playfair font-semibold mb-4 text-gray-800">
              Supply to Hotels
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We provide premium bedding solutions tailored for hotels to ensure guest satisfaction.
              Our high-quality materials and elegant designs elevate the hospitality experience,
              making every stay memorable.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              Request a Quote
            </a>
          </div>
        </div>

        {/* Service 2: Supply to Hostels */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center">
          <img
            src={images.hostelBedding}
            alt="Hostel Bedding"
            className="w-full md:w-1/3 h-64 object-cover rounded-lg mb-6 md:mb-0 md:mr-6"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-playfair font-semibold mb-4 text-gray-800">
              Supply to Hostels
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our bedding options for hostels combine comfort and durability at competitive prices.
              Designed to withstand frequent use, they offer a cozy and stylish solution for shared
              accommodations.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              Request a Quote
            </a>
          </div>
        </div>

        {/* Service 3: Supply to Individuals */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center">
          <img
            src={images.aboutBedding}
            alt="Individual Bedding"
            className="w-full md:w-1/3 h-64 object-cover rounded-lg mb-6 md:mb-0 md:mr-6"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-playfair font-semibold mb-4 text-gray-800">
              Supply to Individuals
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Choose from our wide range of bedding sets to enhance your personal space. Whether you
              prefer minimalist elegance or bold luxury, we have the perfect set to transform your
              bedroom.
            </p>
            <a
              href="/listings"
              className="inline-block bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;