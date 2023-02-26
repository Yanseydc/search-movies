import { useEffect, useState } from 'react'

function useDebounce ({ value, delay }) {
  const [debounce, setDebounce] = useState(value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounce(value)
    }, delay)

    return () => {
      clearTimeout(timeout)
    }
  }, [value, delay])

  return { debounce }
}

export default useDebounce
