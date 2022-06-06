import Form from './form';
import React, { useEffect, useState, Fragment } from 'react'
import axios from "axios"
import { useForm } from "react-hook-form";
export default function Preferences({isOpen, setIsOpen}) {
    const { register, getValues } = useForm();
    const [idReserva, setIdReserva] = useState("")
    const [services, setServices] = useState([])
    const [date, setDate] = useState("")
    const [srvName, setSvrName] = useState("")
    const [reservations, setReservations] = useState([])
    const [visibility,setVisibility]=useState("invisible");
    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluaXN0cmFkb3JAZW1haWwuY29tIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE2NTQ0ODY3OTEsImV4cCI6MTY1NDQ5MDM5MX0.Xa0FPRBX-te-7x0v_4mGM9YNDOG0UfCcA7KWq8MuWGc"
  
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
            fecha: date,        
          }
        }).then(res => {
          setReservations(res.data)
        })
      }, [token, srvName, date])

      const onClickButton = async (values) => {
        setIdReserva(values.id) 
        console.log(idReserva)
        
    }



    return(
        <>
        <div className='flex content-center items-center justify-center w-full m-6  '>
                      <label className='' > 
                        <span className=''>Dia</span>
                        <br />
                        <input className='mt-4 form-input cursor-pointer' type="date"   
                         {...register('fecha', { 
                          onChange: (event)=> setDate(event.target.value)
                        })}
                        />
                        
                        </label>
                      
                        <label className='ml-40 items-center' >
                          <span>Servicio</span>
                          <br />
                        <select className='form-select text-center mt-4  w-96 cursor-pointer' name='servicio' 
                    
                       {...register('servicio', { 
                          onChange: (event)=> [setVisibility("visible"), setSvrName(event.target.value)]
                        })}
                        >
                           <option>seleccionar</option>
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
                              <label className='p-2 cursor-pointer ' key={reservation.id}> 
                              <input type="radio"  className='form-radio checked:bg-lime-900 ' 
                              value={reservation.id}
                              {...register('id')}                             
                              /> 
                              {reservation.hora} 
                              disponible:{reservation.cupos}   
                              
                              </label>                    
                          ))
                        }                                           
                         <button  
                         onClick={()=> [onClickButton(getValues()), setIsOpen(true) ]}

                         className=' text-center border-2 border-black rounded-md hover:bg-black hover:text-lime-500 hover:p-4 duration-500 mt-12'>
                         Realizar reserva</button>                        
                  </div>
        
        </>
    )
}