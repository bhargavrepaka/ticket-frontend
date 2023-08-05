/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import DefaultLayout from '../../layouts/DefaultLayout'
import { useUser } from '../../context/userContext'
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line react/prop-types


const PrivateRoute = () => {
  const navigate=useNavigate()
  const { isAuth, setAuth} = useUser()
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    if(isAuth) {setLoading(false)}
    else if(!isAuth && sessionStorage.getItem('accessJwt') ) {
      setAuth(true)
      setLoading(false)
     }
    else{
      navigate("/")
    }
    },[])
  return (
    loading?<h1>loading</h1>
          :
     isAuth?<DefaultLayout>
              <Outlet></Outlet >
            </DefaultLayout > 
          :
            <>
              {console.log("sending guy to login", isAuth)}
              <Navigate to={"/"}></Navigate>
            </>          
  )
}

export default PrivateRoute