import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeroUIProvider } from '@heroui/react'
import { LangProvider } from './context/LangContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeroUIProvider>
      <LangProvider>
        <App />
      </LangProvider>
    </HeroUIProvider>
  </React.StrictMode>
)
