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
    getValues,
    fecha,
    servicio,
    register,
}) {
    const [reservations, setReservations] = useState([])

    useEffect(() => {
        axios
            .get('https://app-apirest2.herokuapp.com/reserva', {
                params: {
                    nombre_servicio: servicio,
                    fecha: fecha,
                },
            })
            .then((res) => {
                console.log(res.data.items.docs)
                setReservations(res.data.items.docs)
            })
    }, [fecha, servicio])

    return (
        <>
            <div
                className={`mt-2 flex flex-col space-y-2 text-center text-xl font-medium ${visibility} `}
            >
                <SubTitle text={'Selecciona el horario de tu preferencia'} />

                {reservations.map((reservation) => (
                    <label className="cursor-pointer p-2 " key={reservation.id}>
                        <Input
                            type={'radio'}
                            name={'hora'}
                            inputClass={'form-radio checked:bg-lime-900 '}
                            value={reservation.hora}
                            register={register}
                            key={reservation.id}
                        />
                        {reservation.hora}
                        disponible:{reservation.cupos}
                    </label>
                ))}

                <Button
                    text={'Realizar reserva'}
                    type={'submit'}
                    className={'text-xl'}
                    onClick={() => setIsOpen(true)}
                />
            </div>
        </>
    )
}
