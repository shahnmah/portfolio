import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Projects />
      <Routes>
        <Route path='blogs' element={<Blogs />} />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
