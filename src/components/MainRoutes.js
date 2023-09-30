import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import PrivateRoute from './PrivateRoute'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/> 
    </Routes>
  )
}

export default MainRoutes