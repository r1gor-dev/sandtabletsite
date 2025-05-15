import { Container } from 'react-bootstrap';

const TextImagePage = () => (
  <div className="fixed-1920x1080" style={{ backgroundColor: '#f9f9f9',
   minHeight: '55vh',
    display: 'flex',
     flexDirection: 'column',
     margin: '-31px' }}>
    <Container fluid className="py-5 d-flex flex-column align-items-center" style={{ flex: '1 0 auto', padding: 0 }}>
      <h2
        className="text-center mb-4"
        style={{
          color: '#7c3aed',
          fontFamily: 'Lato, Loto, Arial, sans-serif',
          fontWeight: 700,
          fontSize: '2.5rem',
          letterSpacing: '0.03em',
        }}
      >
        Информация
      </h2>
      <p
        className="text-violet"
        style={{
          fontSize: '1.35rem',
          lineHeight: '2',
          maxWidth: '900px',
          fontFamily: 'Lato, Loto, Arial, sans-serif',
          fontWeight: 500,
          
          letterSpacing: '0.01em',
        }}
      >
        Проект «Песочный Планшет» — это современное средство визуализации и взаимодействия. Он используется в
        образовательных целях, в сфере дизайна, архитектуры и искусства. Основная идея — использование песка и света
        как инструмента для визуального и тактильного взаимодействия. Современные технологии позволяют расширить
        функциональность платформы, интегрируя её с цифровыми устройствами, камерами и алгоритмами обработки изображений.
      </p>
    </Container>
  </div>
);


export default TextImagePage;
