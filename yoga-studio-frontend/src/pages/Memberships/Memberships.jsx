import React, { useState } from 'react'
import { useYoga } from '../../context/YogaContext'
import { Container, Grid } from '../../components/layout'
import { Card, CardBody, CardFooter, Button, Loading, Modal, useModal } from '../../components/common'
import { HeroSection } from '../../components/sections'
import { BookingForm } from '../../components/forms'
import { formatCurrency } from '../../utils'
import './Memberships.css'

export function Memberships() {
  const { memberships, loading, error } = useYoga()
  const [selectedMembership, setSelectedMembership] = useState(null)
  const modal = useModal()

  const handleSelectMembership = (membership) => {
    setSelectedMembership(membership)
    modal.open()
  }

  const handleBooking = async (formData) => {
    console.log('Booking:', formData)
    // await yogaService.createBooking(formData)
  }

  if (loading) return <Loading message="Carregando planos..." />
  if (error) return <div className="error-message">Erro ao carregar: {error}</div>

  return (
    <>
      <HeroSection 
        title="Planos de Memberships"
        subtitle="Encontre o plano perfeito para você"
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
