import React from 'react';
import background from '../assets/background.png';
import logo from '../assets/UG.png'


const Login = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
        <div className="logo flex flex-row absolute top-7 left-8">
        <img className="h-5 mr-3" src={logo} />
        <h1 className="font-sans font-bold text-sm text-white">
          StudyShield
        </h1>
      </div>
      <div className="card h-4/5 w-2/5 bg-white shadow-2xl rounded-3xl flex flex-col items-center justify-center">
        <div className="welcome mb-10">
          <h2 className='font-sans text-2xl font-semibold text-custom-gray'>Welcome Back</h2>
        </div>
        <div className="login h-14 w-3/4 bg-card-blue rounded-full flex items-center">
       
          <div className="h-14 w-1/2 bg-blue rounded-full flex items-center justify-center text-white">
            <p className='font-sans'>
                <button>
                Login 
                </button>
               </p>
          </div>
          <p className='ml-20 font-sans'><button>SignUp</button>  </p> 
        </div>
        <div className="details w-3/4 rounded-3xl h-64 bg-card-blue mt-10 flex flex-col justify-center items-center">
        <h1 className='font-sans font-semibold text-xl mb-2 text-custom-gray mr-72'>Email</h1>
        <input className='h-12 rounded-full w-5/6' type="text" />
        <h1 className='font-sans font-semibold text-xl mb-2 text-custom-gray mr-60 mt-5'>Password</h1>
        <input className='h-12 rounded-full w-5/6 mb-5' type="text" />
        
        
        </div>
        <div className="buttons w-3/4 flex justify-between mt-20">
        <button className='bg-card-blue h-14 w-52 rounded-2xl font-sans font-semibold text-xl text-blue'> Guest</button>
        <button className='bg-blue h-14 w-52 rounded-2xl font-sans font-semibold text-xl text-white'> Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
