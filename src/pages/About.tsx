import { Container, Row, Col, Card } from 'react-bootstrap';
import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [visible, setVisible] = useState(true);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current) return;
      const rect = aboutRef.current.getBoundingClientRect();
      // Fade out if less than 40% visible, fade in if more than 60% visible
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const visibleHeight = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));
      const percentVisible = visibleHeight / rect.height;
      setVisible(percentVisible > 0.6);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={aboutRef}
      style={{
        backgroundImage: 'url(/photos/bg2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100%',
        transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <Container
        className="py-5 d-flex justify-content-center align-items-center"
        style={{ minHeight: '100vh', boxShadow: 'none', border: 'none', background: 'transparent' }}
        fluid
      >
        <div style={{ width: '50%' }}>
          <h1
            className="text-center mb-4"
            style={{
              color: 'white',
              textShadow: '2px 2px 4px black, 0 0 2px black',
            }}
          >
            Из чего состоит интерактивный песочный планшет
          </h1>
          <Row className="justify-content-center gx-0 gy-4">
            <Col xs={12} md={4} className="d-flex flex-column align-items-center p-0">
              <Card
                className="h-100 text-center text-white bg-dark"
                style={{ minWidth: '14rem', maxWidth: '10rem', minHeight: '220px', width: '90%' }}
              >
                <Card.Body>
                  <Card.Title style={{ color: '#16ff12' }}>Raspberry Pi 3</Card.Title>
                  <Card.Text>Мозг устройства, обеспечивающий вычисления и управление интерфейсом.</Card.Text>
                </Card.Body>
              </Card>
              <img
                src="/photos/pi.jpg"
                alt="Raspberry Pi 3"
                style={{ width: '80%', marginTop: '4.35rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
              />
            </Col>
            <Col xs={12} md={2} className="d-flex flex-column align-items-center p-0">
              <Card
                className="h-100 text-center bg-secondary text-white"
                style={{ minWidth: '14rem', maxWidth: '10rem', minHeight: '220px', width: '90%' }}
              >
                <Card.Body style={{ backgroundColor: '#6c757d' }}>
                  <Card.Title>Arduino Uno</Card.Title>
                  <Card.Text>Контроллер для управления светодиодами и считывания сенсорных данных.</Card.Text>
                </Card.Body>
              </Card>
              <img
                src="/photos/uno.jpg"
                alt="Arduino Uno"
                style={{ width: '200px', marginTop: '5.775rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
              />
            </Col>
            <Col xs={12} md={4} className="d-flex flex-column align-items-center p-0">
              <Card
                className="h-100 text-center bg-info text-white"
                style={{ minWidth: '12rem', maxWidth: '14rem', minHeight: '220px', width: '90%' }}
              >
                <Card.Body>
                  <Card.Title>WS2812B</Card.Title>
                  <Card.Text>RGB светодиоды, создающие визуальные эффекты на поверхности планшета.</Card.Text>
                </Card.Body>
              </Card>
              <img
                src="/photos/ws.jpg"
                alt="WS2812B"
                style={{ width: '80%', marginTop: '1rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;