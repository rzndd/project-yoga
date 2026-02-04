import { Button } from '../common'
import './HeroSection.css'

export function HeroSection({ 
  title, 
  subtitle, 
  backgroundImage,
  cta,
  children
}) {
  return (
    <section 
      className="hero-section"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        {title && <h1 className="hero-title">{title}</h1>}
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {children}
        {cta && (
          <div className="hero-cta">
            <Button variant="primary" size="lg">
              {cta.label}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
