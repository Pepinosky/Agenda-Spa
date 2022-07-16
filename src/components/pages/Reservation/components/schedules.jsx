import axios from 'axios'
import React, { useEffect, useState, Fragment } from 'react'
import SubTitle from '../../../layout/SubTitle'
import Button from '../../../layout/Button'

import { Input } from '../../../common/Input'

export default function Schedules({
    isOpen,
    setIsOpen,
    visibility,
    setVisibility,
    setValue,
    fecha,
    servicio,
    register,
}) {
    const [reservations, setReservations] = useState([])
    const [id, setId] = useState()
    const handleCancel = () => {
        setVisibility('hidden')
    }

    useEffect(() => {
        axios
            .get('https://app-apirest2.herokuapp.com/reserva2', {
                params: {
                    nombre_servicio: servicio,
                    fecha: fecha,
                },
            })
            .then((res) => {
                console.log(fecha)
                console.log(servicio)
                setReservations(res.data.reserva)
            })
    }, [fecha, servicio])

    useEffect(() => {
        axios
            .get('https://app-apirest2.herokuapp.com/reserva2', {
                params: {
                    nombre_servicio: servicio,
                    fecha: fecha,
                },
            })
            .then((res) => {
                console.log(fecha)
                console.log(servicio)
                setReservations(res.data.reserva)
            })
    }, [])
    const handleClick = () => {
        // axios
        //     .get('https://app-apirest2.herokuapp.com/reservaCreada')
        //     .then((res) => {

        // })
        // setId(Math.floor(100000 + Math.random() * 900000))
        // setValue('id', parseInt(id))
        // setValue('numero_reserva', id)
        setIsOpen(true)
    }

    return (
        <>
            <div
                className={`mt-2 flex flex-col space-y-2 text-center text-xl font-medium ${visibility} `}
            >
                <SubTitle text={'Selecciona el horario de tu preferencia'} />

                {reservations.map((reservation, index) => (
                    <div key={index}>
                        <Input
                            type={'radio'}
                            labelClass={'cursor-pointer p-2'}
                            label={reservation.hora}
                            name={'hora'}
                            inputClass={'form-radio checked:bg-lime-900  '}
                            value={reservation.hora}
                            register={register}
                        />
                    </div>
                ))}

                <Button
                    text={'Realizar reserva'}
                    type={'button'}
                    className={'text-xl'}
                    onClick={handleClick}
                />
                <Button
                    text={'cancelar busqueda'}
                    type={'button'}
                    className={'text-xl'}
                    onClick={handleCancel}
                />
            </div>
        </>
    )
}
