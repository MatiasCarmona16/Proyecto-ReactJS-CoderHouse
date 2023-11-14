import { NavLink } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container className="p-4">
          <Navbar.Brand>
            <NavLink to="/">E L I T E - C H R O N O S</NavLink>
            </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="category/citizen">Citizen</NavLink>
            <NavLink to="category/movado">Movado</NavLink>
            <NavLink to="category/victorinox">Victorinox</NavLink>
          </Nav><CartWidget />
        </Container>
      </Navbar>
    )
};