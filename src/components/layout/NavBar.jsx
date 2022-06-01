import React, { useState } from 'react'
import { Link } from "react-router-dom"
import LogoSpa from './logospaverde.png'
const links = [
    {name: "Inicio", link:"/"},
    {name: "Reservar", link:"/reservation"},
    {name: "Cancelar", link:"/cancellation"},
    {name: "Estado de reserva", link:"/status"},
    
];


const NavBar = () => {
    
    const [open,setOpen]=useState(false);
 
    return (
     <div className="   w-full fixed top-0 left-0 h-[90px]">
        <div className='md:flex shadow-md items-center justify-between bg-white py-4 md:px-10 px-7  ' >
            
            <div className="text-lime-700 text-2xl pb-5 cursor-pointer flex items-center font-Antic">
             <span className="flex mr-16 mb-0 pt-0 pb-0 "> 
                 <img className="h-20" src={LogoSpa} alt="logo" />            
             </span>
           
            </div>
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 md:pt-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 pt-12  transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                {
                   links.map((link)=>(
                       <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 '>
                           <Link to={link.link} className='text-lime-700 hover:bg-lime-900 hover:text-white hover:p-4 hover:rounded-md duration-500  ml-20'>{link.name}</Link>
                       </li>
                   ) )  
                }
            </ul>

        </div>
     </div>
 );
};
export default NavBar;