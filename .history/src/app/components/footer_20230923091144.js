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

    return(
        <>
        <footer><p>Copyright 2023- Korey Hines</p>
        {Object.entries(btnName).map(([k, v]) => (
                <div className='d-inline-block' key={v.id}>
                  <OverlayTrigger
                    trigger="hover"
                    key={v.id}
                    placement={v.placement}
                    overlay={

                      <Tooltip id={`tooltip-${v.placement}`}>
                        {v.info}
                      </Tooltip>
                    }
                  >
                    {v.icon}
                  </OverlayTrigger>
                </div>

        </footer>
        </>
    )
 }