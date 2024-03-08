import './style/main.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'

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
