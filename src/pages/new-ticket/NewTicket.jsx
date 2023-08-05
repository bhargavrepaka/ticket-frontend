/* eslint-disable no-unused-vars */

import { Container,Row,Col } from 'react-bootstrap'
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb'
import AddTicketForm from '../../components/add-ticket-form/AddTicketForm'
import { useState } from 'react'



const NewTicket = () => {
  
  return (
    <Container >
        <Row>
            <Col>
            <PageBreadcrumb pagename={"New Ticket"}></PageBreadcrumb>
            </Col>
        </Row>
        <Row>
            <Col>
              <AddTicketForm></AddTicketForm>
            </Col>
        </Row>
    </Container>
  )
}

export default NewTicket