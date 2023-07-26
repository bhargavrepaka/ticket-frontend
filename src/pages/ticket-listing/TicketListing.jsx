
import { Container,Row,Col,Button } from 'react-bootstrap'
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb'
import SearchForm from '../../components/search-form/SearchForm'
import { useState } from 'react'
import TicketTable from '../../components/ticket-table/TicketTable'
import tickets from "../../data/dumy-tickets.json"
import { Link } from 'react-router-dom'


const TicketListing = () => {
    const [searchStr,setSearchStr]=useState("")
    const [displayTickets,setDisplayTickets]=useState(tickets)

    function handleOnChange(e){
        e.preventDefault()
        setSearchStr(e.target.value)
        searchTickets(e.target.value)
    }

    function searchTickets(srchStr){
        const dispTkets=tickets.filter((ticket)=>{
            return ticket.subject.toLowerCase().includes(srchStr.toLowerCase())
            })
        setDisplayTickets(dispTkets)
    }
  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb pagename={"Ticket lists"}></PageBreadcrumb>
            </Col>
        </Row>
        <Row>
            <Col>
                <Link to={"/add-ticket"}>
                 <Button variant='info'>Add Ticket</Button>
                </Link>
                
            </Col>
            <Col className='text-right'>
                <SearchForm handleOnChange={handleOnChange} str={searchStr} ></SearchForm>
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <TicketTable tickets={displayTickets}></TicketTable>
            </Col>
        </Row>
    </Container>
  )
}

export default TicketListing