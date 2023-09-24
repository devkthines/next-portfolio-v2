'use client'

import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import { FilePdfOutlined } from '@ant-design/icons'
import Footer from './components/footer'
import BottomNav from './components/bottomNav'
import $ from 'jquery'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Home() {
  const [button, setButton] = useState('noShow')
  const [clicker, setClicker] = useState('buttonShow')
  const [color, setColor] = useState(false)
  useEffect(() => {
    LoveIt();
    const hello = `%cHello. Welcome to the
    Console Magic I have designated to this portfolio.
    I hope you enjoy as you discover all the small
    insignificant details that makes this stand out!`;
    const style = 'background-color: #1d3557; color: #f1faee; font-style: italic; border: 2px solid #e63946; font-size: 1.5rem; border-raidus: 99px;'
    console.log(hello, style);
  }, [])
  function LoveIt() {
    var words = [
      "Love to help others.",
      "am a CrossFitter.",
      "am a Passionate Web Developer."
    ], i = 0;
    setInterval(function () {
      $('#changer').fadeOut(function () {
        $(this).html(words[i = (i + 1) % words.length]).fadeIn();
      });
    }, 1500);

  };
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
    <header>
      <Navbar id='topNav' className={`${color ? 'color-change' : ''}`} sticky='top' expand="lg" >
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
      </Navbar>
      <Nav variant="underline" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
    </Nav>
    </header>
    <main>
      <Container fluid id='homeCont'>
        <div className={`infoSection`}>
          <Row>
            <Col id='infoCol' xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='align-self-center'>
              <div>
                <h1>Korey Hines</h1>
                <div className='change'> <h2 >&lt;h2&gt;Korey Hines&lt;/h2&gt;</h2></div>
                <div className='change'><h2 id='spec'>I <span id='changer'> am a Passionate Web Developer.</span></h2></div>
                <button className={clicker} onClick={() => {
                  setButton('buttonShow')
                  setClicker('noShow')
                }}>Get in Touch</button>
                <div className={button}>
                  <button onClick={() => {
                    setButton('noShow')
                    setClicker('buttonShow')
                  }}>Close</button>
                </div>
              </div>
            </Col>
            <Col id='portraitCol' xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='align-self-center'>
              <img id='portrait' src='/images/IMG-update-1.jpg' alt="" className='' />
            </Col>
          </Row>
        </div>
      </Container>
    </main >
    <Footer />
    <BottomNav />
  </>)
}
