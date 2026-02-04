import './Input.css'

export function Input({
  label,
  error,
  touched,
  className = '',
  ...props
}) {
  const showError = error && (touched === undefined || touched)
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <input
        className={`form-input ${showError ? 'is-invalid' : ''} ${className}`}
        {...props}
      />
      {showError && <span className="form-error">{error}</span>}
    </div>
  )
}

export function Select({
  label,
  options,
  error,
  touched,
  className = '',
  ...props
}) {
  const showError = error && (touched === undefined || touched)
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <select
        className={`form-input ${showError ? 'is-invalid' : ''} ${className}`}
        {...props}
      >
        <option value="">Selecione...</option>
        {options?.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {showError && <span className="form-error">{error}</span>}
    </div>
  )
}

export function Textarea({
  label,
  error,
  touched,
  className = '',
  ...props
}) {
  const showError = error && (touched === undefined || touched)
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <textarea
        className={`form-input ${showError ? 'is-invalid' : ''} ${className}`}
        {...props}
      />
      {showError && <span className="form-error">{error}</span>}
    </div>
  )
}
