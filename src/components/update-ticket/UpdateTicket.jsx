/* eslint-disable react/prop-types */
import { Form,Button } from "react-bootstrap"
const UpdateTicket = ({message,handleOnChange,handleOnSubmit}) => {
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