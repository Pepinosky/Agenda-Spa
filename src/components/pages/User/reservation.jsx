import React from 'react'

const Reservas = () => {
  let Services = [
    {id: "1", nombre:"servicio1"},
    {id: "2", nombre:"servicio2"},
    {id: "3", nombre:"servicio3"}
    
     ];

    return (
    <div className='w-full h-full py-44 px-4'>
        <div className=' mx-auto  '>         
          <div className='md:flex  flex-col items-center content-center justify-center p-1'>
            <h1 className=' md:text-4xl sm:text-3xl text-2xl font-bold  '>RESERVA DE HORAS</h1>
            <h6 className='md:text-3xl sm:text-2xl font-light '>Selecciona segun tus preferencias</h6>
                  <form className='flex flex-col items-center'>
                  <div className='flex content-center items-center justify-center w-full m-6 '>
                      <label className='' > 
                        <span className=''>Dia</span>
                        <br />
                        <input className='mt-4 form-input' type="date" />
                        
                        </label>
                        <label className='ml-40 items-center' >
                          <span>Servicio</span>
                          <br />
                        <select className=' text-center mt-4  w-96'>
                            {
                              Services.map(service => (
                                <option className='' key={service.id} value={service.id}>{service.nombre}</option>

                              )) 
                            }
                        </select>
                      </label>
                  </div>
                  <div className='flex flex-col text-xl font-medium text-center'>
                        <h3 className='pt-4 '> Selecciona el horario de tu preferencia</h3>
                         <label className='p-2'> <input type="radio" className='form-radio checked:bg-lime-900' value='1' /> 08:00 </label> 
                         <label className='p-2'> <input type="radio" className='form-radio checked:bg-lime-900' value='2' /> 09:00 </label> 
                         <label className='p-2'> <input type="radio" className='form-radio checked:bg-lime-900' value='3'/> 10:00</label> 
                         <button className=' text-center border-2 border-black rounded-md hover:bg-black hover:text-lime-500 hover:p-4 duration-500 mt-12'> asdasd</button>
                  </div>
                 </form>           
            
          </div>
        </div>
      </div>

    );
}
export default Reservas;

