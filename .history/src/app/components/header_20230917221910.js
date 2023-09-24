'use client'


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FilePdfOutlined} from '@ant-design/icons'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'next/image';
export default function TopHeader(){
  // ${color? 'color-change':'bg-body-tertiary'}
    return(

    <>


<Navbar className={
  `flex flex-col `} sticky='top' expand="lg" >
    <Container fluid>
      <Navbar.Brand href="/"><Image width={25} height={25} id='navbrand' src="/puzzle-piece.svg" alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="flex flex-row-reverse"
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