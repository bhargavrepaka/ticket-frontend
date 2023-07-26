/* eslint-disable react/prop-types */

import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TicketTable = ({tickets}) => {
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

        {tickets.length ? tickets.map((ticket)=>{
          return (
          <tr key={ticket.id}>
            <td>{ticket.id}</td>
            <td><Link to={`/ticket/${ticket.id}`}>{ticket.subject}</Link></td>
            <td>{ticket.status} </td>
            <td>{ticket.addedAt}</td>
          </tr>
          )}):
          <tr>
            <td colSpan={4} className='text-center'>No Tickets to Show</td>
          </tr>
        }

        
      </tbody>
    </Table>
  )
}

export default TicketTable