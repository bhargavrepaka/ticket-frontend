/* eslint-disable react/prop-types */

import { Col, Form, Row } from 'react-bootstrap'
import { useTickets } from '../../context/ticketContext'
import { useState } from 'react'

const SearchForm = () => {
    const [searchStr,setSearchStr]=useState("")
    const {tickets,setSearchTicketsResult}=useTickets()

    function handleOnChange(e){
        const str=e.target.value
        setSearchStr(e.target.value)
        console.log(tickets)
        const searchResult=tickets.filter((ticket)=>{
           return ticket.subject.toLowerCase().includes(str.toLowerCase())
        })
        setSearchTicketsResult(searchResult)
        console.log(searchResult)
    }
  return (
    <div>
        <Form>
            <Form.Group as={Row}>
                <Form.Label className='text-right' column sm={2} >Search :</Form.Label>
                <Col> 
                    <Form.Control 
                    name='searchStr'
                    placeholder='Search...'
                    onChange={handleOnChange}
                    value={searchStr}
                    ></Form.Control>
                </Col>
            </Form.Group>
        </Form>

    </div>
  )
}

export default SearchForm