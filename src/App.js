import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes } from 'react-router-dom';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div>
        <Header/>
        <Banner/>
        <About/>
        <Projects/>
        <Contact/>
        <Routes>
        </Routes>

    </div>
  );
}

export default App;
