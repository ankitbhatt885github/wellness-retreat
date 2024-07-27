import React from 'react';

const NavBar = () => {
  return (
    <nav   className="bg-tertiary py-3  ">
      <div style={{ marginLeft: '15px'  }} className="  container mx-auto flex items-center justify-center md:justify-start">
        <h1 className="text-white text-left  text-2xl">Wellness Retreats</h1>
      </div>
    </nav>
  );
};

export default NavBar;