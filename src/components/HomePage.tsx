import React from 'react';
import Toolbar from './Toolbar';
import sky from '../assets/sky.jpg';

const HomePage = () => {
  return (
    <div>
      <Toolbar />
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${sky})` }}>
        <div className="absolute flex flex-col text-white top-52 left-72">
          <p className="text-5xl font-extrabold mb-44">Favorites</p>
          <p className="text-5xl font-extrabold">Frequently Visited</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
