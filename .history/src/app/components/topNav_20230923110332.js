'use client';
import Nav from 'react-bootstrap/Nav';
import Image from 'next/image';


export default function TopNav(){

    return(
        <header>
        {/* <Navbar id='topNav' className={`${color ? 'color-change' : ''}`} sticky='top' expand="lg" > */}

        <Nav id='topNav' variant="underline" defaultActiveKey="/home" className='d-flex justify-content-between'>
       <div className='ms-5'><Nav.Item>
          <Nav.Link href="/"><Image width={25} height={25} id='navbrand' src="/puzzle-piece.svg" alt="" /></Nav.Link>
        </Nav.Item></div>
        <div className='d-flex me-5'><Nav.Item className='px-3'>
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item className=''>
          <Nav.Link eventKey="disabled" disabled>
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Contact
          </Nav.Link>
        </Nav.Item>
        </div>
      </Nav>
      </header>
    )
} ;