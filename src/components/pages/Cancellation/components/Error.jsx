import Button from '../../../layout/Button'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Input } from '../../../common/Input'
import SubTitle from '../../../../../../admin-frontend/src/components/layout/Subtitle'
export default function Error() {
    return (
        <>
            <div className={`flex flex-col text-center text-xl font-medium  `}>
                <SubTitle text={'no hay reserva '} />
            </div>
        </>
    )
}
