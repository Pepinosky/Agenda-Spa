import Title from '../../layout/Title'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Success } from '../../common/Success'
import axios from 'axios'
// import Error from './components/Error'
// import Form from './components/Form'
import { Input } from '../../common/Input'
import Confirmation from './components/Confimation'
import Button from '../../layout/Button'
const Cancellation = () => {
    const [success, setSuccess] = useState(false)
    const [visibility, setVisibility] = useState('hidden')
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const [reservations, setReservations] = useState([])
    const [reservation, setReservation] = useState([])
    const { register, handleSubmit, getValues } = useForm()
    const handleClick = () => {
        axios
            .get('https://app-apirest2.herokuapp.com/reservaCreada/')
            .then((res) => {
                console.log(res.data.items.docs)
                setReservations(res.data.items.docs)
                //get specific reservation
                res.data.items.docs.map((value) =>
                    value.numero_reserva ===
                    parseInt(getValues('numero_reserva'))
                        ? setReservation(value)
                        : ''
                )
            })

        setIsOpen(true)
    }
    const onSubmit = (data) => {
        console.log(reservation._id)
        axios
            .delete(
                `https://app-apirest2.herokuapp.com/ReservaCreada/${reservation._id}`
            )

            .then((response) => {
                console.log('Delete successful', { response })
                setSuccess(true)
            })
            .catch((error) => {
                console.log(error.message)
                setSuccess(false)
            })
    }

    return (
        <>
            <div className="h-full w-full py-44 px-4">
                <div className="mx-auto">
                    <div className="flex-col  content-center items-center justify-center p-1 text-center sm:text-left md:flex">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex  flex-col content-center items-center justify-center">
                                <Title text={'Cancelar Reserva'} />
                                <Input
                                    label={'ingresa el numero de tu reserva'}
                                    labelClass={' flex flex-col '}
                                    inputClass={'default-input'}
                                    type={'number'}
                                    register={register}
                                    name={'numero_reserva'}
                                />
                                <Button
                                    text={'Cancelar Reserva'}
                                    type={'button'}
                                    onClick={handleClick}
                                />
                                {/* <Form register={register} /> */}
                                {isOpen === false ? (
                                    ''
                                ) : (
                                    <Confirmation
                                        isOpen={isOpen}
                                        setIsOpen={setIsOpen}
                                        reservation={reservation}
                                    />
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* {success === false ? (
                <Success text={'No existe reserva'} goTo={'/cancellation'} />
            ) : (
                <Success text={'Reserva cancelada'} goTo={'/cancellation'} />
            )} */}
        </>
    )
}
export default Cancellation
