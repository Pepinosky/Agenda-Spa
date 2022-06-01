import React, { useEffect, useState } from 'react'
import axios from "axios"



const Reservation = () => {
  
  const [visibility,setVisibility]=useState("invisible");
  const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluaXN0cmFkb3JAZW1haWwuY29tIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE2NTQwNTc5MDEsImV4cCI6MTY1NDA2MTUwMX0.J2czxo2Ql8VhCMsLg9_XVph_6nE4vTvFfE0Mcs_Elcc"
  const [services, setServices] = useState([])
  const [reservations, setReservations] = useState([])
  const [date, setDate] = useState("")
  const [srvName, setSvrName] = useState("")
    
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

    

  
    
   
  
  return (
    <div className='w-full h-full py-44 px-4'>
        <div className=' mx-auto  '>         
          <div className='md:flex  flex-col items-center content-center justify-center p-1 text-center sm:text-left'>
            <h1 className=' md:text-4xl sm:text-3xl text-2xl font-bold  '>RESERVA DE HORAS</h1>
            <h6 className='md:text-3xl sm:text-2xl font-light '>Selecciona segun tus preferencias</h6>
                  <form className='flex flex-col items-center' action='' method='POST'>
                  <div className='flex content-center items-center justify-center w-full m-6  '>
                      <label className='' > 
                        <span className=''>Dia</span>
                        <br />
                        <input className='mt-4 form-input cursor-pointer' type="date" name='fecha' onChange={(event)=> {setDate(event.target.value)}} />
                        
                        </label>
                      
                        <label className='ml-40 items-center' >
                          <span>Servicio</span>
                          <br />
                        <select className='form-select text-center mt-4  w-96 cursor-pointer' name='servicio' onChange={(event)=> [setVisibility("visible"), setSvrName(event.target.value)]}>
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
                            
                            
                              <label className='p-2 cursor-pointer '> <input type="radio" key={reservation.id} className='form-radio checked:bg-lime-900 checked:bg-lime-900 ' name="radio-btn" value={reservation.id} /> {reservation.hora} disponible:{reservation.cupos}   </label>
                              
                            
                            
                          
                          ))
                        }
                         
                         
                         <button className=' text-center border-2 border-black rounded-md hover:bg-black hover:text-lime-500 hover:p-4 duration-500 mt-12' type='submit' > Realizar reserva</button>
                  </div>
                 </form>           
            
          </div>
        </div>
      </div>

    );
}
export default Reservation;

