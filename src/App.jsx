
import { Movies } from "./components/Movies.jsx";
import { useMovies } from "./hooks/useMovies.js"
import { useSearch } from "./hooks/useSearch.js";
import { Header } from "./components/Header/index.jsx"
import { Footer } from "./components/Footer/index.jsx";
import './App.css'

function App() {
  const { search, error, updateSearch, isFirstInput } = useSearch();
  const { movies, getMovies } = useMovies({ search });

  const handleSearch = (searchTerm) => {
    getMovies({ search: searchTerm }); // Pasamos la búsqueda a useMovies
  };

  return (
    <div className='page'>
      <Header search={search} error={error} updateSearch={updateSearch} onSearch={handleSearch} />

      <main>
        <Movies movies={movies} isFirstInput={isFirstInput.current} />
      </main>
      <Footer />
    </div>
  )
}

export default App
