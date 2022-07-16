import React, { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import Button from '../../../layout/Button'
import { Input } from '../../../common/Input'

export default function Confirmation({
    isOpen,
    setIsOpen,
    getValues,
    register,
    handleSubmit,
    onsubmit,
}) {
    return (
        <>
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-10"
            >
                <Dialog.Panel>
                    <div
                        className={`fixed top-60 left-[-10px] right-[-10px] mx-auto flex w-5/6 flex-col items-center border-2 border-solid bg-slate-100 py-6  `}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="h-6 w-6"
                        >
                            <ion-icon
                                name="close-circle"
                                size="large"
                            ></ion-icon>
                        </button>
                        <Dialog.Title className="text-3xl">
                            Ingresa tus datos
                        </Dialog.Title>
                        <Dialog.Description className="m-2 text-xl">
                            {/* Numero de reserva: {getValues('id')} */}
                            <br />
                            fecha: {getValues('fecha')}
                            <br />
                            hora: {getValues('hora')}
                            <br />
                            servicio: {getValues('servicio')}
                        </Dialog.Description>
                        <Input
                            label={'correo'}
                            labelClass={'col-label'}
                            divClass={'col-div'}
                            register={register}
                            name={'correo'}
                            type={'email'}
                        />

                        <Input
                            name={'nombre'}
                            label={'nombre'}
                            labelClass={'col-label'}
                            divClass={'col-div'}
                            type={'text'}
                            register={register}
                        />

                        <Input
                            name={'apellido'}
                            label={'apellido'}
                            labelClass={'col-label'}
                            divClass={'col-div'}
                            type={'text'}
                            register={register}
                        />

                        <Input
                            label={'telefono'}
                            name={'telefono'}
                            type={'text'}
                            labelClass={'col-label'}
                            divClass={'col-div'}
                            register={register}
                        />
                        {
                            <Button
                                text={'confirmar reserva'}
                                onClick={handleSubmit(onsubmit)}
                            />
                        }
                        {/* <input type="submit" /> */}
                    </div>
                </Dialog.Panel>
            </Dialog>
        </>
    )
}
