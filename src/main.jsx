import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MoviesProvider } from './context/Movies'
ReactDOM.createRoot(document.getElementById('root')).render(
  <MoviesProvider>
    <App />
  </MoviesProvider>
)
