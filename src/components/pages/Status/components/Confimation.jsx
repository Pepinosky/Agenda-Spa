import Button from '../../../layout/Button'
import Input from '../../../layout/Input'
import SubTitle from '../../../layout/SubTitle'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function Confirmation({ visibility, numero_reserva }) {
    const [reservation, setReservation] = useState([])

    const token =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluaXN0cmFkb3JAZW1haWwuY29tIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE2NTUxNjU2NTksImV4cCI6MTY1NTE4MDA1OX0.8e4fx19SnNm1XsDIP85T8L6iZ6OVZQ5qnO3G-khZQqM'
    useEffect(() => {
        axios
            .get('http://localhost:8000/reserva_creada', {
                headers: {
                    Authorization: token,
                },
                params: {
                    numero_reserva: numero_reserva,
                },
            })
            .then((res) => {
                setReservation(res.data)
            })
    }, [token, numero_reserva])
    return (
        <>
            <div
                className={`flex flex-col text-center text-xl font-medium ${visibility} `}
            >
                <SubTitle text={'Reserva: '} />
                <Input labelText={' Fecha'} placeholder={reservation.fecha} />
                <Input labelText={' Hora'} placeholder={reservation.hora} />
                <Input
                    labelText={' Servicio'}
                    placeholder={reservation.servicio}
                />
            </div>
        </>
    )
}
