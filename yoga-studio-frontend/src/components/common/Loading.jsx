import './Loading.css'

export function Loading({ message = 'Carregando...' }) {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>{message}</p>
    </div>
  )
}

export function LoadingButton() {
  return (
    <span className="loading-spinner-small"></span>
  )
}
