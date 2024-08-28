import './index.css'; 


import * as React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
   <h1 className='text-red-800 text-sm'>Hello react</h1>
   <p className='text-5xl'>Test</p>
  </React.StrictMode>
);
