import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// leaflet.js
import "../node_modules/leaflet/dist/leaflet.css";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
