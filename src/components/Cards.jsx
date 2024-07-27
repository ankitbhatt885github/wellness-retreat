import React, { useState } from 'react';
import Card from './Card';
import data from '../data/data';

const ITEMS_PER_PAGE = 3;

const Cards = ({ searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Filter data based on search query on the basis of title
  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);


  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

 
  const currentItems = filteredData.slice(startIndex, endIndex);

 
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  return (
    <div>
      <div className="w-full font-bold bg-white p-4 flex flex-col gap-4 md:flex-row md:gap-4 md:flex-nowrap md:w-[1420px]">
        {currentItems.map(item => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            price={item.price}
            location={item.location}
            date={item.date}
          />
        ))}
      </div>
      <div className="flex flex-row items-center justify-center gap-6">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-tertiary text-white rounded-2xl md:rounded-lg shadow-md    "
        >
          Prev
        </button>
         
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-tertiary text-white rounded-2xl md:rounded-lg shadow-md    "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Cards;
