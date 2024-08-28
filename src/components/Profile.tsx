import React from 'react';
import Toolbar from './Toolbar';
import NewTabs from './NewTabs';
import { IoIosArrowForward } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";


const Profile = () => {
  return (
    <div className="h-screen">
      <Toolbar />
      <NewTabs />
      <div className="flex h-[83%]">
        <div className="h-full w-[351px] border rounded-[40px] shadow-even mt-5 px-4 pt-12">
          <div className="flex bg-blue  rounded-[20px] h-[58px] items-center px-6 justify-between">
            <RiAccountCircleLine className='text-white text-4xl font-thin'/>
            <p className='text-3xl  text-white'>Profile</p>
            <IoIosArrowForward className='text-white text-3xl'/>
          </div>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
};

export default Profile;
