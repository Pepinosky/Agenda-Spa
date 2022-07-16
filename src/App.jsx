import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Reservation from './components/pages/Reservation'
import Cancellation from './components/pages/Cancellation'

import { Success } from './components/common/Success'
import NavBar from './components/layout/NavBar'

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Reservation />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/cancellation" element={<Cancellation />} />
                <Route path="/cancellation/success" element={<Success />} />
            </Routes>
        </>
    )
}

export default App
