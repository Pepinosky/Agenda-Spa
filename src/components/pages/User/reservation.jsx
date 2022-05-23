import React from 'react'

const Reservas = () => {

    return (
    <div className='w-full h-full py-44 px-4'>
        <div className=' mx-auto  '>         
          <div className='flex  flex-col items-center content-center justify-center p-1'>
            <h1 className=' md:text-4xl sm:text-3xl text-2xl font-bold  '>RESERVA DE HORAS</h1>
            <h6 className='md:text-4xl sm:text-2xl '>Selecciona segun tus preferencias</h6>
                <div className='flex  justify-center w-full m-6'>
                <label > 
                <span>Dia</span>
                <input className='' type="date" />
                
                </label>
                <label >
                    <span>Servicio</span>
                <select className='px-20 '>

                </select>
                </label>
                </div>

            
          </div>
        </div>
      </div>

    );
}
export default Reservas;

