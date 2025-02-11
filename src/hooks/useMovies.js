import { searchMovies } from "../services/movies.js";
import { useState, useRef } from "react";

export function useMovies({ search }) {
  const [movies, setMovies] = useState([])
  const previousSearch = useRef({ search })

  const getMovies = async () => {
    if ({search}==previousSearch.current) return

    const newMovies = await searchMovies({ search })
    setMovies(newMovies)
  }

  return { movies, getMovies }
}
