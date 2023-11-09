import { useState } from 'react'
import pokeLogo from './assets/pokebola.png'
import './App.css'
import { Pokedex } from './components/Pokedex'  

function App() {
  return (
    <>
      <div>
        <a href="https://pokeapi.co/" target="_blank">
          <img src={pokeLogo} className="logo" alt="Poke logo" />
        </a>
      </div>
      <h1>Pokedex</h1>
      <div className="card">
        <Pokedex/>
      </div>
    </>
  )
}

export default App
