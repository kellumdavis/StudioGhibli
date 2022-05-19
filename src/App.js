import './App.css';
import Navbar from './Components/Navbar/Header';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as router, Route, Routes} from 'react-router-dom';
import React, {useState} from 'react';
import Home from './Pages/Home';
import FilmIndex from './Pages/FilmIndex';
import FilmShow from './Pages/FilmShow';
import About from './Pages/About';
import Sidebar from './Components/Sidebar';

function App() {

  const URL = "https://ghibliapi.herokuapp.com";
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  };
console.log(setIsOpen)
  return (
    <div className="App">
     
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/films' element={<FilmIndex URL={URL}/>}/>
        <Route path='/filmshow/:id' element={<FilmShow URL={URL}/>}/>
        <Route path='/about/' element={<About URL={URL}/>}/>
      </Routes> 
      <Footer/>
    </div>
  );
}

export default App;
