import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';

import "../../styles/NavBarStyles.css";
function Navbars() {
  return (
    <>
      <Navbar className="navbarestilos">
        <Container>
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/tecnologias">Tecnologias que uso</Nav.Link>
            <Nav.Link as={Link} to="/certificados">Certificados</Nav.Link>
            <Nav.Link as={Link} to="/proyectos">Proyectos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
