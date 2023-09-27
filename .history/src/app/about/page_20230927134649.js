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
import { Divider, Tag } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


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

const proficiencies = [
  { id: '1', name: 'Python', level: <><AiOutlineStar></AiOutlineStar></> },
  { id: '2', name: 'AWS', level: <><AiFillStar></AiFillStar></> },
  { id: '3', name: 'MERN', level: <><AiFillStar></AiFillStar></> },
  { id: '4', name: 'CSS/SCSS', level: <><AiFillStar></AiFillStar></> },
  { id: '5', name: 'next.js', level: <><AiFillStar></AiFillStar></> }]


export default function About() {

  return (
    <div id='about'>
      <Row id='abouttop' className=''>
        <Col xs={3}><div id="about"><img variant="top" id='aboutImg' src='/images/image_6487327.JPG' /></div></Col>
        <Col xs={9}> <Row>
          <Col xs={6} id='firstCol' className='d-flex align-items-center'>
            <div id='abouttext'>
              <h6>About</h6> <p>
                share some goals
                Hello there! My name is Alan Walker. I am
                a graphic designer, and I'm very passionate and dedicated to my work.
                With 20 years experience as a professional a graphic designer,
                I have acquired the skills and knowledge necessary to make your project a success.</p>
            </div>
          </Col>
          <Col xs={6}><ul>
            <li>Address: &nbsp;  Korey Hines</li>
            <li>Study: &nbsp;  Korey Hines</li>
            <li>Mail: &nbsp;  Korey Hines</li>
            <li>Phone: &nbsp;  Korey Hines</li>
          </ul></Col>
        </Row>
          <Row id='aboutbottom' className=''>
            <Col xs={6}><div id='progress'>
              <h1>Proficiencies</h1>
              {proficiencies.map(x =>
                <div key={x.id}>
                  <h6>{x.name}</h6>
                  {x.level}

                </div>
              )}
            </div>
            </Col>
            <Col xs={6}><div id='timeline'>
              <h1>Experience</h1>
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
                    color: 'red',
                    children: <><Tag bordered={false} color="processing">
                      processing
                    </Tag>'Network problems being solved 2015-09-01'</>,
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
            </div>
            </Col>
          </Row>
        </Col>
      </Row>




    </div>
  )
}