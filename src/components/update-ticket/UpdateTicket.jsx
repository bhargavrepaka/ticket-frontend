/* eslint-disable react/prop-types */
import axios from "axios"
import { useState } from "react"
import { Form,Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useUser } from "../../context/userContext"
const UpdateTicket = ({setRefresh}) => {
  const [message,setMessage]=useState("")
  const {user}=useUser()
  const {tid}=useParams()
  function handleOnChange(e){
    console.log(e.target.value)
    setMessage(e.target.value)
  }
  console.log(user.name)

  async function handleOnSubmit(e){
      e.preventDefault()
      alert("message submitted "+message)
      try {
        const result = await axios.put(`http://localhost:3000/v1/tickets/${tid}`,
                {message,sender:user.name},
                {headers:{
                    Authorization:sessionStorage.getItem("accessJwt")
                }})
        console.log(result)
        setMessage("")
        setRefresh((prev)=>{return !prev})
      } catch (err) {
        console.log(err)
      }

  }

  return (
    <Form onSubmit={handleOnSubmit}>
        <Form.Group>
            <Form.Label>Reply</Form.Label>
            <Form.Control 
                as={"textarea"}
                rows={5}
                name="replyMessage"
                value={message}
                onChange={handleOnChange}
            ></Form.Control>
        </Form.Group>
        <div className="text-end mt-3">
            <Button type="submit" variant="info">Reply</Button>
        </div>
    </Form>
  )
}

export default UpdateTicket