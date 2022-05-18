import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';

import Home from './Pages/Home';
import FilmIndex from './Pages/FilmIndex';
import FilmShow from './Pages/FilmShow';
import About from './Pages/About';


function App() {

  const URL = "https://ghibliapi.herokuapp.com";

  return (
    <div className="App">
     
      <Header/>
      
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/films' element={<FilmIndex URL={URL}/>}/>
        <Route path='/filmshow/:id' element={<FilmShow URL={URL}/>}/>
        <Route path='/about/' element={<About URL={URL}/>}/>
      </Routes>
    </div>
  );
}

export default App;
