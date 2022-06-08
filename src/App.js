import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes } from 'react-router-dom';
import Banner from './components/Header/Banner/Banner';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Routes>

        </Routes>
    </div>
  );
}

export default App;
