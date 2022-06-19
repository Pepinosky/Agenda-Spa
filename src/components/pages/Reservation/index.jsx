import React, { useEffect, useState } from 'react'
import Preferences from './components/preferences'
import Form from './components/form'
import Schedules from './components/schedules'
import Title from '../../layout/Title'
import SubTitle from '../../layout/SubTitle'

export default function Reservation() {
    const [isOpen, setIsOpen] = useState(false)
    const [visibility, setVisibility] = useState('invisible')
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

    return (
        <div className="h-full w-full py-44 px-4">
            <div className=" mx-auto  ">
                <div className=" flex flex-col  content-center items-center justify-center p-1  text-center sm:text-left md:flex">
                    <Title text={'RESERVA DE HORAS'} />
                    <SubTitle text={'Selecciona segun tus preferencias'} />
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
            </div>
        </div>
    )
}
