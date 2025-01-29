import responseMovies from "../assets/mocks/results.json"
import noResults from "../assets/mocks/no-results.json"

export function useMovies() {

const movies = responseMovies.Search;
const mappedMovies = movies?.map(movie => ({
  id: movie.imdbID,
  title: movie.Title,
  year: movie.Year,
  poster: movie.Poster
}))

return {movies:mappedMovies}
}
