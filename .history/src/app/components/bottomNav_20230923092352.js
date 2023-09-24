// will be used when in mobile view all icons on side nav
import Nav from 'react-bootstrap/Nav';

export default function BottomNav(){

    return(
        <>
        <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
        </>
    )
}