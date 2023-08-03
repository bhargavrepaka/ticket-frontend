
import { Container,Row,Col,Button } from 'react-bootstrap'
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb'
import SearchForm from '../../components/search-form/SearchForm'
import TicketTable from '../../components/ticket-table/TicketTable'
import { Link } from 'react-router-dom'


const TicketListing = () => {
    


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