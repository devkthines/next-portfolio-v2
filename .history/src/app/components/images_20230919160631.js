'use client'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
export default function ProjectImages(){

    return(
        <>
         <Container fluid>
      <Row>
        <Col><Image></Col>
        <Col>1 of 2</Col>
      </Row>
    </Container>
        </>
    )
}