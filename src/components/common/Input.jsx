import React from 'react'

export const Input = ({
    divClass,
    inputClass,
    labelClass,
    type,
    register,
    error,
    label,
    name,
    onChange,
}) => {
    return (
        <>
            <div className={divClass}>
                <label className={labelClass}>
                    {label}
                    <input
                        type={type}
                        className={inputClass}
                        {...register(name)}
                        onChange={onChange}
                    />
                </label>
            </div>
        </>
    )
}
