import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h2>Bem-vindo à Serenity Yoga</h2>
          <p>Encontre paz, harmonia e bem-estar através do yoga</p>
          <div className="hero-buttons">
            <button className="btn-primary">Conhecer Aulas</button>
            <button className="btn-secondary">Ver Planos</button>
          </div>
        </div>
      </section>

      <section className="features">
        <h3>Por que escolher a Serenity?</h3>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🧘</span>
            <h4>Aulas Diversas</h4>
            <p>Hatha, Vinyasa, Yin Yoga e muito mais</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">👥</span>
            <h4>Instrutores Experientes</h4>
            <p>Profissionais certificados e dedicados</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🏡</span>
            <h4>Ambiente Acolhedor</h4>
            <p>Espaço tranquilo e bem equipado</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💪</span>
            <h4>Resultados Garantidos</h4>
            <p>Transformação do corpo e mente</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h3>Comece sua Jornada de Yoga Hoje!</h3>
        <p>Primeira aula gratuita para novos membros</p>
        <button className="btn-primary">Agendar Aula Gratuita</button>
      </section>
    </div>
  )
}
