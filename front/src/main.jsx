import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import SessionContextProvider from './contexts/SessionContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SessionContextProvider>
        <App />
      </SessionContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
