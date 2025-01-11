import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Index from "./RSCH/routes/index"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)
