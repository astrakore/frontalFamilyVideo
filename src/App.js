import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';


import Home from './Containers/Home/Home';
import Register from './Containers/Register/Register';
import Login from './Containers/Login/Login';
import Movies from './Containers/Movies/Movies';
import MovieDetail from './Containers/MovieDetail/MovieDetail';

import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header/>

        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/moviedetail" element={<MovieDetail/>}/>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
