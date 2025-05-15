import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => (
  <Container className="py-5">
    <h2 className="text-center mb-4">Что такое песочный планшет</h2>
    <Row>
      <Col md={4} className="mb-4">
        <Card className="h-100 text-center bg-primary text-white">
          <Card.Body>
            <Card.Title>Raspberry Pi 3</Card.Title>
            <Card.Text>Мозг устройства, обеспечивающий вычисления и управление интерфейсом.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className="mb-4">
        <Card className="h-100 text-center bg-secondary text-white">
          <Card.Body>
            <Card.Title>Arduino Uno</Card.Title>
            <Card.Text>Контроллер для управления светодиодами и считывания сенсорных данных.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className="mb-4">
        <Card className="h-100 text-center bg-info text-white">
          <Card.Body>
            <Card.Title>WS2812B</Card.Title>
            <Card.Text>RGB светодиоды, создающие визуальные эффекты на поверхности планшета.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default About;