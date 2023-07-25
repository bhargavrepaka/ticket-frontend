/* eslint-disable no-unused-vars */

import { Container,Row,Col } from 'react-bootstrap'
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb'
import AddTicketForm from '../../components/add-ticket-form/AddTicketForm'
import { useState } from 'react'

const initalFormData={
  subject:"",
  issueDate:"",
  details:""

}

const NewTicket = () => {
  const [formData,setFormData]=useState(initalFormData)

  function handleOnChange(e){
    const {name,value}=e.target
    setFormData((prev)=>{
      return {...prev,[name]:value}
    })

  }
  return (
    <Container >
        <Row>
            <Col>
            <PageBreadcrumb pagename={"New Ticket"}></PageBreadcrumb>
            </Col>
        </Row>
        <Row>
            <Col>
              <AddTicketForm handleOnChange={handleOnChange} formData={formData}></AddTicketForm>
            </Col>
        </Row>
    </Container>
  )
}

export default NewTicket