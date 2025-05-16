import { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';

const TextImagePage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fixed-1920x1080 fade-section`}
      style={{
        backgroundColor: '#f9f9f9',
        minHeight: '55vh',
        display: 'flex',
        flexDirection: 'column',
        margin: '-31px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
      }}
    >
      <Container
        fluid
        className="py-5 d-flex flex-column align-items-center"
        style={{ flex: '1 0 auto', padding: 0 }}
      >
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
          Информация о планшете
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
          образовательных целях, арт-терапии и ещё во многом другом. Основная идея — использование песка и света
          как инструмента для визуального и тактильного взаимодействия.
        </p>
        <img
          src="/photos/sand.jpg"
          alt="Песочный планшет"
          style={{
            marginTop: '2rem',
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '18px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
          }}
        />
      </Container>
    </div>
  );
};

export default TextImagePage;
