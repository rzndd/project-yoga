import './ErrorMessage.css'

export function ErrorMessage({ 
  title = 'Ops! Algo deu errado', 
  message,
  onRetry 
}) {
  return (
    <div className="error-message-container">
      <div className="error-icon">😕</div>
      <h2 className="error-title">{title}</h2>
      <p className="error-text">
        {message || 'Não conseguimos carregar as informações. Por favor, tente novamente.'}
      </p>
      {onRetry && (
        <button className="error-retry-btn" onClick={onRetry}>
          Tentar novamente
        </button>
      )}
    </div>
  )
}
