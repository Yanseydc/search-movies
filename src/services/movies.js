const OMDBAPI_KEY = import.meta.env.VITE_OMDBAPI_KEY
const OMDBAPI_URL = import.meta.env.VITE_OMDBAPI_URL || 'http://www.omdbapi.com'

const getMoviesBySearch = async ({ search }) => {
  try {
    console.log('OMDBAPI_URL: ', OMDBAPI_URL)
    const response = await fetch(`${OMDBAPI_URL}/?apikey=${OMDBAPI_KEY}&s=${search}`)
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
