import Navigation from './components/Navbar';
import Home from './pages/Home';
import ModelPage from './pages/ModelPage';
import VideoPage from './pages/VideoPage';
import TextImagePage from './pages/TextImagePage';

const App = () => (
  <>
    <Navigation />
    <div id="top" style={{ paddingTop: '70px', marginTop: '70px' }}>
      <section id="home"><Home /></section>
      <section id="model" style={{ minHeight: '100vh' }}><ModelPage /></section>
      <section id="video"><VideoPage /></section>
      <section id="info"><TextImagePage /></section>
    </div>
  </>
);

export default App;