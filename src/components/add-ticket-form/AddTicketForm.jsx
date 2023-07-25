/* eslint-disable react/prop-types */
import { Form,Button, Row,Col,Container } from 'react-bootstrap'
const AddTicketForm = ({handleOnSubmit,handleOnChange,formData}) => {
  console.log(formData)
  return (
    <Container className=' p-5 bg-white text-black rounded form-box'>
      <h1 className='text-center '>Add New Ticket</h1>
        <Form onSubmit={handleOnSubmit} >
              <Form.Group className='my-3' as={Row}>
                <Form.Label column sm={1} >Subject</Form.Label>
                <Col>
                  <Form.Control 
                  sm={11}
                  type='text'
                  name='subject'
                  placeholder='Enter Subject'
                  required
                  value={formData.subject}
                  onChange={handleOnChange}
                  minLength={3}
                  maxLength={20}
                  ></Form.Control>
                </Col>
                
              </Form.Group>
              <Form.Group className='my-3' as={Row}>
                <Form.Label column sm={1}>Issue Date</Form.Label>
                <Col sm={11}>
                  <Form.Control
                  type='date'
                  name='issueDate'
                  required
                  value={formData.issueDate}
                  onChange={handleOnChange}
                  ></Form.Control>
                </Col>
                
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Details</Form.Label>
                <Form.Control 
                as={"textarea"}
                name='details'
                required
                value={formData.details}
                onChange={handleOnChange}
                rows={5}
                ></Form.Control>
              </Form.Group>
              <Button type='submit' variant='info' className='w-100'>Create Ticket</Button>
            </Form>
    </Container>
  )
}

export default AddTicketForm