import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './styles/styles.css'

const NavBar = () => {
  return (
    <Navbar variant='dark' collapseOnSelect expand="lg" class='navbar'>
      <Container>
        <Navbar.Brand href="#home">Puppy Love</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Explore</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
