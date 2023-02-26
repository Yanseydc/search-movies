import './App.css'
import Movies from './components/Movies'
import Header from './components/Header'
import useMovies from './hooks/useMovies'

function App () {
  const { movies } = useMovies()

  return (
    <>
      <Header />
      <Movies movies={movies} />
    </>
  )
}

export default App
