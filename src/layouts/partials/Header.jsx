import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/userContext';
import { toast } from 'react-hot-toast';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/firebase-config';


const Header = () => {
  const navigate=useNavigate()
  const {setAuth,setUser}=useUser()
  async function handleLogout(){
    try {
      const result = await axios.delete("http://localhost:3000/v1/user/logout",{
        headers:{ Authorization:sessionStorage.getItem("accessJwt")}
      })
      console.log(result)
      sessionStorage.removeItem("accessJwt")
      toast('Logged Out... See you again ', {
        icon: '👋',
      });
      setAuth(false)
      setUser({})
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  async function firebaseLogout(){
    signOut(auth)
    setAuth(false)
    sessionStorage.removeItem("accessJwt")
    setUser({})
    toast('Logged Out... See you again ', {
      icon: '👋',
    });
  }

  return (
    <Navbar expand="md" variant='dark' bg='info' className='p-2'>
        <Navbar.Brand>Logo</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ms-auto'>
                <LinkContainer to={"/dashboard"}><Nav.Link >DashBoard</Nav.Link></LinkContainer>
                <LinkContainer to={"/tickets"}><Nav.Link >Tickets</Nav.Link></LinkContainer>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                <Nav.Link onClick={firebaseLogout}>Firebase Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        {/* </Navbar.Toggle> */}
        
    </Navbar>
  )
}

export default Header