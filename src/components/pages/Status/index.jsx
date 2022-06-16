import Title from '../../layout/Title'
import Form from './components/Form'
import Confirmation from './components/Confimation'
export default function Status() {
    return (
        <div className="h-full w-full py-44 px-4">
            <div className="mx-auto">
                <div className="flex-col  content-center items-center justify-center p-1 text-center sm:text-left md:flex">
                    <Title text={'Estado de Reserva'} />
                    <Form />
                    <Confirmation visibility={'visible'} />
                </div>
            </div>
        </div>
    )
}
