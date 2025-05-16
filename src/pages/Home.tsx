import { useRef, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const useInView = (offset = 0) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top + offset < windowHeight && rect.bottom > 0) {
        setInView(true);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return [ref, inView] as const;
};

const Home = () => {
  const [ref, inView] = useInView(0);

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center flex-column"
      style={{
        height: '80vh',
        backgroundImage: 'url("/photos/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      ref={ref}
    >
      <Row className="w-100 justify-content-center">
        <Col md={10}>
          <Row>
            <Col
              md={6}
              className="d-flex align-items-center justify-content-center"
            >
              <h1
                style={{
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  WebkitTextStroke: '2px #000',
                  textShadow: `
                    -0.5px -0.5px 0 #000,  
                    0.5px -0.5px 0 #000,
                    -0.5px 0.5px 0 #000,
                    0.5px 0.5px 0 #000
                  `,
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(40px)',
                  transition: 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)',
                }}
              >
                Песочный Планшет
              </h1>
            </Col>
            <Col md={6}>
              <p
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.6',
                  textAlign: 'justify',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(40px)',
                  transition: 'opacity 0.8s 0.2s cubic-bezier(.4,0,.2,1), transform 0.8s 0.2s cubic-bezier(.4,0,.2,1)',
                }}
              >
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
};

export default Home;
