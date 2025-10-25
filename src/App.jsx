import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Favourite from './pages/Favourites'

function App() {


  return(
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Favourites' element={<Favourites/>}/>
      </Routes>
    </main>
  );
}

export default App;
