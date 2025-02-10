
import responseMovies from "./assets/mocks/results.json"
import { Movies } from "./components/Movies.jsx";
import {useMovies} from "./hooks/useMovies.js"
import './App.css'
import { useState } from "react";
import {useSearch} from "./hooks/useSearch.js";


function App() {
  const {movies} = useMovies();
  const {search, error, updateSearch} = useSearch();


const handleSubmit = (event) => {
  event.preventDefault()
  console.log({search})
}

const handleChange = (event) =>{
  updateSearch(event.target.value)
}

  return (
    <div className='page'>

      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit= {handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='The Substance", "Spiderman"' />
          <button type="submit"> Buscar </button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
