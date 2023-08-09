/* eslint-disable react-hooks/exhaustive-deps */

import { Container,Row,Col ,Button} from 'react-bootstrap'
import TicketTable from '../../components/ticket-table/TicketTable'
import tickets from '../../data/dumy-tickets.json'
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb'
import { Link } from 'react-router-dom'
import { useTickets } from '../../context/ticketContext'
import { useUser } from '../../context/userContext'


const Dashboard = () => {
    const {totalTickets,openTickets}=useTickets()
    console.log(totalTickets,openTickets)
    const {user}=useUser()


  return (
    <Container>
        <Row>
            <PageBreadcrumb pagename={"Dashboard"}></PageBreadcrumb>
            <h1>{user.role}</h1>
        </Row>
        <Row >
            {user.role==="user" && <Col className='text-center mb-2'>
                <Link to={"/add-ticket"}>
                <Button variant='info' style={{fontSize:"2rem",padding:"10px 20px"}}> Add New Ticket</Button>
                </Link>
            
            </Col>}
        </Row>
        <Row>
            <Col className='text-center mb-2'>
            <div>Total Tickets: {totalTickets}</div>
            <div>Open Tickets: {openTickets}</div>
            </Col>
        </Row>
        <Row>
            <Col className='mt-2'>
            Recently added Tickets
            </Col>
        </Row>
        <hr />
        <Row>
            <Col className='recent-ticket'>
                <TicketTable 
                    tickets={tickets}  >
                </TicketTable>
            </Col>
        </Row>
    </Container>
  )
}

export default Dashboard