import React, { useEffect, useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from "react-hook-form";

export default function Form({isOpen, setIsOpen}){
   
    const { register, handleSubmit } = useForm();
    
    
    
    const onSubmit = async (data) => {
  
        console.log(data)
        
    }
    
    
    return(
    
    <>
    <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)} >
                  <Dialog open={isOpen} onClose={() => setIsOpen(false)}  className="relative z-10">  
                  <Dialog.Panel> 
                  
                  <div className={`flex flex-col  items-center border-solid border-2 py-6 bg-slate-400 w-5/6 mx-auto `}>
                  <Dialog.Title>Ingresa tus datos</Dialog.Title>
                  <button 
                  onClick={() => setIsOpen(false)} 
                  className="border-2"> 
                    X</button>

                    <div className="flex flex-col ">
                    <label htmlFor="email" className="font-bold mx-16">
                        Email
                        <input 
                        type="email" id="email"  
                        className="border-solid border-2 px-2 py-1"  
                        {...register('email')} 
                        />
                    </label>
                    </div>

                    <div className="flex flex-col ">
                    <label htmlFor="nombre" className="font-bold mx-16">
                        nombre
                        <input
                         type="text" 
                         id="nombre" 
                         className="border-solid border-2 px-2 py-1" 
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
                </Dialog.Panel>
                </Dialog>
                
                 </form>   
    
    </>
    )
}