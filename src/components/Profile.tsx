import React, { useState } from 'react';
import NewTabs from './NewTabs';
import { IoIosArrowForward } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";
import { GrHistory } from "react-icons/gr";
import PerfIcon from '../assets/perf_icon.svg'
import { FaRegStar } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import DoughnutChartComponent from './DoughnutChartComponent';
import History from './History';
import Favorites from './Favorites';
import Whitelist from './Whitelist';
import ProfileInfo from './ProfileInfo';

const Profile = () => {
  const [activeSection, setActiveSection] = useState('Profile');

  const navItems = [
    { id: 'Profile', icon: <RiAccountCircleLine className="text-4xl font-thin" />, title: 'Profile', component: <ProfileInfo /> },
    { id: 'Performance', icon: <img src={PerfIcon} alt="Performance" />, title: 'Performance', component: <DoughnutChartComponent /> },
    { id: 'History', icon: <GrHistory className="text-3xl font-thin" />, title: 'History', component: <History /> },
    { id: 'Favorites', icon: <FaRegStar className="text-4xl font-thin" />, title: 'Favorites', component: <Favorites /> },
    { id: 'Whitelist', icon: <CiViewList className="text-4xl font-thin" />, title: 'Whitelist', component: <Whitelist /> },
  ];

  return (
    <div className="h-full w-screen">
    
      <NewTabs />
      <div className="flex h-[87%] mt-5">
        <div className="h-full w-[351px] border rounded-[40px] shadow-even mt-5 px-4 pt-12 space-y-20">
          {navItems.map(item => (
            <div
              key={item.id}
              className={`flex rounded-[20px] h-[58px] items-center px-6 justify-between ${activeSection === item.id ? 'bg-blue' : 'hover:bg-slate-200'}`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.icon}
              <p className={`text-3xl ${activeSection === item.id ? 'text-white' : 'text-black'}`}>{item.title}</p>
              <IoIosArrowForward className={`text-3xl ${activeSection === item.id ? 'text-white' : 'text-black rotate-90'}`} />
            </div>
          ))}
        </div>

        <div className="content flex flex-col items-center justify-center w-full h-full">
          {navItems.find(item => item.id === activeSection)?.component}
        </div>
      </div>
    </div>
  );
};

export default Profile;
