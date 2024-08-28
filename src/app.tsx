import './index.css'
import HomePage from './components/HomePage';
import * as React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
   <HomePage />
  </React.StrictMode>
);
