import "./style/main.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import DateRangePicker from "./components/DateRangePicker";
// import Projects from "./pages/Projects";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Home />
      <About />
      <Experience />
      {/* <Projects/> */}
    </div>
  );
}

export default App;
