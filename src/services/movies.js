const OMDBAPI_KEY = import.meta.env.VITE_OMDBAPI_KEY

const getMoviesBySearch = async ({ search }) => {
  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${OMDBAPI_KEY}&s=${search}`)
    if (!response.ok) {
      throw new Error('Error fetching data')
    }
    const data = await response.json()

    // map over the data and return the data we need
    const mappedMovies = data.Search?.map((movie) => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
      }
    }) ?? []
    return mappedMovies
  } catch (error) {
    throw new Error(error)
  }
}

export { getMoviesBySearch }
