import { Route, Routes } from "react-router-dom";
import './assets/css/App.css';

import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Home from './components/Home';
import Packages from './components/Packages';
import Venues from './components/Venues';
import { Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">

      <Navigation />
      
      <Routes>
        <Route path="/" element={< Home />}></Route>
        <Route path="/venues" element={< Venues />}></Route>
        <Route path="/packages" element={< Packages />}></Route>
        <Route path="/about" element={< About />}></Route>
        <Route path="/contact" element={< Contact />}></Route>
        <Route path="/faq" element={< FAQ />}></Route>
      </Routes>
    </div>
  );
}

export default App;
