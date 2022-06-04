import React, { useEffect, useState } from 'react'
import axios from "axios"


import { useForm } from "react-hook-form";



const Reservation = () => {
  
  const [visibility,setVisibility]=useState("invisible");
  const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluaXN0cmFkb3JAZW1haWwuY29tIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE2NTQzMDc0NzksImV4cCI6MTY1NDMxMTA3OX0.4zHxNaQXD8Gyg0jGXY9yBag8_k0uyvcBzi2qHgPoZsM"
  const [services, setServices] = useState([])
  const [reservations, setReservations] = useState([])
  const [date, setDate] = useState("")
  const [srvName, setSvrName] = useState("")
  const { register, handleSubmit } = useForm();
  
    
  useEffect(() => {
      axios.get("http://localhost:8000/servicios", {
        headers: {
          Authorization: token
        }
      }).then(res => {
        setServices(res.data)
      })
    }, [token])

    useEffect(() => { 
      axios.get("http://localhost:8000/reservas", {
        headers: {
          Authorization: token
        },
        params:{
          nombre_servicio: srvName,
          fecha: date
        }
      }).then(res => {
        setReservations(res.data)
      })
    }, [token, srvName, date])

    const onSubmit = async (data) => {
  
      console.log(data)
      
  }
      
  return (
    <div className='w-full h-full py-44 px-4'>
        <div className=' mx-auto  '>         
          <div className='md:flex  flex-col items-center content-center justify-center p-1 text-center sm:text-left'>
            <h1 className=' md:text-4xl sm:text-3xl text-2xl font-bold  '>RESERVA DE HORAS</h1>
            <h6 className='md:text-3xl sm:text-2xl font-light '>Selecciona segun tus preferencias</h6>
                  <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)} >
                  <div className='flex content-center items-center justify-center w-full m-6  '>
                      <label className='' > 
                        <span className=''>Dia</span>
                        <br />
                        <input className='mt-4 form-input cursor-pointer' type="date" name='fecha' 
                        onChange={(event)=> {setDate(event.target.value)}} 
                        />
                        
                        </label>
                      
                        <label className='ml-40 items-center' >
                          <span>Servicio</span>
                          <br />
                        <select className='form-select text-center mt-4  w-96 cursor-pointer' name='servicio' 
                        onChange={(event)=> [setVisibility("visible"), setSvrName(event.target.value)]}
                       
                        >
                            {                              
                              services.map(service => (
                                <option  className='' key={service.id} value={service.nombre }>{service.nombre}</option>
                              ))                            
                            }
                        </select>
                      </label>
                  </div>

                  <div className={`flex flex-col text-xl font-medium text-center ${visibility } ` }  >
                        <h3 className='pt-4 '> Selecciona el horario de tu preferencia</h3>
                        {                       
                         reservations.map( reservation   => (                                             
                              <label className='p-2 cursor-pointer '> 
                              <input type="radio" key={reservation.id} className='form-radio checked:bg-lime-900 ' name="hora" 
                              value={reservation.id}
                              
                              /> 
                              {reservation.hora} 
                              disponible:{reservation.cupos}   
                              
                              </label>                    
                          ))
                        }                                           
                         <button type='submit' 

                         className=' text-center border-2 border-black rounded-md hover:bg-black hover:text-lime-500 hover:p-4 duration-500 mt-12'>
                         Realizar reserva</button>                        
                  </div>
                        
                  <div className={`flex flex-col  items-center border-solid border-2 py-6 bg-slate-400 w-[300px] mx-auto `}>
                    <div className="flex flex-col ">
                    <label htmlFor="email" className="font-bold mx-16">
                        Email
                        <input 
                        type="email" id="email"  className="border-solid border-2 px-2 py-1"  
                        {...register('email')} 
                        />
                    </label>
                    </div>

                    <div className="flex flex-col ">
                    <label htmlFor="nombre" className="font-bold mx-16">
                        nombre
                        <input type="text" id="nombre" className="border-solid border-2 px-2 py-1" 
                         {...register('nombre')}/>
                    </label>
                    </div>
                    <div className="flex flex-col ">
                    <label htmlFor="apellido" className="font-bold mx-16">
                        apellido
                        <input type="text" id="apellido" className="border-solid border-2 px-2 py-1" 
                         {...register('apellido')}/>
                    </label>
                    </div>
                    <div className="flex flex-col ">
                    <label htmlFor="telefono" className="font-bold mx-16">
                        telefono
                        <input type="text" id="telefono" className="border-solid border-2 px-2 py-1" 
                         {...register('telefono')}/>
                    </label>
                    </div>
                    <button type='submit' className=' w-24 text-center border-2 border-black rounded-md hover:bg-black hover:text-lime-500 hover:p-4 duration-500 mt-10 '  > confirmar reserva</button>
                   
                </div>
                 </form>           
                
          </div>
        </div>
      </div>

    );
}
export default Reservation;

