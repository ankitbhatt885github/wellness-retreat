 
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    
      <form onSubmit={handleSearch} className="flex w-full md:w-[350px] ">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search retreats by title"
        className="w-full px-4 py-2 border border-gray-300 md:bg-tertiary md:text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
    </form>

    
    
  );
};

export default SearchBar;
