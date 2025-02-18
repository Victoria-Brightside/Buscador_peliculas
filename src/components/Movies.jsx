import noResults from "../assets/mocks/no-results.json"
import "./Movies.css"

function ListOfMovies({ movies }) {
    return (
        <ul className="movies">
            {
                movies.map(movie => (
                    <li className="movie" key={movie.id}>
                        <h3> {movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.image} alt={movie.title} />
                    </li>
                ))
            }
        </ul>
    )
}


function NoMovies() {
    return (
        <p>No se encontraron películas para ésta búsqueda</p>
    )
}


export function Movies({ movies, isFirstInput }) {
    const hasMovies = movies?.length > 0;
    if (isFirstInput) return null;
    
    return (
        hasMovies ? <ListOfMovies movies={movies} />
            :
            <NoMovies />
    )

}
