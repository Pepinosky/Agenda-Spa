import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Select } from '../../../common/Select'
const ServicesList = ({
    register,
    setVisibility,
    visibility,
    selected,
    setSelected,
    errors,
    onChange,
}) => {
    const [services, setServices] = useState([])

    useEffect(() => {
        axios.get('https://app-apirest2.herokuapp.com/servicio').then((res) => {
            console.log(res.data.items.docs)
            setServices(res.data.items.docs)
        })
    }, [])
    // services.map((value) =>
    //     value.nombre === 'servicio1' ? console.log(value) : console.log('nada')
    // )

    return (
        <>
            <Select
                selectClass={'custom-select'}
                register={register}
                name={'servicio'}
                label={'Servicio'}
                options={services}
                onChange={onChange}
                // onChange={(e) => {
                //     setSelected(e.target.value)
                // }}
            />
        </>
    )
}

export default ServicesList
