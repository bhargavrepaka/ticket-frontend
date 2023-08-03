/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useTickets } from '../../context/ticketContext'
import { useEffect, useState } from 'react'
import axios from 'axios'

const TicketTable = () => {

  const {setTickets,searchTicketsResult,setSearchTicketsResult}=useTickets()
  const [error,setError]=useState("")
  useEffect(()=>{
    async function getAllTickets(){
      setError("")
      try {
        const result =await axios.get("http://localhost:3000/v1/tickets/",{
        headers:{
          Authorization:sessionStorage.getItem("accessJwt")
          }
        })
        console.log(result.data)
        setTickets(result.data)
        setSearchTicketsResult(result.data)
      } catch (err) {
        console.log("eroor",err)
        setError(err.message)
      }
    }

    getAllTickets()

  },[])

  return (
    <Table striped hover bordered >
      <thead>
        <tr>
          <th>#ID</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>

        {searchTicketsResult.length ? searchTicketsResult.map((ticket)=>{
          return (
          <tr key={ticket._id}>
            <td>{ticket._id}</td>
            <td><Link to={`/ticket/${ticket._id}`}>{ticket.subject}</Link></td>
            <td>{ticket.status} </td>
            <td>{ticket.openedAt}</td>
          </tr>
          )}):
          <>
            <tr>
              <td colSpan={4} className='text-center'>No Tickets to Show</td>
            </tr>
            { error && <tr>
               <td colSpan={4} className='text-center text-danger'>Something went wrong...</td>
            </tr>}
          </>
        }

        
      </tbody>
    </Table>
  )
}

export default TicketTable