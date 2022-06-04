import React from 'react'
import {Route, Routes } from "react-router-dom";
import Reservation from './components/pages/Reservation';
import Cancellation  from './components/pages/Cancellation';
import Status from './components/pages/Status';
import { StateMachineProvider, createStore } from "little-state-machine";
import NavBar from './components/layout/NavBar';

createStore({});
function App() {
  return (
    <>
    <StateMachineProvider>
    <NavBar /> 
    
    <Routes>
       <Route exact path="/" element={<Reservation />} />
       <Route path="/reservation" element={<Reservation />} />
      <Route path="/cancellation" element={<Cancellation />} />
      <Route path="/status" element={<Status />} />
     
    
  </Routes>
     
  </StateMachineProvider>
    </>
   );
}

export default App;
