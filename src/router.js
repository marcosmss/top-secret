import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import Projectpage from './pages/projectPage';
import AdminBasePage from './pages/adminBasePage';

export default function Router() {
  return (          
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="admin" element={<AdminBasePage />}>          
          <Route path="home" element={<HomePage />} />        
          <Route path="projects" element={<Projectpage />} />                
        </Route>
      </Routes>
    </BrowserRouter>    
  );
}
