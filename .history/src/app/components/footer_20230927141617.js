﻿'use client'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Card from 'react-bootstrap/Card';
import { AiFillGithub } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import { MdVolunteerActivism } from 'react-icons/md';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io';
import { CgGym } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { BsFillPhoneFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { SiUpwork } from 'react-icons/si';
// import PicOfMe from '/images/image_67220481.JPG'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import Tooltip from 'react-bootstrap/Tooltip';
import $ from 'jquery'

 export default function Footer(){
    const btnName = {
        'gitHub': {
          'id': 1,
          "placement": "bottom",
          "info": "gitHub",
          "icon": <a href="https://github.com/devkthines" target='_blank'>
            <button className='quickLinks'><AiFillGithub /></button></a>
        },
        'linkedIn': {
          'id': 2,
          "placement": "bottom",
          "info": "linkedIn",
          "icon": <a href="https://www.linkedin.com/in/korey-hines-17b0a9263" target='_blank'><button className='quickLinks'><GrLinkedinOption />
          </button></a>
        },
        'gMaps': {
          'id': 3,
          "placement": "bottom",
          "info": "gMaps",
          "icon": <a href="https://goo.gl/maps/BovFkBEjUMQ6VBob9" target='_blank'>
            <button className='quickLinks'><MdLocationOn /></button></a>
        },
        'gMail': {
          'id': 4,
          "placement": "bottom",
          "info": "gMail",
          "icon": <a href="mailto:dev.kthines@gmail.com"><button className='quickLinks'><AiOutlineMail /></button></a>
        },
        'upWork': {
          'id': 5,
          "placement": "bottom",
          "info": "upWork",
          "icon": <a href="https://www.upwork.com/freelancers/~01ae4feb16c6fa7213?viewMode=1" target='_blank'>
            <button className='quickLinks'><SiUpwork /></button></a>
        },
        'redPDF': {
          'id': 6,
          "placement": "bottom",
          "info": "resume",
          "icon": <a className='aLink' target="_blank" href="/files/hinesResume.pdf">
            <button className='quickLinks'><AiOutlineFilePdf /></button></a>
        },
        'phone': {
          'id': 7,
          "placement": "bottom",
          "info": "phone",
          "icon": <a href="tel:2093669363" >  <button className='quickLinks'><BsFillPhoneFill /></button></a>
        }
      }
    return(
        <>
        <footer id='footer'><p>Copyright 2023- Korey Hines</p>
       <div> {Object.entries(btnName).map(([k, v]) => (
                <div className='d-inline-block' key={v.id}>
                  <OverlayTrigger
                    trigger="hover"
                    key={v.id}
                    placement={v.placement}
                    // overlay={

                    //   <Tooltip id={`tooltip-${v.placement}`}>
                    //     {v.info}
                    //   </Tooltip>
                    // }
                  >
                    {v.icon}
                  </OverlayTrigger>
                </div>))}
</div>
        </footer>
        </>
    )
 }