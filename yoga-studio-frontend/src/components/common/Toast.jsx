import { useState, useEffect } from 'react'
import './Toast.css'

let toastId = 0

export function Toast({ message, type = 'info', duration = 3000, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-content">
        <span className="toast-icon">
          {type === 'success' && '✓'}
          {type === 'error' && '✕'}
          {type === 'info' && 'ℹ'}
          {type === 'warning' && '⚠'}
        </span>
        <p>{message}</p>
      </div>
      <button 
        className="toast-close"
        onClick={onClose}
        aria-label="Fechar notificação"
      >
        ✕
      </button>
    </div>
  )
}

export function ToastContainer() {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    window.showToast = (message, type = 'info') => {
      const id = toastId++
      setToasts(prev => [...prev, { id, message, type }])
      return id
    }

    window.removeToast = (id) => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }
  }, [])

  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => window.removeToast(toast.id)}
        />
      ))}
    </div>
  )
}
