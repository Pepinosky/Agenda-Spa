import React from 'react'

export const Select = ({
    divClass,
    selectClass,
    options,
    labelClass,
    label,
    register,
    name,
    onChange,
}) => {
    return (
        <>
            <div className={divClass}>
                <label className={labelClass}>
                    {label}

                    <select
                        className={selectClass}
                        {...register(name)}
                        onChange={onChange}
                    >
                        <option>seleccionar</option>
                        {options?.map((value) => (
                            <option value={value.nombre} key={value.id}>
                                {value.nombre}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
        </>
    )
}
