import { searchMovies } from "../services/movies.js";
import { useState } from "react";

export function useMovies({ search }) {
  const [movies, setMovies] = useState([])


  const getMovies = async () => {
    const newMovies = await searchMovies({ search })
    console.log("Respuesta de la API:", newMovies);
    setMovies(newMovies)
  }

  return {movies, getMovies }
}
