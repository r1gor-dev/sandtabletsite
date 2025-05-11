import { Container } from 'react-bootstrap';

const TextImagePage = () => (
  <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <Container className="py-5 d-flex flex-column align-items-center" style={{ flex: '1 0 auto' }}>
      <h2 className="text-center mb-4">Информация</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '900px', textAlign: 'justify' }}>
        Проект «Песочный Планшет» — это современное средство визуализации и взаимодействия. Он используется в
        образовательных целях, в сфере дизайна, архитектуры и искусства. Основная идея — использование песка и света
        как инструмента для визуального и тактильного взаимодействия. Современные технологии позволяют расширить
        функциональность платформы, интегрируя её с цифровыми устройствами, камерами и алгоритмами обработки изображений.
      </p>
    </Container>

    <footer style={{ backgroundColor: '#343a40', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
      <p className="mb-1">© 2025 Песочный Планшет</p>
      <p style={{ fontSize: '0.9rem' }}>
        Разработка: <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#f8f9fa' }}>Ваша команда</a>
      </p>
    </footer>
  </div>
);


export default TextImagePage;
