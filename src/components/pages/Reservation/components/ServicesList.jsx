import useAxios from '../../../../hooks/useAxios'
import { useState } from 'react'
import useAxiosFunction from '../../../../hooks/useAxiosFunction'
import { useEffect } from 'react'
import axios from 'axios'
import { Select } from '../../../common/Select'
const ServicesList = ({ register, setVisibility, visibility }) => {
    const [services, setServices] = useState([])

    const token =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluaXN0cmFkb3JAZW1haWwuY29tIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE2NTUxNjU2NTksImV4cCI6MTY1NTE4MDA1OX0.8e4fx19SnNm1XsDIP85T8L6iZ6OVZQ5qnO3G-khZQqM'

    useEffect(() => {
        axios.get('https://app-apirest2.herokuapp.com/servicio').then((res) => {
            console.log(res.data.items.docs)
            setServices(res.data.items.docs)
        })
    }, [])
    return (
        <>
            <Select
                selectClass={'custom-select'}
                register={register}
                name={'servicio'}
                label={'Servicio'}
                options={services}
                onChange={(e) => {
                    setVisibility('visible')
                }}
            />
        </>
    )
}

export default ServicesList
