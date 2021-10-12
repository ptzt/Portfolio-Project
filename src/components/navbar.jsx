import React from 'react'
import {Navbar , Container, Nav} from 'react-bootstrap'
import "../style/navbar.css"
function Navb() {
    return(
        <Navbar classname = "navbar" variant="dark">
        <Container>
        <Nav className="me-auto">
          <Nav.Link href="/page2">/</Nav.Link>
          <Nav.Link href="#about">Sobre mi</Nav.Link>
          <Nav.Link href="#features">Contacto</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}

export default Navb;