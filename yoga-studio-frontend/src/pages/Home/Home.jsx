import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../components/layout'
import { Loading, ErrorMessage, Button } from '../../components/common'
import { useYoga } from '../../context/YogaContext'
import './Home.css'

export function Home() {
  const { classes, instructors, loading, error, refetchData } = useYoga()

  if (loading) return <Loading message="Preparando seu espaço de paz..." emoji="🧘" />
  if (error) return <ErrorMessage message={error} onRetry={refetchData} />

  return (
    <div className="home-page">
      <section className="hero-home">
        <div className="hero-home-content">
          <h1>🧘 Bem-vindo ao Serenity Yoga</h1>
          <p className="hero-subtitle">
            Encontre paz, equilíbrio e bem-estar. Sua jornada de transformação começa aqui.
          </p>
          <div className="hero-cta-buttons">
            <Link to="/classes">
              <Button variant="primary" size="lg">Conhecer Aulas</Button>
            </Link>
            <Link to="/schedule">
              <Button variant="outline" size="lg">Ver Horários</Button>
            </Link>
          </div>
        </div>
      </section>

      <Container className="home-container">
        <section className="stats-section">
          <div className="stat-card">
            <h3>{classes?.length || 0}+</h3>
            <p>Modalidades de Yoga</p>
          </div>
          <div className="stat-card">
            <h3>{instructors?.length || 0}</h3>
            <p>Instrutores Certificados</p>
          </div>
          <div className="stat-card">
            <h3>500+</h3>
            <p>Alunos Transformados</p>
          </div>
          <div className="stat-card">
            <h3>98%</h3>
            <p>Satisfação</p>
          </div>
        </section>

        <section className="features-section">
          <h2>Por que escolher o Serenity Yoga?</h2>
          <p className="section-subtitle">
            Cada detalhe foi pensado para proporcionar a melhor experiência na sua prática
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Aulas para Todos os Níveis</h3>
              <p>Do iniciante ao avançado, temos a prática perfeita para você</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👩‍🏫</div>
              <h3>Instrutores Experientes</h3>
              <p>Profissionais certificados internacionalmente e apaixonados pelo que fazem</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏡</div>
              <h3>Ambiente Acolhedor</h3>
              <p>Um espaço tranquilo e inspirador para sua transformação</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Horários Flexíveis</h3>
              <p>Aulas manhã, tarde e noite para encaixar na sua rotina</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Pronto para começar sua jornada?</h2>
          <p>Sua primeira aula é por nossa conta. Venha experimentar!</p>
          <Link to="/memberships">
            <Button variant="primary" size="lg">Agendar Aula Experimental</Button>
          </Link>
        </section>
      </Container>
    </div>
  )
}
