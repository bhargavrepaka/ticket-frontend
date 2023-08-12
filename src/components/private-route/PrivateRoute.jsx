/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import DefaultLayout from '../../layouts/DefaultLayout'
import { useUser } from '../../context/userContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {API_BASE_URL} from "../../env"
// eslint-disable-next-line react/prop-types


const PrivateRoute = () => {
  const navigate=useNavigate()
  const { isAuth, setAuth,setUser,user} = useUser()
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    async function getUserDetails(){
        try {
            const result = await axios.get(API_BASE_URL+ "/v1/user",{
                headers:{
                    Authorization:sessionStorage.getItem('accessJwt'),
                }
            })
            if(result.data.success){
                setUser(result.data.userProfile)
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