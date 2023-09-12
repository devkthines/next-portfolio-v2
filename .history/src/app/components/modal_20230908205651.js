'use client'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
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


            </div>
        </div>
        </>
    )
}