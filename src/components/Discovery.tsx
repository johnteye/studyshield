import React from 'react';
import Habits from '../assets/habits.svg';
import Einstein from '../assets/Einstein.svg';
import Chem from '../assets/Chem.svg';
import Diet from '../assets/Diet.svg';

const Discovery = () => {
  return (
    <div className="h-full ">
      <div className="h-full bg-custom-gray  flex p-40 flex-col items-center justify-center">
        <div className="">
          <div className="flex items-center mb-16">
            <p className="text-white text-3xl font-sans font-semibold w-2/5">
              Discover
            </p>
            <input
              className="h-14 rounded-xl w-3/5 pl-9"
              type="text"
              placeholder="Search"
            />
          </div>
          <p className="text-white text-3xl font-sans font-semibold w-full mb-16">
            Trending
          </p>
          <div className="flex space-x-10 ">
            <div className="w-1/2 ">
              <div className="top">
                <img src={Einstein} alt="" />
              </div>
              <div className="flex items-center w-full mt-4 space-x-6">
                <div className="">
                  <img src={Chem} alt="" />
                </div>
                <div className="">
                  <img className="" src={Diet} alt="" />
                </div>
              </div>
            </div>
            <div className="w-1/2 ">
              <img src={Habits} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discovery;
