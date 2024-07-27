import React, { useState } from 'react';
import DropdownType from './DropdownType';
import SearchBar from './SearchBar';
import DropdownDate from './DropdownDate';
import Cards from './Cards';

const Searchables = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="p-4 flex flex-col items-center gap-4 md:flex-col justify-between">
      <div className="flex flex-col md:flex-row gap-4 w-full justify-between">
        <div className='flex flex-col  md:flex-row gap-6 '>
        <DropdownDate />
        <DropdownType />

        </div>
        
        <SearchBar onSearch={handleSearch} />
      </div>
      
       
      <Cards searchQuery={searchQuery} />
    </div>
  );
};

export default Searchables;
