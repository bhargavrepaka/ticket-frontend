/* eslint-disable react/prop-types */

import { Container,Row,Col,Form ,Button} from 'react-bootstrap'

const Login = ({handleOnChange,handleOnResetSubmit,email,formSwitcher}) => {
  return (
    <div>
        <Container>
          <Row>
            <Col>
            <h1>Reset Password</h1>
            <hr />
            <Form onSubmit={handleOnResetSubmit}>
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
              <Button type='submit'>Send Link</Button>
            </Form>
            <hr />
            </Col>
          </Row>
          <Row>
            <Col>
            <a  className="text-primary" onClick={()=>formSwitcher("login")} href="#!">Go to Login?</a>
            </Col>
          </Row>
            
        </Container>
    </div>
  )
}

export default Login