import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'

export default function Preferences({
    isOpen,
    setIsOpen,
    formData,
    setFormData,
    setVisibility,
    visibility,
}) {
    const [services, setServices] = useState([])

    const token =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluaXN0cmFkb3JAZW1haWwuY29tIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE2NTUxNjU2NTksImV4cCI6MTY1NTE4MDA1OX0.8e4fx19SnNm1XsDIP85T8L6iZ6OVZQ5qnO3G-khZQqM'

    useEffect(() => {
        axios
            .get('http://localhost:8000/servicios', {
                headers: { Authorization: token },
            })
            .then((res) => {
                setServices(res.data)
            })
    }, [token])

    return (
        <>
            <div className="m-6  flex w-full content-center items-center  justify-center ">
                <label>
                    <span className="">Dia</span>
                    <br />
                    <input
                        className="custom-date"
                        type="date"
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                fecha: event.target.value,
                            })
                        }
                    />
                </label>

                <label className="">
                    <span>Servicio</span>
                    <br />
                    <select
                        className="custom-select "
                        name="servicio"
                        onChange={(event) => {
                            setFormData({
                                ...formData,
                                servicio: event.target.value,
                            })
                            setVisibility('visible')
                        }}
                    >
                        <option>seleccionar</option>
                        {services.map((service) => (
                            <option
                                className=""
                                key={service.id}
                                value={service.nombre}
                            >
                                {service.nombre}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
        </>
    )
}
