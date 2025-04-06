import React from 'react';
import images from '../assets/images';

const About = () => {
  return (
    <div className="font-opensans py-16 bg-gray-100">
      {/* Header Section */}
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-12 text-gray-800">
          About Airler's Bedding
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 space-y-12">
        {/* Introduction with Image */}
        <section className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-playfair font-semibold mb-4 text-gray-800">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Based in the vibrant Lekki Palm City Estate, Lagos Island, Airler's Bedding is a premier
              luxury bedding agent dedicated to transforming sleep experiences. Since our inception,
              we’ve been committed to supplying high-quality bedding to hotels, hostels, and
              individuals across Nigeria, delivering over 200 bedding sets monthly with a focus on
              comfort, durability, and elegance.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our passion for excellence drives us to source the finest materials, ensuring every
              piece reflects our commitment to luxury and craftsmanship. Whether it’s a five-star
              hotel or a cozy home, Airler’s Bedding brings sophistication to every bedroom.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={images.aboutBedding}
              alt="Airler's Bedding Craftsmanship"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Our Mission */}
        <section>
          <h2 className="text-2xl font-playfair font-semibold mb-4 text-gray-800 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
            At Airler’s Bedding, our mission is to elevate sleep experiences by combining premium
            materials with exceptional service. We believe that quality sleep is the foundation of a
            good life, and we strive to provide bedding solutions that offer both comfort and style.
            From sustainable sourcing to meticulous design, we aim to set the standard for luxury
            bedding in Nigeria and beyond.
          </p>
        </section>

        {/* Our Values */}
        <section>
          <h2 className="text-2xl font-playfair font-semibold mb-6 text-gray-800 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-xl font-playfair font-medium mb-2 text-gray-800">Quality</h3>
              <p className="text-gray-600">
                We prioritize top-tier materials and craftsmanship in every product.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-playfair font-medium mb-2 text-gray-800">Elegance</h3>
              <p className="text-gray-600">
                Our designs blend timeless beauty with modern sophistication.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-playfair font-medium mb-2 text-gray-800">Service</h3>
              <p className="text-gray-600">
                Exceptional customer care is at the heart of everything we do.
              </p>
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section>
          <h2 className="text-2xl font-playfair font-semibold mb-4 text-gray-800 text-center">
            Our Journey
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
            Founded with a vision to redefine luxury bedding in Lagos, Airler’s Bedding has grown
            from a small operation to a trusted name in the industry. Over the years, we’ve built
            strong relationships with hoteliers, hostel managers, and individual clients, all while
            staying true to our promise of quality and elegance. Today, we’re proud to be a leading
            supplier, continually innovating to meet the evolving needs of our customers.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;