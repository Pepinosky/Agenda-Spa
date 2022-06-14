import React, { useEffect, useState } from 'react'
import Preferences from './components/preferences'
import Form from './components/form'
import Schedules from './components/schedules'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import Button from '../../layout/Button'
export default function Reservation() {
    const [isOpen, setIsOpen] = useState(false)
    const [visibility, setVisibility] = useState('invisible')
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        numero_reserva: '',
        hora: '',
        fecha: '',
        servicio: '',
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
    })
    const onSubmit = async (formData) => {
        console.log(formData)
        navigate('/')
    }

    return (
        <div className="h-full w-full py-44 px-4">
            <div className=" mx-auto  ">
                <form action="">
                    <div className=" flex-col  content-center items-center justify-center p-1   text-center sm:text-left md:flex">
                        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                            RESERVA DE HORAS
                        </h1>

                        <h6 className="font-light sm:text-2xl md:text-3xl">
                            Selecciona segun tus preferencias
                        </h6>

                        <Preferences
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            formData={formData}
                            setFormData={setFormData}
                            visibility={visibility}
                            setVisibility={setVisibility}
                        />
                        <Schedules
                            visibility={visibility}
                            setVisibility={setVisibility}
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            servicio={formData.servicio}
                            fecha={formData.fecha}
                            formData={formData}
                            setFormData={setFormData}
                        />
                        <Form
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            formData={formData}
                            setFormData={setFormData}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
