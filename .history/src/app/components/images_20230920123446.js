﻿'use client'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
// import TileExample from '/images/kevin-bhagat-zNRITe8NPqY-unsplash.jpg'
export default function ProjectImages(){

    return(
        <>
         <Container fluid>
      <Row>
        <Col><img id='tile1' src={`/images/kevin-bhagat-zNRITe8NPqY-unsplash.jpg`}/>
        
        </Col>
        <Col><img src="/images/webstorm-vs-vscode.jpeg" alt="" />
          <img src="/images/webstorm-vs-vscode.jpeg" alt="" />
        </Col>
      </Row>
    </Container>
        </>
    )
}