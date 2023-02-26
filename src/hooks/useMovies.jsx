import { useContext } from 'react'
import { MoviesContext } from '../context/Movies'
function useMovies () {
  const context = useContext(MoviesContext)

  return context
}

export default useMovies
