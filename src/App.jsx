
import responseMovies from "./assets/mocks/results.json"
import { Movies } from "./components/Movies.jsx";
import {useMovies} from "./hooks/useMovies.js"
import './App.css'

function App() {
 
  return (
    <div className='page'>

      <header>
        <h1>Buscador de películas</h1>
        <form className='form'>
          <input placeholder='The Substance", "Spiderman"' />
          <button type="submit"> Buscar </button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
