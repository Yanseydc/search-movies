import './../assets/Movies.css'
import MoviesList from './MoviesList'

function Movies ({ movies }) {
  return (
    <div className='movies'>
      {
        movies.length === 0
          ? (<p className='movies__message'>No movies to show, please search for a movie</p>)
          : null
      }
      <MoviesList movies={movies} />
    </div>
  )
}

export default Movies
