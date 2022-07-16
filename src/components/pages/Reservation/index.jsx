import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../common/Input'
import Confirmation from './components/Confirmation'
import Schedules from './components/schedules'
import Title from '../../layout/Title'
import Button from '../../layout/Button'
import SubTitle from '../../layout/SubTitle'
import ServicesList from './components/ServicesList'
// import { yupResolver } from '@hookform/resolvers/yup'
// import { object, string, number, date, InferType } from 'yup'
import { useForm } from 'react-hook-form'

// const schema = object({
//     hora: string().required(),
//     fecha: string().required('debes ingresar una fecha'),
//     servicio: string().required(),
//     nombre: string().required(),
//     apellido: string().required(),
//     correo: string().required(),
//     telefono: number().required(),
// }).required()

export default function Reservation() {
    const [isOpen, setIsOpen] = useState(false)
    const [id, setId] = useState('')
    const [fecha, setfecha] = useState('')
    const navigate = useNavigate()
    const [selected, setSelected] = useState('')
    const [visibility, setVisibility] = useState('hidden')
    const { register, handleSubmit, getValues, setValue } = useForm({
        defaultValues: {
            id: Math.floor(Math.random() * 1000000) + 1,
            numero_reserva: Math.floor(Math.random() * 1000000) + 1,
            hora: '',
            fecha: '',
            servicio: '',
            nombre: '',
            apellido: '',
            correo: '',
            telefono: '',
        },
    })

    const handleClick = () => {
        setVisibility('visible')
        setId(Number(Math.floor(Math.random() * 1000000) + 1))
    }

    const handleChange = (e) => {
        setValue('fecha', e.target.value)
        console.log(getValues('fecha'))
    }
    const handleSelect = (e) => {
        setValue('servicio', e.target.value)
        console.log(getValues('servicio'))
    }

    const onSubmit = (data) => {
        // let number = parseInt(id)
        // setValue('numero_reserva', number)
        // setValue('id', number)
        console.log(getValues('id'))
        console.log(getValues('numero_reserva'))

        axios
            .post('https://app-apirest2.herokuapp.com/reservaCreada', data)
            .then((res) => {
                console.log(res.data)
                alert('Reserva creada')
                navigate('/reservation', { replace: true })
            })
            .catch((error) => {
                console.log(error)
                console.log(data)
            })
    }

    return (
        <div className="h-full w-full py-44 px-4">
            <div className=" mx-auto  ">
                <div className=" flex flex-col  content-center items-center justify-center p-1  text-center sm:text-left md:flex">
                    <Title text={'RESERVA DE HORAS'} />
                    <SubTitle text={'Selecciona segun tus preferencias'} />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=" m-8 flex flex-wrap content-center justify-center  space-x-10 md:w-auto md:flex-wrap">
                            {visibility === 'hidden' ? (
                                <>
                                    <Input
                                        inputClass={'custom-date'}
                                        type={'date'}
                                        label={'Fecha'}
                                        register={register}
                                        name={'fecha'}
                                        onChange={handleChange}
                                    />
                                    <ServicesList
                                        register={register}
                                        visibility={visibility}
                                        setVisibility={setVisibility}
                                        selected={selected}
                                        setSelected={setSelected}
                                        // errors={errors}
                                        onChange={handleSelect}
                                    />
                                </>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className="flex justify-center">
                            {visibility === 'hidden' ? (
                                <Button
                                    text={'buscar reserva'}
                                    onClick={handleClick}
                                />
                            ) : (
                                <Schedules
                                    visibility={visibility}
                                    setVisibility={setVisibility}
                                    isOpen={isOpen}
                                    setIsOpen={setIsOpen}
                                    servicio={getValues('servicio')}
                                    fecha={getValues('fecha')}
                                    setValue={setValue}
                                    register={register}
                                />
                            )}
                        </div>

                        <Confirmation
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            getValues={getValues}
                            register={register}
                            handleSubmit={handleSubmit}
                            onsubmit={onSubmit}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}
