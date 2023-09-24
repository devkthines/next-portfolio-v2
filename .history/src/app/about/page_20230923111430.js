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
             <Row></Row>   <img id='aboutImg' src='/images/IMG-update.jpg' alt="" className='' />

                </div>

                <Row>
                    <Col><h1>About</h1>
                        <p>My name is Chase Ohlson. I’m a frontend software engineer & freelance web developer in
                            Los Angeles -- with roots in digital marketing & SEO. I'm passionate about music, technology
                            and basically everything that makes the internet tick.
                            My work currently consists of a
                            full time engineering role at The Noun Project
                            (working on Lingo) & managing ongoing freelance clients and side projects.
                            I find this balancing act to be super resourceful in terms my learning as a web developer, as well
                            as for keeping up with the rapid expansion of developer tools, libraries, frameworks, etc.
                        </p>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Quick Contact Information</Card.Title>
                                <Card.Text>
                                    Name, address, study, degree, mail, phone
                                </Card.Text>

                            </Card.Body>
                        </Card>
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
    <Progress strokeLinecap="butt" percent={75} />
    <Space wrap>
      <Progress strokeLinecap="butt" type="circle" percent={75} />
      <Progress strokeLinecap="butt" type="dashboard" percent={75} />
    </Space>
    </Col>
</Row>
<Row>
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