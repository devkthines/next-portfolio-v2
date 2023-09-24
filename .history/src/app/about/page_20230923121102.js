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



const items = [
    {
      key: '1',
      label: 'UserName',
      children: 'Zhou Maomao',
    },
    {
      key: '2',
      label: 'Telephone',
      children: '1810000000',
    },
    {
      key: '3',
      label: 'Live',
      children: 'Hangzhou, Zhejiang',
    },
    {
      key: '4',
      label: 'Remark',
      children: 'empty',
    },
    {
      key: '5',
      label: 'Address',
      children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
    },
  ];




export default function About() {

    return (

        <div id='about'>
            <Container fluid>
                <div>
             <Row>
                <Col><Card id='aboutcard' style={{ width: '300px' }}>
                            <Card.Img variant="top" id='aboutImg' src='/images/IMG-update.jpg' />
                            <Card.Body>
                                <Card.Title>Quick Contact Information</Card.Title>
                                <Card.Text>
                                <Descriptions title="User Info" items={items} />
                                </Card.Text>

                            </Card.Body>
                        </Card></Col>
                <Col><h1>About</h1>
                        <p>My name is Chase Ohlson. I’m a frontend software engineer & freelance web developer in
                            Los Angeles -- with roots in digital marketing & SEO. I'm passionate about music, technology
                            and basically everything that makes the internet tick.
                            My work currently consists of a</p>
                    </Col>
                <Col>
                <Card id='uno'>
              <Card.Body>
                <Card.Title><h2><MdVolunteerActivism /> Volunteering</h2></Card.Title>
                <Card.Text>
                 Besides Coding, I love to help others in any way I can. The reward of being able to do something for someone
                  without expecting anything in return is satisfying and rewarding.
                </Card.Text>
              </Card.Body>
            </Card>  </Col><Col className='d-flex justify-content-center mb-2' xl={3} lg={3} md={6} sm={6} xs={12}>  <Card >
              <Card.Body>
                <Card.Title><h3><CgGym /> Crossfit Lover</h3></Card.Title>
                <Card.Text>
                If I need to take a break from coding, you can usually find me at the gym hitting the refresh button and pushing
                  my body to the limits. I do it for mental and physical health.
                </Card.Text>
              </Card.Body>
            </Card>
                </Col>
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