import React from 'react';
import images from '../assets/images';

const videos = [
  {
    id: 1,
    title: 'How to Choose the Perfect Bedding',
    description: 'Airler shares tips on selecting the right bedding for your needs.',
    src: images.ailerVideo1,
  },
  {
    id: 2,
    title: 'Luxury Bedding Installation Guide',
    description: 'Learn how to set up your Airler bedding for maximum comfort.',
    src: images.ailerVideo2,
  },
  {
    id: 3,
    title: 'Behind the Scenes: Crafting Quality',
    description: 'A look at how Airler’s bedding is made with care.',
    src: images.ailerVideo3,
  },
];

const Videos = () => {
  return (
    <div className="font-opensans py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-12 text-gray-800">
          Our Videos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <video
                controls
                width="100%"
                className="w-full rounded-t-lg" // Full width, no fixed height
                src={video.src}
                poster={images.bedding1} // Optional thumbnail
              >
                Your browser does not support the video tag.
              </video>
              <div className="p-4 flex-grow">
                <h2 className="text-xl font-playfair font-semibold text-gray-800 mb-2">
                  {video.title}
                </h2>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;