'use client'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Image  from 'next/image';
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
            <img src="" alt="" />

            </div>



        </div>

        <div className='flex flex-row'>
          <div ><Image width={300} height={300} src='/images/image_67198465.JPG' alt=''/></div>
          <div><Image width={300} height={300} src='/images/image_67198465.JPG' alt=''/></div>
          <div><Image className="imgTest" width={300} height={300} src='/images/image_67198465.JPG' alt=''/></div>
          <div><Image className="imgTest" width={300} height={300} src='/images/image_67198465.JPG' alt=''/></div>
        </div>
        </>
    )
}