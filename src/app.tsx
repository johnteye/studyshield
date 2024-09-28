import './index.css';
import React, { createContext, useState, ReactNode } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './components/HomePage';
import Toolbar from './components/Toolbar';
import Hero from './components/Hero';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Welcome from './components/Welcome';
import CreateSpace from './components/CreateSpace';
import Discovery from './components/Discovery';
import Profile from './components/Profile';
import { createRoot } from "react-dom/client";

// Define the context type
interface BrowserViewContextType {
  url: string;
  setUrl: (url: string) => void;
}

// Create the context with a default value
export const BrowserViewContext = createContext<BrowserViewContextType>({
  url: '',
  setUrl: () => {}
});

// Define the props for BrowserViewProvider
interface BrowserViewProviderProps {
  children: ReactNode;
}

// Define the provider
export const BrowserViewProvider: React.FC<BrowserViewProviderProps> = ({ children }) => {
  const [url, setUrl] = useState<string>('');
  return (
    <BrowserViewContext.Provider value={{ url, setUrl }}>
      {children}
    </BrowserViewContext.Provider>
  );
};

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserViewProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/createSpace" element={<CreateSpace />} />
          <Route path="/homepage" element={<Toolbar />} />
          <Route path="/discovery" element={<Discovery />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </BrowserViewProvider>
  </React.StrictMode>
);


// import './index.css'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import Hero from './components/Hero';
// import Login from './components/Login'
// import SignUp from './components/SignUp'
// import Welcome from './components/Welcome';
// import CreateSpace from './components/CreateSpace'
// import Discovery from './components/Discovery';
// import Profile from './components/Profile';

// import * as React from "react";
// import { createRoot } from "react-dom/client";

// const root = createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <React.StrictMode>
//  <Router>
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp/>} />
//         <Route path='/welcome' element={<Welcome/>} />
//         <Route path="/createSpace" element={<CreateSpace/>}/>
//         <Route path="/homepage" element={<HomePage/>} />
//         <Route path="/discovery" element={<Discovery/>}/>
//         <Route path="/profile" element={<Profile/>}/>
        
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );
