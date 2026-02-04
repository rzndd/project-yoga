import { useState } from 'react'
import './Modal.css'

export function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children,
  size = 'md',
  closeButton = true 
}) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className={`modal modal-${size}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>{title}</h2>
          {closeButton && (
            <button 
              className="modal-close"
              onClick={onClose}
              aria-label="Fechar modal"
            >
              ✕
            </button>
          )}
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  )
}

export function useModal() {
  const [isOpen, setIsOpen] = useState(false)

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen(!isOpen)
  }
}
