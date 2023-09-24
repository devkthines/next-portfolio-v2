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


<Navbar className={
  `flex flex-col `} sticky='top' expand="lg" >
    <Container fluid>
      <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle {`offcanvasNavbar-expand-`}  />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
          variant='underline'
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/#experience">experience</Nav.Link>
            <Nav.Link href="/contact">contact</Nav.Link>

          <Nav.Link href="/files/hinesResume.pdf"  target="_blank">
          <FilePdfOutlined />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

</>
    )
}