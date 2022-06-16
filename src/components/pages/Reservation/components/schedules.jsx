import axios from 'axios'
import React, { useEffect, useState, Fragment, useContext } from 'react'
import Button from '../../../layout/Button'
import { RadioGroup } from '@headlessui/react'

export default function Schedules({
    isOpen,
    setIsOpen,
    visibility,
    setVisibility,
    formData,
    setFormData,
    fecha,
    servicio,
}) {
    const [reservations, setReservations] = useState([])
    const token =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluaXN0cmFkb3JAZW1haWwuY29tIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE2NTUxNjU2NTksImV4cCI6MTY1NTE4MDA1OX0.8e4fx19SnNm1XsDIP85T8L6iZ6OVZQ5qnO3G-khZQqM'
    useEffect(() => {
        axios
            .get('http://localhost:8000/reservas', {
                headers: {
                    Authorization: token,
                },
                params: {
                    nombre_servicio: servicio,
                    fecha: fecha,
                },
            })
            .then((res) => {
                setReservations(res.data)
            })
    }, [token, fecha, servicio])
    return (
        <>
            <div
                className={`flex flex-col text-center text-xl font-medium ${visibility} `}
            >
                <h3 className="pt-4 ">
                    {' '}
                    Selecciona el horario de tu preferencia
                </h3>

                {reservations.map((reservation) => (
                    <label className="cursor-pointer p-2 " key={reservation.id}>
                        <input
                            type="radio"
                            name="radio"
                            className="form-radio checked:bg-lime-900 "
                            value={reservation.id}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    hora: reservation.hora,
                                    numero_reserva: event.target.value,
                                })
                            }
                        />
                        {reservation.hora}
                        disponible:{reservation.cupos}
                    </label>
                ))}

                <Button
                    text={'Realizar reserva'}
                    type={'button'}
                    className={'text-xl'}
                    onClick={() => setIsOpen(true)}
                />
            </div>
        </>
    )
}
