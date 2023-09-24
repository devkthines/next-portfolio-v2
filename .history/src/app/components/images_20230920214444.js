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
  id: 0,
  "title": "placeholder 1",
  "description": "description 1",
  "githubLink": "https://github.com/devkthines",
  "linkToProject": "https://google.com",
  "image": '/images/webstorm-vs-vscode.jpeg',
  "imageAlt": "some placeholder description"
},
{
  id: 1,
  "title": "placeholder 2",
  "description": "description 2",
  "githubLink": "https://github.com/devkthines",
  "linkToProject": "https://google.com",
  "image": '/images/webstorm-vs-vscode.jpeg',
  "imageAlt": "some placeholder description"
},
{
  id: 2,
  "title": "placeholder 3",
  "description": "description 3",
  "githubLink": "https://github.com/devkthines",
  "linkToProject": "https://google.com",
  "image": '/images/webstorm-vs-vscode.jpeg',
  "imageAlt": "some placeholder description"
}]



export default function ProjectImages() {

  const [tileExpand, SetTileExpand] = useState('no-expand')
  const [openClose, setOpenClose] = useState(<AiFillCloseCircle></AiFillCloseCircle>)
  const [imgKey, setImgKey] = useState(1)
  function expandTile (e) {
    SetTileExpand('expandIt')
    setImgKey(e.target.value)
    console.log(imgKey)
  }

  return (
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
                <Card.Img variant="top" src={`${}`} />
                <Card.Body>
                  <Card.Title>{projectJson[imgKey].title}</Card.Title>
                  <Card.Text>
                    {projectJson[imgKey].description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        <Row id='gallery' className={
          `${tileExpand === 'no-expand' ? 'okToDisplay' : 'no-Display'} d-flex`}>
          <Col id='imageTile1'><img id='tile1' src={projectJson[0].image} />
            <div className="middle">
              <div className="text"><button value={0} onClick={expandTile}>Hello</button></div>
            </div>
          </Col>
          <Col id='imgcol2'><img className='tiles23' value={1} src={projectJson[1].image}alt="" />
            <img className='tiles23' value={2} src={projectJson[2].image} alt="" />
          </Col>
        </Row>
      </Container>
    </>
  )
}