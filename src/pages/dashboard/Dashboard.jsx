
import { Container,Row,Col ,Button} from 'react-bootstrap'
import TicketTable from '../../components/ticket-table/TicketTable'
import tickets from '../../data/dumy-tickets.json'
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  return (
    <Container>
        <Row>
            <PageBreadcrumb pagename={"Dashboard"}></PageBreadcrumb>
        </Row>
        <Row >
            <Col className='text-center mb-2'>
                <Link to={"/add-ticket"}>
                <Button variant='info' style={{fontSize:"2rem",padding:"10px 20px"}}> Add New Ticket</Button>
                </Link>
            
            </Col>
        </Row>
        <Row>
            <Col className='text-center mb-2'>
            <div>Total Tickets: 50</div>
            <div>Pending Tickets: 45</div>
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
                <TicketTable tickets={tickets}></TicketTable>
            </Col>
        </Row>
    </Container>
  )
}

export default Dashboard