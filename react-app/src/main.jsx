import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Index from './Kasir/App'
// import Index from './Route/'
// import Index from './Aduan/routes'
// import Index from './Latihan/Register'
import Index from "./RSCH/routes/index"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)
