import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useYoga } from '../../context/YogaContext'
import { Container, Grid } from '../../components/layout'
import { Card, CardBody, Button, Loading } from '../../components/common'
import { HeroSection } from '../../components/sections'
import { SearchFilter } from '../../components/forms'
import { truncateText } from '../../utils'
import './Instructors.css'

export function Instructors() {
  const navigate = useNavigate()
  const { instructors, loading, error } = useYoga()
  const [filteredInstructors, setFilteredInstructors] = React.useState(instructors || [])
  const [searchTerm, setSearchTerm] = React.useState('')

  React.useEffect(() => {
    let result = instructors || []
    
    if (searchTerm) {
      result = result.filter(inst => 
        inst.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inst.specialty?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    setFilteredInstructors(result)
  }, [instructors, searchTerm])

  if (loading) return <Loading message="Carregando instrutores..." />
  if (error) return <div className="error-message">Erro ao carregar: {error}</div>

  return (
    <>
      <HeroSection 
        title="Nossos Instrutores"
        subtitle="Conheça os profissionais que vão guiar sua jornada"
      />

      <Container className="instructors-container">
        <SearchFilter 
          placeholder="Buscar instrutores..."
          onSearch={setSearchTerm}
        />

        {filteredInstructors.length === 0 ? (
          <div className="no-results">
            <p>Nenhum instrutor encontrado para "{searchTerm}"</p>
          </div>
        ) : (
          <Grid cols={3} gap="lg">
            {filteredInstructors.map(instructor => (
              <InstructorCard 
                key={instructor.id} 
                instructor={instructor}
                onViewProfile={() => navigate(`/instructors/${instructor.id}`)}
              />
            ))}
          </Grid>
        )}
      </Container>
    </>
  )
}

function InstructorCard({ instructor, onViewProfile }) {
  return (
    <Card>
      {instructor.image && (
        <img 
          src={instructor.image} 
          alt={instructor.name}
          className="instructor-image"
        />
      )}
      <CardBody>
        <h3>{instructor.name}</h3>
        <p className="instructor-specialty">{instructor.specialty}</p>
        <p className="instructor-bio">
          {truncateText(instructor.bio, 100)}
        </p>
      </CardBody>
      <div className="card-footer">
        <Button variant="outline" onClick={onViewProfile}>
          Ver Perfil
        </Button>
      </div>
    </Card>
  )
}
