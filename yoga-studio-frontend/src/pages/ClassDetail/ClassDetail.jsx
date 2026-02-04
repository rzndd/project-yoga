import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useYoga } from '../../context/YogaContext'
import { Container } from '../../components/layout'
import { Card, CardBody, CardFooter, Button, Modal, useModal, Loading } from '../../components/common'
import { BookingForm } from '../../components/forms'
import { HeroSection } from '../../components/sections'
import './ClassDetail.css'

export function ClassDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { classes } = useYoga()
  const modal = useModal()
  
  const classItem = classes?.find(c => c.id === parseInt(id))

  if (!classItem) {
    return (
      <Container>
        <div className="not-found">
          <h2>Aula não encontrada</h2>
          <Button onClick={() => navigate('/classes')}>
            Voltar para Aulas
          </Button>
        </div>
      </Container>
    )
  }

  const handleBooking = async (formData) => {
    // Simula envio para API - em produção, usar yogaService.createBooking(formData)
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  return (
    <>
      <HeroSection 
        title={classItem.name}
        subtitle={classItem.description}
      />

      <Container className="class-detail-container">
        <div className="detail-grid">
          <div className="detail-main">
            <Card>
              <CardBody>
                <div className="detail-info">
                  <h3>Informações da Aula</h3>
                  
                  <InfoItem label="Duração" value={`${classItem.duration} minutos`} />
                  <InfoItem label="Nível" value={classItem.level} />
                  <InfoItem label="Instrutor" value={classItem.instructor} />
                  {classItem.capacity && (
                    <InfoItem label="Capacidade" value={`${classItem.capacity} alunos`} />
                  )}
                  {classItem.price && (
                    <InfoItem 
                      label="Valor" 
                      value={`R$ ${classItem.price}`}
                      highlight 
                    />
                  )}

                  <div className="description-section">
                    <h4>Descrição Completa</h4>
                    <p>{classItem.description}</p>
                  </div>

                  {classItem.benefits && (
                    <div className="benefits-section">
                      <h4>Benefícios</h4>
                      <ul className="benefits-list">
                        {classItem.benefits.map((benefit, idx) => (
                          <li key={idx}>
                            <span className="benefit-icon">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardBody>

              <CardFooter>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/classes')}
                >
                  Voltar
                </Button>
                <Button 
                  variant="primary"
                  onClick={modal.open}
                >
                  Inscrever-se
                </Button>
              </CardFooter>
            </Card>
          </div>

          <aside className="detail-sidebar">
            <Card>
              <CardBody className="sidebar-cta">
                <h3>Pronto para começar?</h3>
                <p>Inscreva-se agora e comece sua jornada no yoga</p>
                <Button 
                  variant="primary"
                  className="btn-block"
                  onClick={modal.open}
                >
                  Inscrever-se Agora
                </Button>
              </CardBody>
            </Card>

            {classItem.schedule && (
              <Card>
                <CardBody>
                  <h4>Horários</h4>
                  <ul className="schedule-list">
                    {Array.isArray(classItem.schedule) ? 
                      classItem.schedule.map((time, idx) => (
                        <li key={idx}>{time}</li>
                      )) : 
                      <li>{classItem.schedule}</li>
                    }
                  </ul>
                </CardBody>
              </Card>
            )}
          </aside>
        </div>
      </Container>

      <Modal 
        isOpen={modal.isOpen}
        onClose={modal.close}
        title="Inscrever-se na Aula"
        size="md"
      >
        <BookingForm 
          item={classItem}
          itemType="class"
          onSubmit={handleBooking}
          onClose={modal.close}
        />
      </Modal>
    </>
  )
}

function InfoItem({ label, value, highlight = false }) {
  return (
    <div className={`info-item ${highlight ? 'highlight' : ''}`}>
      <strong className="info-label">{label}:</strong>
      <span className="info-value">{value}</span>
    </div>
  )
}
