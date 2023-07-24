/* eslint-disable react/prop-types */

import { Container,Row,Col,Form ,Button} from 'react-bootstrap'

const Login = ({handleOnChange,handleOnSubmit,email,password,formSwitcher}) => {
  return (
    <div>
        <Container>
          <Row>
            <Col>
            <h1>Client Login</h1>
            <hr />
            <Form onSubmit={handleOnSubmit}>
              <Form.Group className='my-3'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                type='email'
                name='email'
                placeholder='Enter Email'
                required
                value={email}
                onChange={handleOnChange}
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
                onChange={handleOnChange}
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