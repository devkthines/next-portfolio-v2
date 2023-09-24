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
export default function About() {

    return (

        <div id='about'>
            <Container fluid>
                <div>
             <Row>
                <Col><Card style={{ width: '300px' }}>
                            <Card.Img variant="top" id='aboutImg' src='/images/IMG-update.jpg' />
                            <Card.Body>
                                <Card.Title>Quick Contact Information</Card.Title>
                                <Card.Text>
                                    Name, address, study, degree, mail, phone
                                </Card.Text>

                            </Card.Body>
                        </Card></Col>
                <Col><h1>About</h1>
                        <p>My name is Chase Ohlson. I’m a frontend software engineer & freelance web developer in
                            Los Angeles -- with roots in digital marketing & SEO. I'm passionate about music, technology
                            and basically everything that makes the internet tick.
                            My work currently consists of a</p>
                    </Col>
                <Col>   </Col>
                </Row>

                </div>

                <Row>

                    <Col>

                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h1>Interests</h1>
                    quick card import from old portfolio
                    </Col>
                </Row>
<Row>

    <Col>
    <h1>Proficiencies</h1>
    {/* <Space wrap> */}

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
    {/* </Space> */}
    </Col>
    <Col>
    <h1>The road taken</h1>
    <Timeline
    mode="alternate"
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
            </Container>


        </div>
    )
}