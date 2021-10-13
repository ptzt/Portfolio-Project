import React from 'react'
import {Navbar , Container, Nav} from 'react-bootstrap'
import "../style/navbar.css"



function Navb() {
    return(
      <Navbar classname = "navbar" variant="dark">
      <Container>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
      <Nav className="me-auto">
        <Nav.Link href="/"><u>/</u></Nav.Link>
        <Nav.Link href="/about"><u>Sobre mi</u></Nav.Link>
        <Nav.Link href="/talk"><u>Contacto</u></Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    )

}

export default Navb;