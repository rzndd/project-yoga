import React from 'react'
import { Container } from '../../components/layout'
import { useYoga } from '../../context/YogaContext'
import './Home.css'

export function Home() {
  const { classes, instructors, loading, error } = useYoga()

  console.log('Home renderizado', { classes, instructors, loading, error })

  if (loading) return <div style={{ padding: '2rem', textAlign: 'center' }}>Carregando...</div>
  if (error) return <div style={{ padding: '2rem', color: 'red' }}>Erro: {error}</div>

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🧘 Bem-vindo ao Yoga Studio</h1>
      <p>Encontre paz, equilíbrio e bem-estar</p>

      <Container className="home-container">
        <section className="stats-section">
          <div className="stat-card">
            <h3>{classes?.length || 0}</h3>
            <p>Aulas Diferentes</p>
          </div>
          <div className="stat-card">
            <h3>{instructors?.length || 0}</h3>
            <p>Instrutores Certificados</p>
          </div>
          <div className="stat-card">
            <h3>500+</h3>
            <p>Alunos Felizes</p>
          </div>
        </section>

        <section className="features-section">
          <h2>Por que nos escolher?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Aulas Personalizadas</h3>
              <p>Classes adaptadas para todos os níveis</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Instrutores Experientes</h3>
              <p>Profissionais certificados e dedicados</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Ambiente Acolhedor</h3>
              <p>Um espaço perfeito para sua prática</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Horários Flexíveis</h3>
              <p>Aulas em diversos horários da semana</p>
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}
