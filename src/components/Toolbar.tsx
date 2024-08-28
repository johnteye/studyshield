import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { TiHome } from 'react-icons/ti';
import { PiStarLight } from 'react-icons/pi';
import { IoMdAdd } from 'react-icons/io';
import { RiTimerFill } from 'react-icons/ri';
import profile from '../assets/profile_icon.svg';
import { MdOutlineExpandMore } from 'react-icons/md';
import options from '../assets/more.svg';
import discovery from '../assets/discovery.svg';

const Toolbar = () => {
  return (
    <div>
      <div className="h-16 w-screen bg-toolbar flex items-center justify-around">
        <div className="flex items-center lg:space-x-7">
          <FaAngleLeft className="text-xl" />
          <FaAngleRight className="text-xl" />
          <TiHome className="text-blue text-2xl" />
          <div className="h-10 w-40 bg-white rounded-full flex items-center px-4">
            <div className="h-5 w-5 bg-green-500 rounded-full"></div>

            <p className="font-semibold text-lg mx-auto text-gray-600 font-sans">
              Frontend
            </p>
          </div>
        </div>
        <div className="flex space-x-7 ml-7">
          <div className="h-10 w-96 bg-white rounded-full flex items-center px-4 justify-between">
            <p className="font-light text-gray-600 font-sans">New Tab</p>
            <PiStarLight className="" />
          </div>
          <button className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
            <IoMdAdd className="text-2xl text-gray-400" />
          </button>
          <div className="h-10 w-24 rounded-full bg-white flex items-center justify-center">
            <RiTimerFill className="text-blue " />
            <p className="ml-3 font-semibold">11:20</p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-7 border-l-2 h-6 w-64 border-border-blue ">
          <img className="h-6" src={discovery} />
          <img className="h-5" src={options} />
          <div className="bg-gray-100 rounded-full w-20 flex items-center justify-between pr-2 ">
            <img className="h-10" src={profile} />
            <MdOutlineExpandMore className="text-xl text-blue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
