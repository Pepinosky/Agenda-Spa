import React, { useEffect, useState, Fragment, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import Button from '../../../layout/Button'
import Input from '../../../layout/Input'

export default function Form({ isOpen, setIsOpen, formData, setFormData }) {
    const { register, handleSubmit, getValues } = useForm({
        defaultValues: {
            correo: 'nilson@email.com',
            nombre: 'nilson',
            apellido: 'nilson',
            telefono: '123',
        },
    })

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
                            Numero de reserva: {formData.numero_reserva}
                            <br />
                            fecha: {formData.fecha}
                            <br />
                            hora: {formData.hora}
                            <br />
                            servicio: {formData.servicio}
                        </Dialog.Description>
                        <Input
                            labelText={'correo'}
                            type={'email'}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    correo: event.target.value,
                                })
                            }
                        />

                        <Input
                            labelText={'nombre'}
                            type={'text'}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    nombre: event.target.value,
                                })
                            }
                        />

                        <Input
                            labelText={'apellido'}
                            type={'text'}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    apellido: event.target.value,
                                })
                            }
                        />

                        <Input
                            labelText={'telefono'}
                            type={'text'}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    telefono: event.target.value,
                                })
                            }
                        />
                        <Button
                            text={'confirmar reserva'}
                            onClick={() => {
                                console.log(formData)
                            }}
                        />
                    </div>
                </Dialog.Panel>
            </Dialog>
        </>
    )
}
