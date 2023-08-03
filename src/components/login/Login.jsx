/* eslint-disable react/prop-types */

import axios from 'axios'
import { useState } from 'react'
import { Container,Row,Col,Form ,Button, Alert} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const Login = ({formSwitcher}) => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState("")
  const navigate=useNavigate()

  async function handleOnSubmit(e){
    e.preventDefault()
    setError("")
    try {
      const result = await axios.post("http://localhost:3000/v1/user/login",{email,password})
      console.log(result.data)
      if(result.data.success){
        sessionStorage.setItem("accessJwt",result.data.accessJwt)
        localStorage.setItem("ticketsystem",JSON.stringify({refreshJwt:result.data.refreshJwt}))
      }
      navigate("/dashboard")
    } catch (err) {
      console.log(err)
      setError(err.message)
    }
  }
  return (
    <div>
        <Container>
          <Row>
            <Col>
            <h1>Client Login</h1>
            <hr />
            {error && <Alert variant='danger'>Something went wrong...</Alert> }
            <Form onSubmit={handleOnSubmit}>
              <Form.Group className='my-3'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                type='email'
                name='email'
                placeholder='Enter Email'
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group className='my-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                type='password'
                name='password'
                placeholder='Enter Password'
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button type='submit'>Login</Button>
            </Form>
            <hr />
            </Col>
          </Row>
          <Row>
            <Col>
            <a  className="text-primary" onClick={()=>formSwitcher("reset")} href="#!">Forgot Password?</a>
            </Col>
          </Row>
            
        </Container>
    </div>
  )
}

export default Login