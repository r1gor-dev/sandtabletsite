import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => (
  <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="w-100">
    <Container>
      <Navbar.Brand href="#top">Песочный Планшет</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto" style={{ marginLeft: '20px', gap: '70px' }}>
          <Nav.Link href="#model">3D Модель</Nav.Link>
          <Nav.Link href="#video">Видео</Nav.Link>
          <Nav.Link href="#info">Инфо</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
