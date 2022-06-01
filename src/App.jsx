import React from 'react'
import {Route, Routes } from "react-router-dom";
import Reservation from './components/pages/User/reservation';
import Cancellation  from './components/pages/User/cancellation';
import Status from './components/pages/User/status';

import NavBar from './components/layout/NavBar';

function App() {
  return (
    <>
    <NavBar /> 
    
    <Routes>
       <Route path="/" element={<Reservation />} />
       <Route path="/reservation" element={<Reservation />} />
      <Route path="/cancellation" element={<Cancellation />} />
      <Route path="/status" element={<Status />} />
    
  </Routes>
     
    
    </>
   );
}

export default App;
