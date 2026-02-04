import './Input.css'

export function Input({
  label,
  error,
  touched,
  className = '',
  ...props
}) {
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <input
        className={`form-input ${error && touched ? 'is-invalid' : ''} ${className}`}
        {...props}
      />
      {error && touched && <span className="form-error">{error}</span>}
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
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <select
        className={`form-input ${error && touched ? 'is-invalid' : ''} ${className}`}
        {...props}
      >
        <option value="">Selecione...</option>
        {options?.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && touched && <span className="form-error">{error}</span>}
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
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <textarea
        className={`form-input ${error && touched ? 'is-invalid' : ''} ${className}`}
        {...props}
      />
      {error && touched && <span className="form-error">{error}</span>}
    </div>
  )
}
