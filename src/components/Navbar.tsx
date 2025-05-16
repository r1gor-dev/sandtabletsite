import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => (
  <Navbar
    expand="md"
    fixed="top"
    style={{
      background: 'linear-gradient(90deg, #4f2e91 60%, #2e3a91 100%)',
      minHeight: '75px',
      paddingTop: '4px',
      paddingBottom: '4px',
      fontSize: '1rem',
      boxShadow: '0 2px 12px #2e3a9144',
    }}
    variant="dark"
  >
    <Navbar.Brand href="#home" style={{ fontSize: '1.1rem', padding: '0 12px', marginLeft: '100px'  }}>
      Песочный Планшет
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="main-navbar-nav" />
    <Navbar.Collapse id="main-navbar-nav">
      <Nav className="ms-auto" style={{ gap: '70px', marginRight: '150px' }}>
        <Nav.Link href="#model">Модель</Nav.Link>
        <Nav.Link href="#about">О деталях</Nav.Link>
        <Nav.Link href="#video">Видео</Nav.Link>
        <Nav.Link href="#info">Инфо</Nav.Link>
        <Nav.Link href="#opros">Опрос</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;