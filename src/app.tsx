import './index.css'; 
import Profile from './components/Profile';

import * as React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
   <Profile />
  </React.StrictMode>
);
