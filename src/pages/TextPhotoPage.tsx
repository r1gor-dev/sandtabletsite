import { useRef, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';

const fadeVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.5, ease: 'easeIn' } },
};

const TextPhotoPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ minHeight: '75vh', display: 'flex', flexDirection: 'column' }}
    >
      <AnimatePresence>
        {inView && (
          <motion.div
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ flex: '1 0 auto' }}
          >
            <Container className="py-5 d-flex flex-column align-items-center">
              <Row className="align-items-center">
                <Col md={6}>
                  <h2
                    className="text-center mb-3"
                    style={{
                      color: '#2563eb',
                      fontSize: '4rem',
                      fontFamily: '"Lato", "Segoe UI", Arial, sans-serif',
                      fontWeight: 700,
                      letterSpacing: '0.02em',
                      WebkitTextStroke: '1px #fff',
                      textShadow: `
                        -0.5px -0.5px 0 #fff,  
                        0.5px -0.5px 0 #fff,
                        -0.5px 0.5px 0 #fff,
                        0.5px 0.5px 0 #fff
                      `,
                    }}
                  >
                    Опрос
                  </h2>
                  <h4
                    className="text-center mb-4"
                    style={{
                      color: '#2563eb',
                      fontSize: '1.7rem',
                      fontFamily: '"Lato", "Segoe UI", Arial, sans-serif',
                      fontWeight: 500,
                      letterSpacing: '0.01em',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      WebkitTextStroke: '1px #fff',
                      textShadow: `
                        -0.5px -0.5px 0 #fff,  
                        0.5px -0.5px 0 #fff,
                        -0.5px 0.5px 0 #fff,
                        0.5px 0.5px 0 #fff
                      `,
                    }}
                    onClick={() =>
                      window.open(
                        'https://docs.google.com/forms/d/e/1FAIpQLSdUXLTfpdc3gibu90dmPd1JhZLoA_BK4NnbIuCOnAVqD54_bg/viewform?usp=header',
                        '_blank'
                      )
                    }
                    role="button"
                    tabIndex={0}
                    onKeyPress={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        window.open(
                          'https://docs.google.com/forms/d/e/1FAIpQLSdUXLTfpdc3gibu90dmPd1JhZLoA_BK4NnbIuCOnAVqD54_bg/viewform?usp=header',
                          '_blank'
                        );
                      }
                    }}
                  >
                    ПРОЙТИ ОПРОС
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
                    Данный опрос поможет нам лучше понять ваши предпочтения и интересы. Также, он позволит нам провести
                    анализ и улучшить качество предоставляемых услуг. Пожалуйста, уделите несколько минут для прохождения
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TextPhotoPage;