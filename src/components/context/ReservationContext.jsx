import { createContext, useState } from 'react'

const ReservationContext = createContext({})

export function ReservationProvider({ children }) {
    const [reservation, setReservation] = useState()

    return (
        <ReservationContext.Provider value={{ reservation, setReservation }}>
            {children}
        </ReservationContext.Provider>
    )
}

export default ReservationContext
