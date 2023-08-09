
import { Container,Row,Col,Button } from 'react-bootstrap'
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb'
import SearchForm from '../../components/search-form/SearchForm'
import TicketTable from '../../components/ticket-table/TicketTable'
import { Link } from 'react-router-dom'
import { useUser } from '../../context/userContext'


const TicketListing = () => {
    const {user}=useUser()


  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb pagename={"Ticket lists"}></PageBreadcrumb>
            </Col>
        </Row>
        <Row>
        {user.role==="user" && <Col>
                <Link to={"/add-ticket"}>
                    <Button variant='info'>Add Ticket</Button>
                </Link>
            </Col>}
            <Col className='text-right'>
                <SearchForm ></SearchForm>
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <TicketTable ></TicketTable>
            </Col>
        </Row>
    </Container>
  )
}

export default TicketListing