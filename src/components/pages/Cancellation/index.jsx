import Title from '../../layout/Title'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Form from './components/Form'
import Confirmation from './components/Confimation'
const Cancellation = () => {
    const [visibility, setVisibility] = useState('invisible')
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="h-full w-full py-44 px-4">
            <div className="mx-auto">
                <div className="flex-col  content-center items-center justify-center p-1 text-center sm:text-left md:flex">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Title text={'Cancelar Reserva'} />
                        <Form register={register} />
                        {/* <Confirmation
                            visibility={visibility}
                            setVisibility={setVisibility}
                        /> */}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Cancellation
