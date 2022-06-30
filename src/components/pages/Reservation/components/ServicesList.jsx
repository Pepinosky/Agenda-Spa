import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Select } from '../../../common/Select'
const ServicesList = ({ register, setVisibility, visibility }) => {
    const [services, setServices] = useState([])

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
