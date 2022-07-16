import React from 'react'

export const Input = ({
    divClass,
    inputClass,
    labelClass,
    type,
    register,
    errors,
    message,
    label,
    name,
    value,
    onChange,
    key,
}) => {
    return (
        <>
            <div className={divClass}>
                <label className={labelClass} key={key}>
                    {label}
                    <input
                        type={type}
                        value={value}
                        className={inputClass}
                        {...register(name)}
                        onChange={onChange}
                    />
                </label>
            </div>
        </>
    )
}
