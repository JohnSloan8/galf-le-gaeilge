import * as React from "react";
import { Link, Outlet } from "react-router-dom"
import { Navbar, Nav, Container } from "react-bootstrap"

export default function App() {
  return (
    <div>
      <Navbar bg="primary" expand="sm">
        <Container>
          <Navbar.Brand as={Link} to="/home">Galf le Gaeilge</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link as={Link} to="/courses">Courses</Nav.Link>  
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/players">Players</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
    
  );
}
