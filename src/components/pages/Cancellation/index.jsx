import Title from '../../layout/Title'
import SubTitle from '../../layout/SubTitle'

import Button from '../../layout/Button'
import Form from './components/Form'
import Confirmation from './components/Confimation'
const Cancellation = () => {
    return (
        <div className="h-full w-full py-44 px-4">
            <div className="mx-auto">
                <div className="flex-col  content-center items-center justify-center p-1 text-center sm:text-left md:flex">
                    <Title text={'Cancelar Reserva'} />
                    <Form />
                    <Confirmation visibility={'visible'} />
                </div>
            </div>
        </div>
    )
}
export default Cancellation
