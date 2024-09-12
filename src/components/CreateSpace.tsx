import React ,{ useState }  from 'react';
import background from '../assets/background.png';
import logo from '../assets/UG.png';
import profile from '../assets/profile_icon.svg'
import { MdOutlineExpandMore } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const CreateSpace = () => {
  const navigate = useNavigate()
  const handleHomePage = () =>{
    navigate('/homepage')
  }

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="logo flex flex-row absolute top-7 left-8">
        <img className="h-5 mr-3" src={logo} />
        <h1 className="font-sans font-bold text-sm text-white">StudyShield</h1>
      </div>
      <div className="bg-gray-100 rounded-full w-28 flex items-center justify-between pr-3 absolute top-4 right-9">
        <img className='' src={profile}/>
        <MdOutlineExpandMore className='text-3xl text-blue'/>
      </div>
      <div className="card h-4/5 w-2/5 bg-white shadow-2xl rounded-3xl flex flex-col items-center justify-center">
        <div className="welcome mb-10">
          <h2 className="font-sans text-2xl font-semibold text-custom-gray">
            Create Space
          </h2>
        </div>
        <input
          className="h-14 w-3/4 bg-card-blue rounded-full flex items-center justify-between px-6 text-xl"
          placeholder="Space name"
        />
        <div className="details w-3/4 rounded-3xl h-96 bg-card-blue mt-10 flex flex-col justify-center items-center">
          <h1 className="text-xl font-semibold text-gray-600 mb-6">
            Pomodoro
          </h1>
          <input className="rounded-2xl w-4/6 h-28 text-5xl font-semibold text-center text-gray-900 " type="text" placeholder='25:00' />
          <div className="flex bg-white w-3/6 h-14 justify-between items-center rounded-2xl mt-4 px-4">
            <p className='text-sm text-gray-500'>Short break</p>
            <input className="w-1/2 text-center text-lg" type="text" placeholder='5:00'/>
          </div>
          <div className="flex bg-white w-3/6 h-14 justify-between items-center rounded-2xl mt-4 px-4">
            <p className='text-sm text-gray-500'>Long break</p>
            <input className="w-1/2 text-center text-lg" type="text" placeholder='15:00'/>
          </div>
          
        </div>
        <div className="buttons w-3/4 flex justify-between mt-10">
          <button className="bg-card-blue h-14 w-52 rounded-2xl font-sans font-semibold text-xl text-blue">
            {' '}
            Cancel
          </button>
          <button className="bg-blue h-14 w-52 rounded-2xl font-sans font-semibold text-xl text-white" onClick={handleHomePage}>
            {' '}
            Create Space
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateSpace;
