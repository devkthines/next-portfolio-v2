'use client'

import Image from 'next/image'
import uglyMe from '../../images/IMG-6163.jpg'
import ProjectModal from './components/modal.js'
import { useInView } from 'react-intersection-observer'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Resume from './components/timeline.js'
import { FilePdfOutlined } from '@ant-design/icons'
import Link from 'next/link'
import ContactLinks from './components/contactLinks.js'
import ProjectImages from './components/images'
import Footer from './components/footer'

export default function Home() {
  const [button, setButton] = useState('noShow')
  const [clicker, setClicker] = useState('buttonShow')
  const [color, setColor] = useState(false)
  const { ref, inView } = useInView({
    // triggerOnce: true,
    rootMargin: '0px 0px',
    onChange: (inView) => {
      if (inView) {
        setColor(true)
      }
      else {
        setColor(false)
      }
    },

  });
  return (<>
    <header><Navbar className={`${color ? 'color-change' : ''}`} sticky='top' expand="lg" >
      <Navbar.Brand href="/"><Image width={25} height={25} id='navbrand' src="/puzzle-piece.svg" alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="d-flex w-100 me-5 flex-row justify-content-end"
          navbarScroll variant='underline'
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/#experience">experience</Nav.Link>
          <Nav.Link href="/contact">contact</Nav.Link>
          <Nav.Link href="/files/hinesResume.pdf" target="_blank">
            <FilePdfOutlined />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar></header>
    <main>
      <Container fluid id='homeCont'>
        <div className={`infoSection mt-5`}>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='d-flex justify-content-end align-self-center'>
              <div>
                <h1>Hello, my name is Korey, a web developer/creative person</h1>
                <button className={clicker} onClick={() => {
                  setButton('buttonShow')
                  setClicker('noShow')
                }}>Get in Touch</button>
                <div className={button}>
                  <button onClick={() => {
                    setButton('noShow')
                    setClicker('buttonShow')
                  }}>Close</button>
                  <ContactLinks />
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='justify-content-start align-self-center'>
              <img id='portrait' src='/images/IMG-update-1.jpg' alt="" className='' />
            </Col>
          </Row>
        </div>
        <div id='about'>
          <div ref={ref} className="aboutSection text-center">
            <Row>
              <h1>About </h1>
              <Col id="aboutInfor" >
                <p>My name is Chase Ohlson. I’m a frontend software engineer & freelance web developer in Los Angeles -- with roots in digital marketing & SEO. I'm passionate about music, technology and basically everything that makes the internet tick.

                  My work currently consists of a full time engineering role at The Noun Project (working on Lingo) & managing ongoing freelance clients and side projects. I find this balancing act to be super resourceful in terms my learning as a web developer, as well as for keeping up with the rapid expansion of developer tools, libraries, frameworks, etc.

                  My freelance web development roots are in Wordpress & Shopify, of which I'm self taught. In 2017, I started at UCLA to broaden my knowledge of the Node.js ecosystem. Since then, I fell in love with & have been primarily using React & Redux in web applications. For static sites, I love using Gatsby for creating blazing fast, SEO-driven headless frontend user interfaces.

                  Whether you're a business owner looking to get started on a app or web development project with a freelance web developer, a developer looking to collaborate on something cool, or just wanting to say hi, shoot me a message and let's work together.</p>
              </Col>
            </Row>
          </div>
        </div>
        <div id="experience" className="infoSection text-center">
          <h1>Experience</h1>
          <Row>
            <Col><Resume /></Col>
          </Row>
        </div>
        <div className="infoSection">
          <h1>Project Gallery</h1>

          <ProjectImages />

        </div>
      </Container>
    </main >
    <Footer /></>
  )
}
