'use client'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// import TileExample from '/images/kevin-bhagat-zNRITe8NPqY-unsplash.jpg'



const projectJson = [{
id: 1,
"title": "placeholder 1",
"description" :
},
{
id: 2,
"title": "placeholder 2",
"description" :
},
{
id: 3,
"title": "placeholder 3",
"description" :
}]



export default function ProjectImages(){
const [tileExpand,SetTileExpand] = useState('no-expand')
const [openClose, setOpenClose] = useState(<AiFillCloseCircle></AiFillCloseCircle>)
const expandTile = () =>{
  SetTileExpand('expandIt')
}
    return(
        <>
         <Container fluid>
          <Row id={tileExpand}>
            <Col>
             <div>
                <button
                    onMouseEnter={() => setOpenClose(<AiOutlineCloseCircle></AiOutlineCloseCircle>)}
                    onMouseLeave={() => setOpenClose(<AiFillCloseCircle></AiFillCloseCircle>)}
                >
                    {openClose}
                </button>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

      </Card.Body>
    </Card>

                </div>


            </Col>
          </Row>
      <Row id='gallery'className={
          `${tileExpand === 'no-expand' ? 'okToDisplay' : 'no-Display'}`}>
        <Col id='imageTile1'><img id='tile1' src={`/images/kevin-bhagat-zNRITe8NPqY-unsplash.jpg`}/>
        <div className="middle">
    <div className="text"><button onClick={()=>expandTile()}>Hello</button></div>
  </div>
        </Col>
        <Col><img src="/images/webstorm-vs-vscode.jpeg" alt="" />
          <img src="/images/webstorm-vs-vscode.jpeg" alt="" />
        </Col>
      </Row>
    </Container>
        </>
    )
}