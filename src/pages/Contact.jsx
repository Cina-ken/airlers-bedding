import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Add reset from useForm
  } = useForm();

  const [flashMessage, setFlashMessage] = useState(null); // State for flash message

  const onSubmit = (data) => {
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setFlashMessage({ type: 'success', text: 'Message sent successfully!' });
        reset();
        setTimeout(() => setFlashMessage(null), 3000);
      })
      .catch((error) => {
        console.error('Error:', error);
        setFlashMessage({ type: 'error', text: 'Failed to send message. Please try again.' });
        setTimeout(() => setFlashMessage(null), 3000);
      });
  };

  return (
    <div className="font-opensans py-16 bg-gray-100">
      {/* Header */}
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gray-800">
          Contact Airler's Bedding
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          We’re here to assist you with your bedding needs. Reach out to us for inquiries, orders, or
          partnership opportunities.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: Contact Info + Image */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-playfair font-semibold text-gray-800 mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-700 mb-2">
                <strong>Address:</strong> Lekki Palm City Estate, Lagos Island, Nigeria
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> +234 123 456 7890
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:info@airlersbedding.com" className="text-gray-800 hover:underline">
                  info@airlersbedding.com
                </a>
              </p>
              <p className="text-gray-700">
                <strong>WhatsApp:</strong>{' '}
                <a
                  href="https://wa.me/2349066529224"
                  className="text-green-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with Us
                </a>
              </p>
            </div>

            {/* Image */}
            <div>
              <img
                src={images.contactImage || 'https://via.placeholder.com/400x300'}
                alt="Airler's Bedding Showroom"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">
                Our showroom at Lekki Palm City Estate
              </p>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6 relative">
            <h2 className="text-2xl font-playfair font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h2>

            {/* Flash Message */}
            {flashMessage && (
              <div
                className={`absolute top-0 left-0 right-0 mx-4 mt-[-3rem] p-3 rounded-lg shadow-md text-white text-center transition-opacity duration-300 ${
                  flashMessage.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                }`}
              >
                {flashMessage.text}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  placeholder="Enter your name"
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                    errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-gray-800'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email address',
                    },
                  })}
                  placeholder="Enter your email"
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-gray-800'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  {...register('message', { required: 'Message is required' })}
                  placeholder="How can we assist you today?"
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                    errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-gray-800'
                  }`}
                  rows="5"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-playfair font-semibold text-gray-800 mb-4">Visit Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            Stop by our showroom in Lekki Palm City Estate to experience our luxury bedding
            collections in person. We’re open Monday to Saturday, 9:00 AM - 5:00 PM.
          </p>
          {/* Map */}
          <div className="max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.693592777583!2d3.465750576018576!3d6.429420524258237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4c8b2e6b1f7%3A0xbec2f1d8b1b6e6e5!2sLekki%20Palm%20City%20Estate!5e0!3m2!1sen!2sng!4v1698765432100!5m2!1sen!2sng"
              className="w-full h-64 rounded-lg shadow-md"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;