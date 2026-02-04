import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useYoga } from '../../context/YogaContext'
import { Container, Grid } from '../../components/layout'
import { Card, CardBody, CardFooter, Button, Modal, useModal } from '../../components/common'
import { BookingForm } from '../../components/forms'
import { HeroSection } from '../../components/sections'
import './InstructorDetail.css'

export function InstructorDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { instructors, classes } = useYoga()
  const modal = useModal()

  const instructor = instructors?.find(i => i.id === parseInt(id))
  const instructorClasses = classes?.filter(c => c.instructor === instructor?.name)

  if (!instructor) {
    return (
      <Container>
        <div className="not-found">
          <h2>Instrutor não encontrado</h2>
          <Button onClick={() => navigate('/instructors')}>
            Voltar para Instrutores
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
        title={instructor.name}
        subtitle={instructor.specialty}
      />

      <Container className="instructor-detail-container">
        <div className="detail-grid">
          <div className="instructor-header">
            {instructor.image && (
              <div className="instructor-image-large">
                <img src={instructor.image} alt={instructor.name} />
              </div>
            )}
            
            <Card>
              <CardBody>
                <h2>{instructor.name}</h2>
                <p className="specialty">{instructor.specialty}</p>
                
                {instructor.bio && (
                  <div className="bio-section">
                    <h3>Sobre</h3>
                    <p>{instructor.bio}</p>
                  </div>
                )}

                {instructor.experience && (
                  <InfoItem 
                    label="Experiência" 
                    value={`${instructor.experience} anos`}
                  />
                )}

                {instructor.certifications && (
                  <div className="certifications">
                    <h3>Certificações</h3>
                    <ul>
                      {instructor.certifications.map((cert, idx) => (
                        <li key={idx}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardBody>

              <CardFooter>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/instructors')}
                >
                  Voltar
                </Button>
                <Button 
                  variant="primary"
                  onClick={modal.open}
                >
                  Contatar
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {instructorClasses && instructorClasses.length > 0 && (
          <div className="classes-section">
            <h2>Aulas de {instructor.name}</h2>
            <Grid cols={3} gap="lg">
              {instructorClasses.map(cls => (
                <Card key={cls.id}>
                  <CardBody>
                    <h4>{cls.name}</h4>
                    <p className="class-duration">{cls.duration} min</p>
                    <p>{cls.description}</p>
                  </CardBody>
                  <CardFooter>
                    <Button 
                      variant="outline"
                      onClick={() => navigate(`/classes/${cls.id}`)}
                    >
                      Ver Detalhes
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </Grid>
          </div>
        )}
      </Container>

      <Modal 
        isOpen={modal.isOpen}
        onClose={modal.close}
        title={`Contatar ${instructor.name}`}
        size="md"
      >
        <BookingForm 
          item={instructor}
          itemType="instructor"
          onSubmit={handleBooking}
          onClose={modal.close}
        />
      </Modal>
    </>
  )
}

function InfoItem({ label, value }) {
  return (
    <div className="info-item">
      <strong>{label}:</strong>
      <span>{value}</span>
    </div>
  )
}
