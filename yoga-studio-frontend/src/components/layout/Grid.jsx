import './Grid.css'

export function Grid({ 
  children, 
  cols = 3, 
  gap = 'md',
  className = '',
  ...props 
}) {
  return (
    <div 
      className={`grid grid-cols-${cols} grid-gap-${gap} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
