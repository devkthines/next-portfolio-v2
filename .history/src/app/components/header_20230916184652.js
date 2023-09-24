'use client'


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FilePdfOutlined} from '@ant-design/icons'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function TopHeader(){
  // ${color? 'color-change':'bg-body-tertiary'}
    return(

    <>

<Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/#experience">experience</Nav.Link>
            <Nav.Link href="/contact">contact</Nav.Link>

          <Nav.Link href="/files/hinesResume.pdf"  target="_blank">
          <FilePdfOutlined />
          </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

<Navbar className={
  `flex flex-col `} sticky='top' expand="lg" >
    <Container fluid>
      <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`}  />
      <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/#experience">experience</Nav.Link>
            <Nav.Link href="/contact">contact</Nav.Link>

          <Nav.Link href="/files/hinesResume.pdf"  target="_blank">
          <FilePdfOutlined />
          </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
    </Container>
  </Navbar>

</>
    )
}