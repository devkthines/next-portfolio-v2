﻿'use client'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';

// import TileExample from '/images/kevin-bhagat-zNRITe8NPqY-unsplash.jpg'
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
                <h1>Tester</h1>
                </div>


            </Col>
          </Row>
      <Row id='gallery'className={
          `${tileExpand === 'no-expand' ? 'okToDisplay' : 'no-Display'}`>
        <Col id='imageTile1'><img id='tile1' src={`/images/kevin-bhagat-zNRITe8NPqY-unsplash.jpg`}}/>
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