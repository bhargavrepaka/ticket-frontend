/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext,useContext,useState } from "react"

const TicketContext=createContext()

export const TicketProvider=({children})=>{

    const [tickets,setTickets]=useState([])
    const [isLoading,setLoading]=useState(false)
    const [error,setError]=useState("")
    const [searchTicketsResult,setSearchTicketsResult]=useState([])

    return <TicketContext.Provider 
            value={{
                tickets,
                setTickets,
                error,
                setError,
                isLoading,
                setLoading,
                searchTicketsResult,
                setSearchTicketsResult
            }}>
            {children}
        </TicketContext.Provider>
}

export function useTickets(){
    return useContext(TicketContext)
}