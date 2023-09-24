'use client'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function About() {

    return (

        <div>
            <Container fluid>
                <div></div>

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
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                </Row>

            </Container>


        </div>
    )
}