import './App.css'
import responseMovies from "./assets/mocks/results.json"
import noResults from "./assets/mocks/no-results.json"



function App() {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;
console.log(hasMovies);
console.log(movies);
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
        {
          hasMovies
            ? (
              <ul>
                {
                  movies.map(movie => (
                    <li key={movie.imdbID}>
                      <h3> {movie.Title}</h3>
                      <p>{movie.Year}</p>
                      <img src={movie.Poster} alt={movie.Title} />

                    </li>
                  ))
                }
              </ul>
            )
            : (
              <p>No se encontraron películas para ésta búsqueda</p>
            )
        }
      </main>
    </div>
  )
}

export default App
