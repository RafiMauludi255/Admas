import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './Aduan/routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)
