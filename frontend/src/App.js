import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Profil from './pages/Profil';
import Actuality from './pages/Actuality'


function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/actuality" element={<Actuality />} />
            </Routes>
        </div>
    );
}

export default App;