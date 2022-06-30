import Button from '../../../layout/Button'
import { Input } from '../../../common/Input'
import SubTitle from '../../../layout/SubTitle'
export default function Confirmation({ visibility, setVisibility }) {
    return (
        <>
            <div
                className={`flex flex-col text-center text-xl font-medium ${visibility} `}
            >
                <SubTitle text={'Reserva: '} />
                {/* <Input labelText={' Fecha'} />
                <Input labelText={' Hora'} />
                <Input labelText={' Servicio'} /> */}
                {/* <Button
                    text={'Cancelar Reserva'}
                    type={'button'}
                    className={'text-xl'}
                /> */}
            </div>
        </>
    )
}
