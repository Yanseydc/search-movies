import { createContext, useMemo, useState } from 'react'
import { getMoviesBySearch } from '../services/movies'

const MoviesContext = createContext()

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [sort, setSort] = useState(false)

  const getMovies = async (search) => {
    const filteredMovies = await getMoviesBySearch({ search })
    setMovies(filteredMovies)
  }

  const sortMovies = useMemo(() => {
    if (movies.length === 0) return movies
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return (
    <MoviesContext.Provider value={{
      movies: sortMovies,
      getMovies,
      setSort
    }}
    >
      {children}
    </MoviesContext.Provider>
  )
}

export {
  MoviesContext,
  MoviesProvider
}
