/* eslint-disable react/prop-types */

import { Col, Form, Row } from 'react-bootstrap'

const SearchForm = ({handleOnChange,str}) => {
    console.log(str)
  return (
    <div>
        <Form>
            <Form.Group as={Row}>
                <Form.Label className='text-right' column sm={2} >Search :</Form.Label>
                <Col> 
                    <Form.Control 
                    name='searchStr'
                    placeholder='Search...'
                    onChange={handleOnChange}
                    value={str}
                    ></Form.Control>
                </Col>
            </Form.Group>
        </Form>

    </div>
  )
}

export default SearchForm