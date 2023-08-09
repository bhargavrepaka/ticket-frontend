/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import DefaultLayout from '../../layouts/DefaultLayout'
import { useUser } from '../../context/userContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// eslint-disable-next-line react/prop-types


const PrivateRoute = () => {
  const navigate=useNavigate()
  const { isAuth, setAuth,setUser} = useUser()
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    async function getUserDetails(){
            try {
                const accessJwt=sessionStorage.getItem("accessJwt")
                const result = await axios.get("http://localhost:3000/v1/user",{
                    headers:{
                        Authorization:accessJwt
                    }
                })
                console.log(result.data)
                if(result.data.success){
                    setUser(result.data)
                }
            } catch (error) {
                console.log(error)
            }
        }

    if(isAuth) {setLoading(false)}
    if(sessionStorage.getItem('accessJwt') ) {
      setAuth(true)
      getUserDetails()
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