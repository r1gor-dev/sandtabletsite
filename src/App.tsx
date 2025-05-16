import Navigation from './components/Navbar';
import Home from './pages/Home';
import ModelPage from './pages/ModelPage';
import VideoPage from './pages/VideoPage';
import TextImagePage from './pages/TextImagePage';
import TextPhotoPage from './pages/TextPhotoPage';
import Footer from './pages/Footer';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';

const appContentStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '100vw',
  overflowX: 'hidden',
  margin: 0,
  padding: 0,
};

const sectionStyle: React.CSSProperties = {
  margin: 0,
  padding: 0,
  border: 'none',
  boxSizing: 'border-box',
  width: '100%',
};

const App = () => (
  <>
    <Navigation />
    <div className="app-content" id="top" style={appContentStyle}>
      <section id="home" style={sectionStyle}><Home /></section>
      <section id="model" style={{ ...sectionStyle, minHeight: '100vh' }}><ModelPage /></section>
      <section id="about" style={sectionStyle}><About /></section>
      <section id="video" style={sectionStyle}><VideoPage /></section>
      <section id="info" style={sectionStyle}><TextImagePage /></section>
      <section id="opros" style={sectionStyle}><TextPhotoPage /></section>
    </div>
    <Footer />
  </>
);

export default App;