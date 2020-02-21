import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';


export default function Router() {
  return (          
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="home" element={<HomePage />} />        
      </Routes>
    </BrowserRouter>    
  );
}
