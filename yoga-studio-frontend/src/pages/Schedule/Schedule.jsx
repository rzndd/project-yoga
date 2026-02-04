import React from 'react'
import { useYoga } from '../../context/YogaContext'
import { Container } from '../../components/layout'
import { Loading, ErrorMessage } from '../../components/common'
import { HeroSection } from '../../components/sections'
import { formatTime } from '../../utils'
import './Schedule.css'

export function Schedule() {
  const { schedule, loading, error, refetchData } = useYoga()

  if (loading) return <Loading message="Preparando sua agenda da semana..." />
  if (error) return <ErrorMessage message={error} onRetry={refetchData} />

  // Agrupar por dia da semana
  const groupedByDay = schedule?.reduce((acc, item) => {
    const day = item.day || 'Segunda'
    if (!acc[day]) acc[day] = []
    acc[day].push(item)
    return acc
  }, {})

  const daysOrder = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

  return (
    <>
      <HeroSection 
        title="Agenda de Aulas"
        subtitle="Confira nosso calendário completo"
      />

      <Container className="schedule-container">
        <div className="schedule-grid">
          {daysOrder.map(day => (
            groupedByDay?.[day] && (
              <div key={day} className="schedule-day">
                <h3 className="day-title">{day}</h3>
                <div className="classes-list">
                  {groupedByDay[day].map(cls => (
                    <ScheduleItem key={cls.id} item={cls} />
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </Container>
    </>
  )
}

function ScheduleItem({ item }) {
  return (
    <div className="schedule-item">
      <div className="time">{formatTime(item.time)}</div>
      <div className="details">
        <h4>{item.className}</h4>
        <p className="instructor">{item.instructor}</p>
      </div>
      <div className="capacity">
        {item.capacity && `${item.capacity} vagas`}
      </div>
    </div>
  )
}
