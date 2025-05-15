// Пример для TextPhotoPage.tsx
import { Container, Row, Col } from 'react-bootstrap';

const TextPhotoPage = () => (
  <div style={{ minHeight: '75vh', display: 'flex', flexDirection: 'column' }}>
    <Container className="py-5 d-flex flex-column align-items-center" style={{ flex: '1 0 auto' }}>
      <Row className="align-items-center">
        <Col md={6}>
          <h2
            className="text-start mb-3"
            style={{
              color: '#2563eb',
              fontSize: '2.5rem',
              fontFamily: '"Lato", "Segoe UI", Arial, sans-serif',
              fontWeight: 700,
              letterSpacing: '0.02em',
            }}
          >
            Заголовок
          </h2>
          <h4
            className="text-start mb-4"
            style={{
              color: '#2563eb',
              fontSize: '1.7rem',
              fontFamily: '"Lato", "Segoe UI", Arial, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.01em',
            }}
          >
            Подзаголовок
          </h4>
          <p
            style={{
              fontSize: '1.3rem',
              lineHeight: '2',
              
              color: '#2563eb',
              fontFamily: '"Lato", "Segoe UI", Arial, sans-serif',
              fontWeight: 400,
              letterSpacing: '0.01em',
            }}
          >
            Это пример страницы, где слева находится текст, а справа — фотография. Вы можете использовать этот макет
            для отображения информации, которая требует визуального сопровождения. Текст может быть длинным и содержать
            несколько абзацев, чтобы объяснить идею, концепцию или предоставить подробности о проекте.
          </p>
          <p
            style={{
              fontSize: '1.3rem',
              lineHeight: '2',
              color: '#2563eb',
              fontFamily: '"Lato", "Segoe UI", Arial, sans-serif',
              fontWeight: 400,
            }}
          >
            Фотография справа помогает дополнить текстовую информацию, предоставляя визуальный контекст. Этот макет
            идеально подходит для презентаций, описаний продуктов или образовательных материалов.
          </p>
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <img
            src="/photos/opros.png"
            alt="Guesser"
            style={{
              maxWidth: '100%',
              borderRadius: '18px',
              boxShadow: '0 0 32px #4f2e9144',
              border: '3px solid var(--main-accent2)',
              background: '#fff2',
            }}
          />
        </Col>
      </Row>
    </Container>
  </div>
);

export default TextPhotoPage;