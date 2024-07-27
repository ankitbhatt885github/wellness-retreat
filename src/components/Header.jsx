import React from 'react';

const Header = () => {
  return (
    <div className="hidden md:block bg-primary mt-4 mx-3 border border-gray-200 rounded-lg shadow-lg overflow-hidden  ">
     
      <img
        className="w-full h-60 object-cover mb-4 rounded-lg"
        src="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg"  
        alt="Header Image"
      />
      <h2 className="text-2xl font-bold text-gray-800 px-2 mb-2">Discover Your Inner Peace</h2>
      <p className="text-gray-500 px-2 mb-4">
        Join us for a series of wellness retreats designed to help you find tranquility and rejuvenation.
      </p>
       
    </div>
  );
};

export default Header;
