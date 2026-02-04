import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useYoga } from '../../context/YogaContext'
import { Container, Grid } from '../../components/layout'
import { Card, CardBody, CardFooter, Button, Loading } from '../../components/common'
import { HeroSection } from '../../components/sections'
import { SearchFilter } from '../../components/forms'
import { truncateText } from '../../utils'
import './Classes.css'

export function Classes() {
  const navigate = useNavigate()
  const { classes, loading, error } = useYoga()
  const [filteredClasses, setFilteredClasses] = React.useState(classes || [])
  const [searchTerm, setSearchTerm] = React.useState('')

  React.useEffect(() => {
    let result = classes || []
    
    if (searchTerm) {
      result = result.filter(cls => 
        cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cls.description?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    setFilteredClasses(result)
  }, [classes, searchTerm])

  if (loading) return <Loading message="Carregando aulas..." />
  if (error) return <div className="error-message">Erro ao carregar: {error}</div>

  return (
    <>
      <HeroSection 
        title="Nossas Aulas"
        subtitle="Escolha a aula perfeita para você"
      />

      <Container className="classes-container">
        <SearchFilter 
          placeholder="Buscar aulas..."
          onSearch={setSearchTerm}
        />

        {filteredClasses.length === 0 ? (
          <div className="no-results">
            <p>Nenhuma aula encontrada para "{searchTerm}"</p>
          </div>
        ) : (
          <Grid cols={3} gap="lg">
            {filteredClasses.map(cls => (
              <ClassCard 
                key={cls.id} 
                classItem={cls}
                onViewDetails={() => navigate(`/classes/${cls.id}`)}
              />
            ))}
          </Grid>
        )}
      </Container>
    </>
  )
}

function ClassCard({ classItem, onViewDetails }) {
  return (
    <Card>
      <CardBody>
        <h3>{classItem.name}</h3>
        <p className="class-description">
          {truncateText(classItem.description, 80)}
        </p>
        <div className="class-info">
          <span className="info-badge">
            <strong>Duração:</strong> {classItem.duration} min
          </span>
          <span className="info-badge">
            <strong>Nível:</strong> {classItem.level}
          </span>
        </div>
      </CardBody>
      <CardFooter>
        <Button variant="outline" onClick={onViewDetails}>
          Ver detalhes
        </Button>
      </CardFooter>
    </Card>
  )
}
