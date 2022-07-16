import Button from '../../../layout/Button'
import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import axios from 'axios'
// import { Input } from '../../../common/Input'
import SubTitle from '../../../layout/SubTitle'

export default function Confirmation({ isOpen, setIsOpen, reservation }) {
    const [isClosed, setIsClosed] = useState('visible')
    const handleClose = () => {
        setIsOpen('false')
    }

    return (
        <>
            <div
                className={`absolute top-0 right-0 bottom-0 left-0 z-10 bg-transparent py-12 transition duration-150 ease-in-out ${
                    isOpen === false ? 'hidden' : 'visible'
                }`}
            >
                <div
                    role="alert"
                    class="container mx-auto w-11/12 max-w-lg md:w-2/3"
                >
                    <div class="relative rounded border border-gray-400 bg-white py-8 px-5 shadow-md md:px-10">
                        <div class="mb-3 flex w-full justify-start text-gray-600"></div>
                        <h1 class="font-lg mb-4 font-bold leading-tight tracking-normal text-gray-800">
                            Detalles de la reserva
                        </h1>
                        <div>
                            <ul>
                                <SubTitle
                                    text={`numero de Reserva: ${reservation.id}`}
                                />
                                <li> fecha: {reservation.fecha}</li>
                                <li> hora: {reservation.hora}</li>
                                <li> servicio: {reservation.servicio}</li>
                                <li>
                                    {' '}
                                    nombre paciente: {reservation.nombre}{' '}
                                    {reservation.apellido}
                                </li>
                            </ul>
                        </div>
                        <div class="flex w-full items-center justify-start">
                            <button
                                class="rounded bg-green-700 px-8 py-2 text-sm text-white transition duration-150 ease-in-out  focus:outline-none focus:ring-2  focus:ring-offset-2"
                                onClick={() => console.log('submit')}
                                type="submit"
                            >
                                Cancelar
                            </button>
                            <button
                                class="m-6 rounded-lg border border-transparent px-12 py-3 text-center text-sm font-medium text-green-700 hover:bg-green-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:bg-green-600 dark:hover:text-white dark:focus:ring-green-800"
                                onClick={() => setIsOpen(false)}
                                type="button"
                            >
                                Cerrar
                            </button>
                        </div>
                        <button
                            class="absolute top-0 right-0 mt-4 mr-5 cursor-pointer rounded text-gray-400 transition duration-150 ease-in-out hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
                            onClick={() => setIsOpen(false)}
                            aria-label="close modal"
                            type="button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-x"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                stroke-width="2.5"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
