import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Navbar/NavBar";
import { Banner } from './components/Banner/Banner';
import { Scroll } from './components/Scroll/Scroll';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';
import Project from './components/Project/Project';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Scroll />
      <Banner />
      <About />
      <Experience />
      {/* <Services /> */}
      <Project />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
