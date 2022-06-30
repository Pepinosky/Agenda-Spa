import React, { useState } from 'react'
import { Input } from '../../common/Input'
import Form from './components/form'
import Schedules from './components/schedules'
import Title from '../../layout/Title'
import Button from '../../layout/Button'
import SubTitle from '../../layout/SubTitle'
import ServicesList from './components/ServicesList'

import { useForm } from 'react-hook-form'

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
    const { register, handleSubmit, getValues, setValue } = useForm({
        defaultValues: {
            numero_reserva: '',
            hora: '',
            fecha: '',
            servicio: '',
            nombre: '',
            apellido: '',
            correo: '',
            telefono: '',
        },
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="h-full w-full py-44 px-4">
            <div className=" mx-auto  ">
                <div className=" flex flex-col  content-center items-center justify-center p-1  text-center sm:text-left md:flex">
                    <Title text={'RESERVA DE HORAS'} />
                    <SubTitle text={'Selecciona segun tus preferencias'} />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="m-6  flex w-full flex-col content-center items-center  justify-center ">
                            <Input
                                inputClass={'custom-date'}
                                type={'date'}
                                label={'Fecha'}
                                register={register}
                                name={'fecha'}
                            />
                            <ServicesList
                                register={register}
                                visibility={visibility}
                                setVisibility={setVisibility}
                            />
                            <Schedules
                                visibility={visibility}
                                setVisibility={setVisibility}
                                isOpen={isOpen}
                                getValues={getValues}
                                setIsOpen={setIsOpen}
                                servicio={getValues('servicio')}
                                fecha={getValues('fecha')}
                                register={register}
                            />
                            <Button
                                text={'buscar reserva'}
                                className={'flex'}
                            />
                            {/* <Form
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            formData={formData}
                            setFormData={setFormData}
                        /> */}
                            <input type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
