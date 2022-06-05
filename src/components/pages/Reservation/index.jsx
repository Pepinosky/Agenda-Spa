import React, { useEffect, useState, Fragment } from 'react'
import Preferences from './components/preferences';
import Form from './components/form';

const Reservation = () => {
  
  
  
  
    


  
      
  return (
    <div className='w-full h-full py-44 px-4'>
        <div className=' mx-auto  '>         
          <div className='md:flex  flex-col items-center content-center justify-center p-1 text-center sm:text-left'>
            <h1 className=' md:text-4xl sm:text-3xl text-2xl font-bold  '>RESERVA DE HORAS</h1>
            <h6 className='md:text-3xl sm:text-2xl font-light '>Selecciona segun tus preferencias</h6>
            <Preferences/>
            <Form />
                


                          
                
          </div>
        </div>
      </div>

    );
}
export default Reservation;