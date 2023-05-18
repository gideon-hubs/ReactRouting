import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Articles from './pages/Articles';

function App() {
  return (
    <>
    <div className="App">
    <BrowserRouter>
      <nav>
      <h1>My Articles</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      </nav>

     <Routes>
      <Route path='/' element={<Home/>}/>

      <Route path='/about' element={<About/>}/>

      <Route path='/contact' element={<Contact/>}/>

      <Route path='/articles/:id' element={<Articles/>}/>
     </Routes>

    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
