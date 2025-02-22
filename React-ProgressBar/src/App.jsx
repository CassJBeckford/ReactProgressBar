import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import ProgressBar from './progress.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProgressBar />
  </StrictMode>,
)
