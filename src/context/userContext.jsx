/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const UserContext=createContext()

export function UserProvider({children}){
    const [isAuth,setAuth]=useState(false)
    const [isLoading,setLoading]=useState(false)
    const [error,setError]=useState("")
    const [user,setUser]=useState({})
    const navigate=useNavigate()


    // useEffect(()=>{
    //     console.log(user)
    //     const unsubscribe=onAuthStateChanged(auth,async(user)=>{
    //         if(user){
    //             const {displayName,email,refreshToken,uid}=user

    //             setUser({displayName,email,refreshToken,uid})
    //             setAuth(true)
    //             navigate("/dashboard")
    //         }
    //         else{
    //             setAuth(false)
    //             sessionStorage.removeItem("accessJwt")
    //             setUser({})
    //         }
            
    //     })
    //     return ()=>unsubscribe()
    // },[])

   return <UserContext.Provider 
    value={{
        isAuth,
        setAuth,
        isLoading,
        setLoading,
        error,
        setError,
        user,
        setUser
    }}>
        {children}
    </UserContext.Provider>
}

export function useUser(){
    return useContext(UserContext)
}