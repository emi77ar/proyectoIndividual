import './App.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

//import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import {Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Inicio } from './Components/Inicio/inicio';
import Cards from './Components/Cards/Cards';
import { useLocation } from 'react-router-dom';
import Nav from './Components/NavBar/NavBar';
import Detail from './Components/Detail/Detail';
import axios from 'axios';
import { getVideogames, orderCards } from './Redux/actions';


function App() {
/*
const [videogames, setVideogames] = useState([]);

async function onSearch(){
  try {
    const endpoint = 'http://localhost:3001/videogames/';
    const {data} = await axios(endpoint);
    if(data){
    
      setVideogames(data)
    }
   
   
  } catch (error) {
    alert("no hay videojuegos")
    
  }
}

useEffect(()=>{
  onSearch();
},[])

*/
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getVideogames())
  
},[])


  const location = useLocation();
  const showNav = location.pathname !== '/';
 

  return (
    <div className="App">



   {showNav && <Nav/>}
    <Routes>
      <Route exact path='/' element={<Inicio/>} />
      <Route path='/videogames/' element={<Cards/>} />
      <Route path='/videogames/:id' element={<Detail/>}/>
    </Routes>



    </div>
  );
}

export default App;
