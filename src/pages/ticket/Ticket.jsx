import { Container,Col,Row,Button } from "react-bootstrap"
import PageBreadcrumb from "../../components/breadcrumb/Breadcrumb"
import MessageHistory from "../../components/message-history/MessageHistory"
import UpdateTicket from "../../components/update-ticket/UpdateTicket"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { API_BASE_URL } from "../../env"


const Ticket = () => {
    const [ticket,setTicket]=useState({})
    const {tid}=useParams()
    const [refresh,setRefresh]=useState(false)
    console.log(tid)
    console.log(refresh)
    useEffect(()=>{
        async function getSingleTicket(){
            try {
                const result = await axios.get(`${API_BASE_URL}/v1/tickets/${tid}`,{
                headers:{
                    Authorization:sessionStorage.getItem("accessJwt")
                    }
                })
                console.log(result.data[0])
                setTicket(result.data[0])
                
            } catch (error) {
                console.log(error.response.data.message)
            }
            
        }
        getSingleTicket()
    },[tid,refresh])
    
    async function handleTicketClose(){
        console.log(sessionStorage.getItem("accessJwt"))
        try {
            const result = await axios.patch(`${API_BASE_URL}/v1/tickets/close-ticket/${tid}`,{},{
                headers:{
                    Authorization:sessionStorage.getItem("accessJwt")
                }
            })
                console.log(result)
                setRefresh((prev)=>!prev)
        } catch (err) {
            console.log(err)
        }
    }
    return (
    <Container>
        <Row>
            <Col> <PageBreadcrumb pagename={"Ticket"}></PageBreadcrumb> </Col>
        </Row>
        <Row>
            <Col className="fw-bolder text-secondary">
                <div className="subject">Subject: {ticket.subject}</div>
                <div className="date">Date: {new Date(ticket.openedAt).toLocaleString()}</div>
                <div className="statis">Status: {ticket.status}</div>
            </Col>
            <Col className="text-end">
                <Button style={{fontSize:"1.2rem"}} 
                variant="outline-info" 
                onClick={handleTicketClose}
                disabled={ticket.status=="Closed"} 
                >Close Ticket</Button>
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <MessageHistory msg={ticket.conversations} ></MessageHistory>
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <UpdateTicket setRefresh={setRefresh} ticketStatus={ticket.status}>
                </UpdateTicket>
            </Col>
        </Row>
    </Container>
  )
}

export default Ticket