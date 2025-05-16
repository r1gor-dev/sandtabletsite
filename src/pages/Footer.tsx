const Footer = () => (
  <footer
    style={{
      background: 'var(--main-bg-solid)',
      color: 'var(--main-muted)',
      padding: '40px 0',
      textAlign: 'center',
      width: '100%',
      //height: '10px',
      //margin: '-31px',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      borderTop: '2px solid var(--main-accent2)',
      fontSize: '0.95rem',
    }}
  >
    <p style={{ margin: 0 }}>© 2025 Песочный Планшет</p>
    <p style={{ margin: 0, fontSize: '0.85rem' }}>
      Разработка:{' '}
      <a
        href="https://github.com/r1gor-dev"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'var(--main-accent2)' }}
      >
        Команда разработчиков
      </a>
    </p>
  </footer>
);

export default Footer;