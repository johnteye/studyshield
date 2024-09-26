import React, { useState, useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { PiStarLight } from "react-icons/pi";
import { IoMdAdd } from "react-icons/io";
import { RiTimerFill } from "react-icons/ri";
import profile from "../assets/profile_icon.svg";
import { MdOutlineExpandMore } from "react-icons/md";
import options from "../assets/more.svg";
import discovery from "../assets/discovery.svg";
import { useNavigate } from 'react-router-dom';
import HomePage from "./HomePage";

const Toolbar = () => {

  const navigate = useNavigate()
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const urlInputRef = useRef<HTMLInputElement>(null);
  const [inputUrl, setInputUrl] = useState('');

  const handleUrl = () => {
    const url = urlInputRef.current?.value;
    if (url) {
      setInputUrl(url);
    }

  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleUrl();
    }
  };


  return (
    <div>
      <div className="h-16 w-screen bg-toolbar flex items-center justify-around">
        <div className="flex items-center lg:space-x-7">
          <button id="back-button">
            <FaAngleLeft className="text-xl" />
          </button>
          <button id="forward-button">
            <FaAngleRight className="text-xl" />
          </button>
          <button id="reload-button" className="text-3xl mb-1">
            &#x21bb;
          </button>
          <button id="home-button" onClick={() => handleNavigate('/homepage')}>
            <TiHome className="text-blue text-2xl" />
          </button>
          <div className="h-10 w-40 bg-white rounded-full flex items-center px-4">
            <div className="h-5 w-5 bg-green-500 rounded-full"></div>

            <p className="font-semibold text-lg mx-auto text-gray-600 font-sans">
              Frontend
            </p>
          </div>
        </div>
        <div className="flex space-x-7 ml-7">
          <form className="relative flex" onSubmit={(e) => e.preventDefault()}>
            <input
              ref={urlInputRef}
              onKeyDown={handleKeyDown}
              id="url-input"
              className="h-10 w-96 bg-white rounded-full flex items-center px-4 justify-between placeholder:text-gray-600 placeholder:font-light placeholder:font-sans"
              placeholder="New Tab"
            />
            <PiStarLight className="absolute right-3 top-3" />
          </form>
          <button
            id="new-window-button"
            className="h-10 w-10 rounded-full bg-white flex items-center justify-center"
          >
            <IoMdAdd className="text-2xl text-gray-400" />
          </button>
          <div className="h-10 w-24 rounded-full bg-white flex items-center justify-center">
            <RiTimerFill className="text-blue " />
            <p className="ml-3 font-semibold">11:20</p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-7 border-l-2 h-6 w-64 border-border-blue ">
          <img className="h-6 cursor-pointer" src={discovery} onClick={() => handleNavigate('/discovery')} />
          <img className="h-5" src={options} />
          <div className="bg-gray-100 rounded-full w-20 flex items-center justify-between pr-2 ">
            <img className="h-10 cursor-pointer" src={profile}  onClick={() => handleNavigate('/profile')}/>
            <MdOutlineExpandMore className="text-xl text-blue" />
          </div>
        </div>
      </div>

      {/* <webview id='webview' src={inputUrl} className="" /> */}
     
    </div>
  );
};    

export default Toolbar;
