import './App.css';
import About from './About';
import NotFound from './NotFound';


import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Contacts from './Contacts';

function App() {
  return (
  <>
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>Info Tech Services</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/contacts">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Container>
        <Row>
          <Col>
          <Routes>
            <Route path="/" element={<Contacts/>} />
            <Route path="/About" element={<About />} />
            <Route path="/Contacts" element={<Contacts />} />
            
            <Route path="*" element={<NotFound/>} />
          </Routes>
          </Col>
        </Row>
      </Container>
      <br /><br />
    <br />
  </>
  );
}

export default App;
