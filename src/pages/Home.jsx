import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import images from '../assets/images';

const Home = () => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  // Slider images array
  const sliderImages = [
    { src: images.homeHero, alt: 'Luxury Bedding 1' },
    { src: images.homeHero1, alt: 'Luxury Bedding 2' },
    { src: images.bedding10, alt: 'Luxury Bedding 3' },
    { src: images.homeHero3, alt: 'Luxury Bedding 4' },
    { src: images.aboutBedding, alt: 'Luxury Bedding 5' },
    { src: images.bedding11, alt: 'Luxury Bedding 6' },
  ];

  return (
    <div className="font-opensans">
      {/* Hero Section with Slider */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Welcome to Airler's Bedding
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Discover our premium bedding collection designed for luxury, comfort, and timeless elegance.
            Serving hotels, hostels, and individuals across Lagos.
          </p>
          <div className="max-w-4xl mx-auto">
            <Slider {...sliderSettings}>
              {sliderImages.map((image, index) => (
                <div key={index}>
                  <img
                    src={image.src || 'https://via.placeholder.com/800x400'}
                    alt={image.alt}
                    className="w-full h-auto rounded-lg shadow-md object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <Link
            to="/listings"
            className="mt-8 inline-block bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12">
            Why Choose Airler's Bedding?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-playfair font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                Crafted from the finest materials to ensure durability and unparalleled comfort.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-playfair font-semibold mb-4">Elegant Designs</h3>
              <p className="text-gray-600">
                Timeless styles that elevate any bedroom, from modern to classic.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-center font-playfair font-semibold mb-4">Trusted Supplier</h3>
              <p className="text-gray-600">
                Proudly supplying over 200 bedding sets monthly to hotels and individuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Image Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={images.homeHero || 'https://via.placeholder.com/800x400'}
              alt="Explore Our Luxury Collection"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
            <p className="text-center text-gray-600 mt-4 text-lg">
              Elevate your bedroom with our handcrafted bedding sets.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">
                "Airler's Bedding transformed our hotel rooms. The quality is exceptional, and our
                guests love the comfort!"
              </p>
              <p className="font-semibold">— Chika Okoro, Hotel Manager</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">
                "I’ve never slept better. The bedding is luxurious and worth every penny."
              </p>
              <p className="font-semibold">— Amina Yusuf, Homeowner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Elevate Your Sleep Experience
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Explore our exclusive collection or contact us for bulk orders tailored to your needs.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/listings"
              className="bg-white text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-200 transition duration-300"
            >
              Browse Collection
            </Link>
            <Link
              to="/contact"
              className="border border-white text-white py-3 px-6 rounded-lg hover:bg-white hover:text-gray-800 transition duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;