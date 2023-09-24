'use client'

import Image from 'next/image'
import uglyMe from '../../images/41AE497E-8D5A-46DE-8679-1C35226F5747.jpg'
import ProjectModal from './components/modal.js'
import {useInView} from 'react-intersection-observer'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Resume from './components/timeline.js'
import {FilePdfOutlined} from '@ant-design/icons'
import Link from 'next/link'

export default function Home() {
  const [button, setButton] = useState()
  const[color,setColor] = useState(false)
  const { ref, inView } = useInView({
    // triggerOnce: true,
    rootMargin: '0px 0px',
    onChange: (inView) => {
      if (inView) {
        setColor(true)
      }
      else{
        setColor(false)
      }
    },

  });
  return (
    <main >
    {/* <Navbar className={`${color? 'color-change':'bg-body-tertiary'} flex flex-col `} sticky='top' expand="lg" >
    <Container fluid>
      <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
          variant='tabs'
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#experience">experience</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <Link href="/contact">contact</Link>
          </NavDropdown>
          <Nav.Link href="/files/hinesResume.pdf"  target="_blank">
          <FilePdfOutlined />
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar> */}

      <div className={`infoSection bg-stone-800 border border-indigo-600 bg-no-repeat flex flex-row justify-between`}>
        <div>
          {/* add button function here that was on other page */}
          <h1>Hello, my name is Korey, a web developer/creative person</h1>
          <button onClick={(setButton('buttonShow')}>Get in Touch</button>
        </div>
        <Image id='portrait' src={uglyMe} alt="" className='w-48' />
      </div>
      <div id='about'>
        <div ref={ref} className="aboutSection text-center m-auto p-10">
          <div> <h1>About </h1>
            <p>My name is Chase Ohlson. I’m a frontend software engineer & freelance web developer in Los Angeles -- with roots in digital marketing & SEO. I'm passionate about music, technology and basically everything that makes the internet tick.

My work currently consists of a full time engineering role at The Noun Project (working on Lingo) & managing ongoing freelance clients and side projects. I find this balancing act to be super resourceful in terms my learning as a web developer, as well as for keeping up with the rapid expansion of developer tools, libraries, frameworks, etc.

My freelance web development roots are in Wordpress & Shopify, of which I'm self taught. In 2017, I started at UCLA to broaden my knowledge of the Node.js ecosystem. Since then, I fell in love with & have been primarily using React & Redux in web applications. For static sites, I love using Gatsby for creating blazing fast, SEO-driven headless frontend user interfaces.

Whether you're a business owner looking to get started on a app or web development project with a freelance web developer, a developer looking to collaborate on something cool, or just wanting to say hi, shoot me a message and let's work together.</p></div></div>
        <div id="experience" className="infoSection text-center">
          <h1>Experience</h1>
          <div className='experience'>
            {/* <h1>Timeline Here</h1> */}
      <Resume></Resume>
          </div>
        </div>
      </div>
      <div className="infoSection"><h1>Project tiles</h1>
        <ProjectModal></ProjectModal>
      </div>
    </main>
  )
}
