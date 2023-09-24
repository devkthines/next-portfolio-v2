'use client'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Progress, Space } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import Image from 'next/image';
import { Descriptions } from 'antd';


const items = [
  {
    key: '1',
    label: 'Name',
    children: 'Zhou Maomao',
  },
  {
    key: '2',
    label: 'Telephone',
    children: '209-366-9363',
  },
  {
    key: '3',
    label: 'Study',
    children: 'Software Engineering',
  },
  {
    key: '4',
    label: 'email',
    children: 'dev.kthines@gmail.com',
  },
  {
    key: '5',
    label: 'Address',
    children: 'Lodi, CA',
  },
];




export default function About() {

  return (
    <div id='about'>
        <div>
          <Row>
            <Col><Card id='aboutcard' style={{ width: '400px' }}>
              <Card.Img variant="top" id='aboutImg' src='/images/IMG-update.jpg' />
              <Card.Body>
                <Card.Title>Quick Contact Information</Card.Title>
                <h6>Name:  Korey Hines</h6>
                <h6>Address:  Korey Hines</h6>
                <h6>Study:  Korey Hines</h6>
                <h6>Mail:  Korey Hines</h6>
                <h6>Phone:  Korey Hines</h6>
              </Card.Body>
            </Card></Col>
            <Col>
              <div><h1>About</h1>
                <p>My name is Chase Ohlson. I’m a frontend software engineer & freelance web developer in
                  Los Angeles -- with roots in digital marketing & SEO. I'm passionate about music, technology
                  and basically everything that makes the internet tick.
                  My work currently consists of a</p></div>
              <div className='d-flex'>
                <h1>Interests</h1>
                <Card id='uno'>
                <Card.Img variant="top" id='' src='/images/IMG-update.jpg' />
              <Card.Body>
                <Card.Text>
                Volunteering
                </Card.Text>
              </Card.Body>
            </Card>
            <Card >
            <Card.Img variant="top" id='' src='/images/IMG-update.jpg' />
              <Card.Body>
                <Card.Text>
                All things CrossFit
                </Card.Text>
              </Card.Body>
    </Card>
              </div>

              <div> <h1>Proficiencies</h1>
               <div className='d-flex'>
                <div className='text-center'><Progress strokeLinecap="butt" type="circle" percent={75} /><h6>React</h6></div>
                <div className='text-center'><Progress strokeLinecap="butt" type="circle" percent={75} /><h6>React</h6></div>
                <div className='text-center'><Progress strokeLinecap="butt" type="circle" percent={75} /><h6>React</h6></div>
              </div>
                <div className='d-flex'>
                  <div className='text-center'><Progress strokeLinecap="butt" type="circle" percent={75} /><h6>React</h6></div>
                  <div className='text-center'><Progress strokeLinecap="butt" type="circle" percent={75} /><h6>React</h6></div>
                  <div className='text-center'><Progress strokeLinecap="butt" type="circle" percent={75} /><h6>React</h6></div>
                </div></div>
            </Col>
            <Col><h1>The road taken</h1>
            <Timeline
              // mode="alternate"
              items={[
                {
                  children: 'Create a services site 2015-09-01',
                },
                {
                  children: 'Solve initial network problems 2015-09-01',
                  color: 'green',
                },
                {
                  dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
                  children: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
                },
                {
                  color: 'red',
                  children: 'Network problems being solved 2015-09-01',
                },
                {
                  children: 'Create a services site 2015-09-01',
                },
                {
                  dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
                  children: 'Technical testing 2015-09-01',
                },
              ]}
            />
            </Col>
          </Row>
        </div>
    </div>
  )
}