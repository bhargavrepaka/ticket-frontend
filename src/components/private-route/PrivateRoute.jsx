/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import DefaultLayout from '../../layouts/DefaultLayout'

// eslint-disable-next-line react/prop-types

const isAuth=true
const PrivateRoute = () => {
  return (
    isAuth? <DefaultLayout><Outlet></Outlet></DefaultLayout> : <Navigate to={"/"}></Navigate>
  )
}

export default PrivateRoute