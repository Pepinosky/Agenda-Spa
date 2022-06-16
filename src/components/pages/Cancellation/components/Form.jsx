import SubTitle from '../../../layout/SubTitle'
import Input from '../../../layout/Input'
import Button from '../../../layout/Button'
export default function Form() {
    return (
        <>
            <SubTitle text={' Ingresa el numero de tu reserva'} />
            <Input type={'text'} />
            <Button text={'Cancelar reserva'} />
        </>
    )
}
