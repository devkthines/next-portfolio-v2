'use client'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { AiFillCloseCircle }from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useState } from 'react';

export default function ProjectModal(){
        const [button,setButton] = useState(<AiFillCloseCircle></AiFillCloseCircle>)
    return(
        <>
        <div>
            <button
            onMouseEnter={() => setButton(<AiOutlineCloseCircle></AiOutlineCloseCircle>)}
            onMouseLeave={() => setButton(<AiFillCloseCircle></AiFillCloseCircle>)}
            >
                {button}
            </button>
            <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

            </div>
        </div>
        </>
    )
}