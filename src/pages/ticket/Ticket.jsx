import { Container,Col,Row,Button } from "react-bootstrap"
import PageBreadcrumb from "../../components/breadcrumb/Breadcrumb"
import tickets from "../../data/dumy-tickets.json"
import MessageHistory from "../../components/message-history/MessageHistory"
import UpdateTicket from "../../components/update-ticket/UpdateTicket"
import { useState } from "react"

const ticket=tickets[0]
const Ticket = () => {
    const [message,setMessage]=useState()

    function handleOnChange(e){
        console.log(e.target.value)
        setMessage(e.target.value)
    }
    function handleOnSubmit(e){
        e.preventDefault()
        alert("message submitted")

    }
    return (
    <Container>
        <Row>
            <Col> <PageBreadcrumb pagename={"Ticket"}></PageBreadcrumb> </Col>
        </Row>
        <Row>
            <Col className="fw-bolder text-secondary">
                <div className="subject">Subject: {ticket.subject}</div>
                <div className="date">Date: {ticket.addedAt}</div>
                <div className="statis">Status: {ticket.status}</div>
            </Col>
            <Col className="text-end">
                <Button style={{fontSize:"1.2rem"}} variant="outline-info">Close Ticket</Button>
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <MessageHistory msg={ticket.history}></MessageHistory>
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <UpdateTicket message={message} 
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit} >
                </UpdateTicket>
            </Col>
        </Row>
    </Container>
  )
}

export default Ticket