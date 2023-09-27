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
  {id: '1', name: 'Python', level: 1},
  {id: '2', name: 'AWS', level: 2},
  {id: '3', name: 'MERN', level: 3},
  {id: '4', name: 'CSS/SCSS', level: 4},
  {id: '5', name: 'next.js', level: 5}]


export default function About() {

  return (
    <div id='about'>

      <Row>

        <Col xs={4} id='firstCol' className='d-flex align-items-center'>
          <img variant="top" id='aboutImg' src='/images/image_6487327.JPG' /> </Col>
        <Col xs={8}>
          <div>

            <div id='info' className=''>
              <div className='cavani'><span className='spanabout'>About</span></div>
              <div className='d-flex justify-content-around'><div id='abouttext'>
                <p>
                  share some goals
                  Hello there! My name is Alan Walker. I am
                  a graphic designer, and I'm very passionate and dedicated to my work.
                  With 20 years experience as a professional a graphic designer,
                  I have acquired the skills and knowledge necessary to make your project a success.</p>
              </div>
                <ul>
                  <li>Address: &nbsp;  Korey Hines</li>
                  <li>Study: &nbsp;  Korey Hines</li>
                  <li>Mail: &nbsp;  Korey Hines</li>
                  <li>Phone: &nbsp;  Korey Hines</li>
                </ul>
              </div></div>
            <div id='' className='d-flex'>
              <div id='progress'>
                <h1>Proficiencies</h1>
                {proficiencies.map(x=>{
                  <>
                  
                  </>
                })}
              </div>
              <div id='timeline'>
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
              <div>
              </div>
            </div> <div id='aboutImgs' className='d-flex justify-content-between'>
              <img className='aboutImgs' src="/images/webstorm-vs-vscode.jpeg" alt="" />
              <img className='aboutImgs' src="/images/webstorm-vs-vscode.jpeg" alt="" />
              <img className='aboutImgs' src="/images/webstorm-vs-vscode.jpeg" alt="" />
            </div>
          </div>
        </Col>


      </Row>

    </div>
  )
}