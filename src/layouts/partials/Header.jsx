import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
  return (
    <Navbar expand="md" variant='dark' bg='info' className='p-2'>
        <Navbar.Brand>Logo</Navbar.Brand>
        {/* <Navbar.Toggle 
            aria-controls="basic-navbar-nav"
        > */}
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ms-auto'>
                    <Nav.Link href="/dash">DashBoard</Nav.Link>
                    <Nav.Link href="/dash">Tickets</Nav.Link>
                    <Nav.Link href="/dash">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        {/* </Navbar.Toggle> */}
        
    </Navbar>
  )
}

export default Header