import { Container, Row, Col } from 'react-bootstrap';

const Home = () => (
  <Container fluid className="d-flex align-items-center justify-content-center" style={{ minHeight: '50vh',
    marginLeft:'-45px',
   }}>
    <Row className="w-100 justify-content-center">
      <Col md={10}>
        <Row>
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center' }}>
              Песочный Планшет
            </h1>
          </Col>
          <Col md={6}>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', textAlign: 'justify' }}>
              Добро пожаловать в проект “Песочный Планшет” — инновационную платформу, сочетающую искусственный интеллект,
              интерактивную визуализацию и современные технологии моделирования. Здесь вы можете ознакомиться с 3D моделью,
              посмотреть обучающее видео и найти подробную текстовую информацию о технологии и её применении.
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Home;
