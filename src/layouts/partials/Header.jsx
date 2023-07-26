import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
const Header = () => {
  return (
    <Navbar expand="md" variant='dark' bg='info' className='p-2'>
        <Navbar.Brand>Logo</Navbar.Brand>
        {/* <Navbar.Toggle 
            aria-controls="basic-navbar-nav"
        > */}
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ms-auto'>
                <LinkContainer to={"/dashboard"}><Nav.Link >DashBoard</Nav.Link></LinkContainer>
                <LinkContainer to={"/tickets"}><Nav.Link >Tickets</Nav.Link></LinkContainer>
                <LinkContainer to={"/"}><Nav.Link >Logout</Nav.Link></LinkContainer>
                 
                </Nav>
            </Navbar.Collapse>

        {/* </Navbar.Toggle> */}
        
    </Navbar>
  )
}

export default Header