import './../assets/Movies.css'
import MoviesList from './MoviesList'

function Movies ({ movies }) {
  return (
    <div className='movies'>
      <MoviesList movies={movies} />
    </div>
  )
}

export default Movies
