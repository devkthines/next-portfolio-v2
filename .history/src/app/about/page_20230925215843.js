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
      {/* <div> */}
      <Row>

          {/* <Col id=''> */}
            <img variant="top" id='aboutImg' src='/images/IMG-update.jpg' /> </Col>
          <Col>
            <div>
              <div id='aboutImgs' className='d-flex'>
                <img className='aboutImgs' src="/images/webstorm-vs-vscode.jpeg" alt="" />
                <img className='aboutImgs' src="/images/webstorm-vs-vscode.jpeg" alt="" />
                <img className='aboutImgs' src="/images/webstorm-vs-vscode.jpeg" alt="" />
              </div>
              <div className='d-flex'>
                <div>
                  <span className='spanabout'>About</span>
                  <p>Hello there! My name is Alan Walker. I am
                    a graphic designer, and I'm very passionate and dedicated to my work.
                    With 20 years experience as a professional a graphic designer,
                    I have acquired the skills and knowledge necessary to make your project a success.</p>
                </div>
                <div>
                  <h6>Address: &nbsp;  Korey Hines</h6>
                  <h6>Study:  Korey Hines</h6>
                  <h6>Mail:  Korey Hines</h6>
                  <h6>Phone:  Korey Hines</h6>
                </div>
              </div>
                <div id='' className='d-flex'>
            <div>
              <h1>Proficiencies</h1>
              <div className='d-flex'>
                <div className='text-center'><Progress strokeLinecap="butt" type="circle" percent={75} /><h6>React</h6></div>
                <div className='text-center'><Progress strokeLinecap="butt" type="circle" percent={75} /><h6>React</h6></div>
                <div className='text-center'><Progress strokeLinecap="butt" type="circle" percent={75} /><h6>React</h6></div>
              </div>
              <div className='d-flex'>
                <div className='text-center'><Progress strokeLinecap="butt" type="circle" percent={75} /><h6>React</h6></div>
                <div className='text-center'><Progress strokeLinecap="butt" type="circle" percent={75} /><h6>React</h6></div>
                <div className='text-center'><Progress strokeLinecap="butt" type="circle" percent={75} /><h6>React</h6></div>
              </div>
            </div>
            <div>
            </div>
          </Col>


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
          </div>

      </Row>
      {/* </div> */}
    </div>
  )
}