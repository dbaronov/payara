import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../src/App.css'
import PricingCard from './PricingCard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PricingCard />
  </StrictMode>,
)
