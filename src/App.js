import './style/main.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import ParticlesBackground from './components/ParticlesBackground'


function App() {
  return (
    <div className='main'>
      <Navbar />
      <Home />
       <About />
       <Experience />
    </div>
  );
}

export default App;
