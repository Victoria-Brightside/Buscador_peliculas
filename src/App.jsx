
import { Movies } from "./components/Movies.jsx";
import { useMovies } from "./hooks/useMovies.js"
import './App.css'
import { useSearch } from "./hooks/useSearch.js";
import { Footer } from "./components/Footer/index.jsx";

function App() {
  const { search, error, updateSearch } = useSearch();
  const { movies, getMovies } = useMovies({ search });

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='The Substance", "Spiderman"' />
          <button type="submit"> Buscar </button>
        </form>
        {error && <p style={{ color: 'red' }}> {error} </p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
      <Footer />
    </div>
  )
}

export default App
