// will be used when in mobile view all icons on side nav
import Nav from 'react-bootstrap/Nav';
import Image from 'next/image';
export default function BottomNav(){

    return(
        <>
        <Nav id='bottomNav' className="justify-content-center" activeKey="/home">

       <div> <Nav.Item>
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Contact
          </Nav.Link>
        </Nav.Item</div>> <Nav.Item>
          <Nav.Link href="/"><Image width={25} height={25} id='navbrand' src="/puzzle-piece.svg" alt="" /></Nav.Link>
        </Nav.Item>
      </Nav>
        </>
    )
}