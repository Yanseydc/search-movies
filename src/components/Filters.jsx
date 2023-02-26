import { useId, useState } from 'react'
import useMovies from '../hooks/useMovies'

function Filters () {
  const searchId = useId()
  const sortId = useId()
  const [search, setSearch] = useState('')
  const { getMovies, setSort } = useMovies()

  const handleSearch = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    getMovies(newSearch)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('handle submit')
  }

  const handleChange = (event) => {
    const { checked } = event.target
    setSort(checked)
  }

  return (
    <form className='filters' onSubmit={handleSubmit}>
      <label htmlFor={searchId}>Search: </label>
      <input
        id={searchId}
        type='text'
        onChange={handleSearch}
        value={search}
      />
      <label htmlFor={sortId}>Sort: </label>
      <input type='checkbox' id={sortId} onChange={handleChange} />
    </form>

  )
}

export default Filters
