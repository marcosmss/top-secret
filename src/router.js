import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Login from './components/login'
import Home from './components/home'


export default function Router() {
  return (          
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>    
  );
}
