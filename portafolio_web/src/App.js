import { Routes, Link, Route } from "react-router-dom";
import './App.css';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Index from './pages/Index';

function App() {
  return (
    
      <Routes>
        <Route exact path='/' element={<Index />}  />
        <Route path='/blog' element={<Blog />}  />
        <Route path='/contact' element={<Contact />}  />
        <Route path='/about' element={<About />}  />

      </Routes>
  );
}

export default App;
