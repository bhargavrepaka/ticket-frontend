/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const UserContext=createContext()

export function UserProvider({children}){
    const [isAuth,setAuth]=useState(false)
    const [isLoading,setLoading]=useState(false)
    const [error,setError]=useState("")
    const [user,setUser]=useState({})


    useEffect(()=>{
        console.log(user)
        const unsubscribe=onAuthStateChanged(auth,async(user)=>{
            if(user){
                console.log(user)
                const {displayName,email,refreshToken,uid}=user
                setUser({displayName,email,refreshToken,uid})
                setAuth(true)
            }
            
        })
        return ()=>unsubscribe()
    },[])

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