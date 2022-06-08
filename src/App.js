import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes } from 'react-router-dom';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
        <Header/>
        <Banner/>
        <About/>
        <Routes>

        </Routes>
    </div>
  );
}

export default App;
