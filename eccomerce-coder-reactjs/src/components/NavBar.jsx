import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container className="p-4">
          <Navbar.Brand href="#home">Ecommerce-ReactJS</Navbar.Brand>
          <Nav className="me-auto ps-4">
            <Nav.Link href="#home">Verduras</Nav.Link>
            <Nav.Link href="#features">Frutas</Nav.Link>
            <Nav.Link href="#pricing">Otros</Nav.Link>
          </Nav><CartWidget />
        </Container>
      </Navbar>
    )
};