import React from 'react';
import background from '../assets/background.png';
import logo from '../assets/UG.png';
import focus from '../assets/focus.png';

const Welcome = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="logo flex flex-row absolute top-7 left-8">
        <img className="h-5 mr-3" src={logo} />
        <h1 className="font-sans font-bold text-sm text-white">StudyShield</h1>
      </div>
      <div className="focus absolute bottom-0 left-0">
        <img className="h-52" src={focus} alt="focus" />
      </div>

      <div className="writting space-y-10 flex flex-col items-center">
        <p className="text-gray-800 text-6xl font-bold font-sans">
          Hi, Matthew !
        </p>
        <p className="font-sans text-2xl font-light text-center text-gray-700 tracking-wide ">
          We’re setting up a <span className='text-blue font-bold'>Space</span> for you. Dive into our web browser to <br />{' '}
          stay focused while studying. Silence the distractions and master{' '}
          <br /> the art of focused break.
        </p>
        <p className='text-blue font-bold tracking-wide font-sans text-2xl'>Let’s transform your Productivity together !</p>
        <button className="bg-blue h-14 w-52 rounded-2xl font-sans font-semibold text-xl text-white">
          {' '}
          Continue
        </button>
      </div>
    </div>
  );
};

export default Welcome;
