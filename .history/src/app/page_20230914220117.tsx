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

export default function Home() {
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
    <Navbar className={`${color? 'color-change':'bg-body-tertiary'} flex flex-col `} sticky='top' expand="lg" >
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
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
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
  </Navbar>

      <div className={`infoSection bg-stone-800 border border-indigo-600 bg-no-repeat flex flex-row justify-between`}>
        <div>
          <h1>Hello, my name is Korey, a web developer/creative person</h1>
        </div>
        <Image id='portrait' src={uglyMe} alt="" className='w-48' />
      </div>
      <div id='about'>
        <div ref={ref} className="aboutSection text-center m-auto p-10">
          <div> <h1>About </h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis corrupti impedit esse voluptatum enim
              nesciunt
              eligendi odit ex magni adipisci officiis nobis vero incidunt quia saepe inventore, consequatur
              temporibus quisquam quasi laudantium optio? Dignissimos saepe, perferendis in nisi delectus neque libero maiores
              voluptate adipisci laborum non commodi harum porro, deleniti cumque sed voluptatibus. Quis,
              aut, maiores eius numquam, repellendus ducimus eos libero nulla quisquam id deleniti nisi corrupti quibusdam
              inventore tenetur similique qui expedita ipsam dignissimos
              quas quam eum praesentium molestias. Veniam soluta odio eveniet eius placeat mollitia modi vero, nisi quos,
              rem iusto error recusandae inventore aspernatur? Debitis quae ullam voluptates voluptate minima, quo voluptas
              voluptatum blanditiis? Reprehenderit, sint? Nemo ducimus ad officiis. Cupiditate ea possimus rem non aspernatur
              necessitatibus sed
              optio dolorem suscipit in nam eligendi aut et enim, omnis impedit
              minus fugiat dignissimos sapiente quidem accusantium placeat facilis
              sit vitae! Nostrum eveniet, consequatur quasi impedit ut sunt doloremque unde itaque eos earum soluta mollitia quod
              possimus laborum, aperiam porro, natus eligendi beatae voluptatum amet modi minima blanditiis non officia. Nostrum et
              provident hic illo ullam eum, sunt harum! Necessitatibus aperiam libero, quis suscipit beatae aliquid quo saepe
              fugiat possimus, hic cum facere exercitationem repellendus! Itaque temporibus dolor repudiandae eaque voluptatibus,
              impedit enim eius inventore qui facilis accusantium iusto illum placeat dicta ducimus corrupti fugit, id ab beatae
              nam laboriosam fugiat aut perspiciatis architecto. Vel, laudantium facere voluptates ad explicabo in odit et maiore
              s tempore reprehenderit quis mollitia nam quos. Odit unde voluptatum repellendus? Blanditiis facilis nulla commodi
              tempore dolor. Quibusdam, fugit ratione. Dolore ullam error dolorem magni! Itaque porro magnam a quibusdam impedit
              laboriosam ea quia cumque consequuntur vero eligendi, quos labore culpa. Magni voluptatum omnis voluptatibus
              deleniti officiis quaerat dignissimos nostrum eius pariatur dolores id qui libero ea, ipsum velit, molestiae
              provident amet aut modi, aliquam porro nam? Officiis vero animi nam explicabo eaque blanditiis aperiam quo a
              rchitecto obcaecati rerum assumenda rem pariatur natus voluptatum, dignissimos voluptatem quis tempora temporibus
              quia cupiditate eius et provident magni. Accusantium impedit ducimus commodi accusamus excepturi illum
              doloremque voluptatem nesciunt. Impedit fuga corrupti hic, cum doloribus quasi obcaecati neque nesciunt
              quod recusandae consequuntur natus, culpa expedita dolor dolores autem reiciendis nisi eligendi molestias
              sunt maiores sint. Facere eveniet inventore minus quae voluptates, ad iusto? Corporis accusantium maxime
              vitae atque unde consequatur provident dolorem quod ullam eos voluptas harum, ea sed inventore minus deleniti
              sint quisquam odio debitis blanditiis nam beatae accusamus magni. Laudantium deserunt repellat optio
              velit dolorum nihil voluptates cum nisi nemo repudiandae? Nemo, voluptatum doloribus beatae excepturi
              temporibus sit ut iure cupiditate quasi, corrupti eligendi incidunt deleniti asperiores exercitationem
              dolor eos qui? Odit ad ipsam unde commodi, quod totam iure distinctio eius aliquid, mollitia nulla voluptas
              nisi quasi quam saepe aspernatur adipisci molestias quis laudantium. Velit eveniet ex tempore ullam assumenda
              dignissimos quia labore quibusdam
              impedit libero ut accusantium vitae, obcaecati reiciendis minima sint, blanditiis illum eum illo alias
              laboriosam aliquam ab, cumque et? Laborum, ab consectetur rem nulla ipsa, soluta molestiae, facilis sint
              omnis sit quis corporis.</p></div></div>
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
