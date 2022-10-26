import React from 'react';
import { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider/AuthProvider';
import './Header.css';

const Header = () => {
  const {user,logout} = useContext(authContext);

  const handleLogout=()=>{
    logout()
    .then(()=>{})
    .catch(error => console.error(error));
  }

  console.log(user);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Learning & Earning</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <NavLink to={'/'}>Courses</NavLink>
            <NavLink to={'/faq'}>FAQ</NavLink>
            <NavLink to={'/blog'}>Blog</NavLink>
            {
              !user?.uid ? 
              <>
                <NavLink to={'/login'}>Login</NavLink>
                <NavLink to={'/signup'}>Signup</NavLink>
              </> : 
              <>
                <p className='text-white'>{user?.displayName}</p>
                <Button onClick={handleLogout} variant="outline-info">Logout</Button>
              </>
              
            }
            
          </Nav>
        </Navbar.Collapse>
        {
          user?.photoURL ? <Image src={user.photoURL} className='profilePicture'></Image> : <FaUserAlt></FaUserAlt>
        }
        

      </Container>
    </Navbar>
    );
};

export default Header;