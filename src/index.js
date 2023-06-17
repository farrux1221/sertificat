import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Root';
import { BrowserRouter } from 'react-router-dom';
import { ActiveProvider } from './context/Active';
import { StoregProvider } from './context/Storeg';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <StoregProvider>
 <ActiveProvider>
      <Root/>
 </ActiveProvider>
 </StoregProvider>
  </BrowserRouter>
);


