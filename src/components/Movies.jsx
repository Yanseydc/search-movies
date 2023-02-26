import './../assets/Movies.css'

function MoviesList ({ movies }) {
  return (
    <>
      {
        movies?.map((movie) => {
          return (
            <div key={movie.id}>
              <img src={movie.poster} alt={movie.title} />
              <h3>{movie.title} - {movie.year}</h3>
            </div>
          )
        }) ?? <h3>No movies found</h3>
      }
    </>
  )
}

function Movies ({ movies }) {
  return (
    <div className='movies'>
      <MoviesList movies={movies} />
    </div>
  )
}

export default Movies
