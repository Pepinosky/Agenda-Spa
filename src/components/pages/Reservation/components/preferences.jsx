
import React, { useEffect, useState, Fragment } from 'react'
import axios from "axios"
export default function Preferences({isOpen, setIsOpen}) {
    const [services, setServices] = useState([])
 
    const [date, setDate] = useState("")
    const [srvName, setSvrName] = useState("")
    const [reservations, setReservations] = useState([])
    const [visibility,setVisibility]=useState("invisible");
    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluaXN0cmFkb3JAZW1haWwuY29tIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE2NTQ0NzIxMDksImV4cCI6MTY1NDQ3NTcwOX0.IlyLjETTJ6FU5pPW_eRwr3j91nvP-tYb_azSyvkr7kg"
    
    
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

    return(
        <>
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
                         <button  
                         onClick={() => setIsOpen(true)}

                         className=' text-center border-2 border-black rounded-md hover:bg-black hover:text-lime-500 hover:p-4 duration-500 mt-12'>
                         Realizar reserva</button>                        
                  </div>
        
        </>
    )
}