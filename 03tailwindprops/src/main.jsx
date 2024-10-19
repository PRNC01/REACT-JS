import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Card from './card.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card Name='Prince' Title='Web Dev' Para='THIS THE EXAMPLE OF PROPS IN REACT'/>
  </StrictMode>,
)
