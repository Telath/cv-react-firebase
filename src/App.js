import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={ <Home /> } />
          <Route path='/contact' exact element={ <Contact /> } /> 
          <Route path='*' element={ <NotFound /> } /> 
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;