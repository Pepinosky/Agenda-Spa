import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoSpa from './logospaverde.png'
const links = [
    { name: 'Inicio', link: '/' },
    { name: 'Reservar', link: '/reservation' },
    { name: 'Cancelar', link: '/cancellation' },
]

const NavBar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="   fixed top-0 left-0 h-[90px] w-full">
            <div className="items-center justify-between bg-white py-4 px-7 shadow-md md:flex md:px-10  ">
                <div className="flex cursor-pointer items-center pb-5 font-Antic text-2xl text-lime-700">
                    <span className="mr-16 mb-0 flex pt-0 pb-0 ">
                        <img className="h-20" src={LogoSpa} alt="logo" />
                    </span>
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className="absolute right-8 top-6 cursor-pointer text-3xl md:hidden"
                >
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul
                    className={`absolute left-0 z-[-1] w-full bg-white pb-12 pl-9 pt-12 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center  md:pb-0 md:pt-0 md:pl-0 ${
                        open ? 'top-20 ' : 'top-[-490px]'
                    }`}
                >
                    {links.map((link) => (
                        <li
                            key={link.name}
                            className="my-7 text-xl md:my-0 md:ml-8 "
                        >
                            <Link
                                to={link.link}
                                className="ml-20 text-lime-700 duration-500 hover:rounded-md hover:bg-lime-900 hover:p-4  hover:text-white"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default NavBar
