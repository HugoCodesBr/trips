import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Reservas from './pages/Reservas'

const RoutesApp = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reservas' element={<Reservas />} />
    </Routes>
  )
}

export default RoutesApp