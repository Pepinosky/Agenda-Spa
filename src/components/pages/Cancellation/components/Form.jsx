import SubTitle from '../../../../../../admin-frontend/src/components/layout/Subtitle'
import { Input } from '../../../common/Input'
import Button from '../../../layout/Button'
export default function Form({ register }) {
    return (
        <>
            <SubTitle text={' Ingresa el numero de tu reserva'} />
            <Input
                divClass={'col-div '}
                inputClass={'default-input'}
                type={'text'}
                register={register}
                name={'numero_reserva'}
            />
            <Button text={'Cancelar reserva'} />
        </>
    )
}
