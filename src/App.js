/* eslint-disable no-undef */
// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import AuthGoogle from './pages/AuthGoogle';

const App = () => {
  
  return (
    <>
    <div className="notificationDiv"></div>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={ <Home /> } />
          <Route path='/contact' exact element={ <Contact /> } /> 
          <Route path='/login' exact element={ <AuthGoogle /> } />
          <Route path='*' element={ <NotFound /> } /> 
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;