import React, { useState } from 'react';
import downArrow from '../assets/down-arrow.png'
import downArrowWhite from '../assets/down-arrow-white.png'


const DropdownType = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left w-full md:w-[200px]">
      <button
        onClick={toggleDropdown}
        className="flex flex-row items-center justify-between w-full px-4 py-2 bg-gray-400 md:bg-tertiary  text-white rounded-lg shadow-md  "
      >
        <p > Filter by Type </p>
        <img
        src={downArrow}
        alt="Down arrow mobile"
        className="w-4 h-4 md:hidden"  
      />
      <img
        src={downArrowWhite}
        alt="Down arrow desktop"
        className="hidden md:w-6 md:h-6 md:block"  
      />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <ul className="py-1">
            <li>
              <a href="#option1" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Yoga
              </a>
            </li>
            <li>
              <a href="#option2" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Meditation
              </a>
            </li>
            <li>
              <a href="#option3" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Detox
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownType;
