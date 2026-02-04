import './Loading.css'

export function Loading({ message = 'Carregando...', emoji = '🧘' }) {
  return (
    <div className="loading-container">
      <div className="loading-emoji">{emoji}</div>
      <div className="loading-spinner"></div>
      <p>{message}</p>
      <span className="loading-hint">Respire fundo, estamos preparando tudo para você</span>
    </div>
  )
}

export function LoadingButton() {
  return (
    <span className="loading-spinner-small"></span>
  )
}
