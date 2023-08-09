/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import axios from 'axios'
import { useEffect, useState } from 'react'
import { Container,Row,Col,Form ,Button, Alert} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/userContext'
import { toast } from 'react-hot-toast'


const Login = ({formSwitcher,formFor}) => {
  const [email,setEmail]=useState("test@gmail.com")
  const [password,setPassword]=useState("test")
  const [error,setError]=useState("")
  const {setAuth}=useUser()
  const navigate=useNavigate()

  useEffect(()=>{
    if(sessionStorage.getItem("accessJwt")){
      setAuth(true)
      navigate("/dashboard")
    }
  },[])

  async function handleOnSubmit(e){
    e.preventDefault()
    setError("")
    try {
      const result = await axios.post("http://localhost:3000/v1/user/login",{email,password})
      console.log(result.data)
      if(result.data.success){
        sessionStorage.setItem("accessJwt",result.data.accessJwt)
        localStorage.setItem("ticketsystem",JSON.stringify({refreshJwt:result.data.refreshJwt}))
        setAuth(true)
      }
      toast.success("Welcome Back!")
      navigate("/dashboard")
    } catch (err) {
      console.log(err)
      setError(err.message)
    }
  }
  return (
    // <div className="entry-page bg-info"> 
    //   <div className=" p-5 bg-white text-black rounded form-box">
    <div>
        <Container>
          <Row>
            <Col>
            <h1>{formFor}</h1>
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
    // </div>
    // </div>
  )
}

export default Login