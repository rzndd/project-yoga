import React, { useState } from 'react'
import { useYoga } from '../../context/YogaContext'
import { Container, Grid } from '../../components/layout'
import { Card, CardBody, CardFooter, Button, Loading, ErrorMessage, Modal, useModal } from '../../components/common'
import { HeroSection } from '../../components/sections'
import { BookingForm } from '../../components/forms'
import { formatCurrency } from '../../utils'
import './Memberships.css'

export function Memberships() {
  const { memberships, loading, error, refetchData } = useYoga()
  const [selectedMembership, setSelectedMembership] = useState(null)
  const modal = useModal()

  const handleSelectMembership = (membership) => {
    setSelectedMembership(membership)
    modal.open()
  }

  const handleBooking = async (formData) => {
    // Simula envio para API - em produção, usar yogaService.createBooking(formData)
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  if (loading) return <Loading message="Buscando os melhores planos..." />
  if (error) return <ErrorMessage message={error} onRetry={refetchData} />

  return (
    <>
      <HeroSection 
        title="Nossos Planos"
        subtitle="Invista no seu bem-estar. Escolha o plano ideal para a sua jornada."
      />

      <Container className="memberships-container">
        <Grid cols={3} gap="lg">
          {memberships?.map(membership => (
            <MembershipCard 
              key={membership.id} 
              membership={membership}
              onSelect={() => handleSelectMembership(membership)}
            />
          ))}
        </Grid>
      </Container>

      {selectedMembership && (
        <Modal 
          isOpen={modal.isOpen}
          onClose={modal.close}
          title={`Contratar ${selectedMembership.name}`}
          size="md"
        >
          <BookingForm 
            item={selectedMembership}
            itemType="membership"
            onSubmit={handleBooking}
            onClose={modal.close}
          />
        </Modal>
      )}
    </>
  )
}

function MembershipCard({ membership, onSelect }) {
  const featured = membership.featured || false
  
  return (
    <Card className={featured ? 'featured' : ''}>
      <CardBody>
        <h3>{membership.name}</h3>
        <div className="membership-price">
          {formatCurrency(membership.price)}
          <span className="period">/{membership.duration}d</span>
        </div>
        <ul className="membership-features">
          {membership.features?.map((feature, idx) => (
            <li key={idx}>
              <span className="check">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </CardBody>
      <CardFooter>
        <Button 
          variant={featured ? 'primary' : 'outline'}
          className="btn-block"
          onClick={onSelect}
        >
          Contratar Agora
        </Button>
      </CardFooter>
    </Card>
  )
}
