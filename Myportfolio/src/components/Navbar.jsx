import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={''} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
          </Nav>
          <div className='navbar-text'>
            <div className='social-icon'>
              <a href="#LinkedIn"><img src={''} alt="LinkedIn" /></a>
              <a href="#GitHub"><img src={''} alt="GitHub" /></a>
              <a href="#Leetcode"><img src={''} alt="Leetcode" /></a>
              <a href="#CodingNinja"><img src={''} alt="CodingNinja" /></a>
            </div>
            <button className='vvd' onClick={() => console.log("connect")}>Connect</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar;
