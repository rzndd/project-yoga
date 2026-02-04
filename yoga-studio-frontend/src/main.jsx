import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { YogaProvider } from './context/YogaContext'
import { ErrorBoundary } from './components/common'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <YogaProvider>
        <App />
      </YogaProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
