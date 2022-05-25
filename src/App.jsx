import React from 'react'
import {Switch, Route} from 'wouter'
import Reservation from './components/pages/User/reservation';
import NotFound from './components/pages/NotFound';
import NavBar from './components/layout/NavBar';

function App() {
  return (
    
   <div className="flex justify-center min-h-screen bg-white text-black ">
    <NavBar /> 
    <Switch >
       <Route path="/reservation" component={Reservation} />
       <Route component={NotFound} />
     </Switch>
   </div>
  );
}

export default App;
