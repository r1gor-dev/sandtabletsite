import Navigation from './components/Navbar';
import Home from './pages/Home';
import ModelPage from './pages/ModelPage';
import VideoPage from './pages/VideoPage';
import TextImagePage from './pages/TextImagePage';
import TextPhotoPage from './pages/TextPhotoPage';
import Footer from './pages/Footer';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <>
    <Navigation />
    <div className="app-content" id="top" style={{ paddingTop: '40px', marginTop: '40px' }}>
      <section id="home"><Home /></section>
      <section id="model" style={{ minHeight: '100vh' }}><ModelPage /></section>
      <section id="about"><About /></section>
      <section id="video"><VideoPage /></section>
      <section id="info"><TextImagePage /></section>
      <section id="opros"><TextPhotoPage /></section>
    </div>
    <Footer />
  </>
);

export default App;