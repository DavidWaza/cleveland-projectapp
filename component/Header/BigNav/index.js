import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "../../../styles/Home.module.css";

const BigNav = () => {
  return (
    <Navbar bg="light" expand="lg" className={styles.navbar} sticky-top>
      <Container fluid>
        <Navbar.Brand href="#">cleveland international group</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BigNav;
