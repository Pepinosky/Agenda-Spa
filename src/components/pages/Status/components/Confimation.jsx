import Button from '../../../layout/Button'
import Input from '../../../layout/Input'
import SubTitle from '../../../layout/SubTitle'
export default function Confirmation({ visibility }) {
    return (
        <>
            <div
                className={`flex flex-col text-center text-xl font-medium ${visibility} `}
            >
                <SubTitle text={'Reserva: '} />
                <Input labelText={' Fecha'} />
                <Input labelText={' Hora'} />
                <Input labelText={' Servicio'} />
            </div>
        </>
    )
}
