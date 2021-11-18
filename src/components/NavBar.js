import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import pawLogo from '../images/1314467.svg'
import '../styles/styles.css'

const NavBar = () => {
  return (
    <Navbar variant='dark' collapseOnSelect expand="lg" className='navbar' id='navbar'>
      <Container>
        <Navbar.Brand href="#home" className='navbar-brand'>
          <img src={pawLogo} alt="paw logo" className='logo'/>Puppy Love</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/explore">Explore</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
