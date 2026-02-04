import { useState } from 'react'
import ClassCard from '../components/ClassCard'
import './Classes.css'

const mockClasses = [
  {
    id: 1,
    name: 'Hatha Yoga',
    level: 'Iniciante',
    instructor: 'Marina',
    description: 'Aula clássica focada em posições básicas e respiração',
    duration: 60,
    capacity: 20,
    image: 'https://via.placeholder.com/300x200?text=Hatha'
  },
  {
    id: 2,
    name: 'Vinyasa Flow',
    level: 'Intermediário',
    instructor: 'Carlos',
    description: 'Sequências fluidas e dinâmicas sincronizadas com a respiração',
    duration: 75,
    capacity: 25,
    image: 'https://via.placeholder.com/300x200?text=Vinyasa'
  },
  {
    id: 3,
    name: 'Yin Yoga',
    level: 'Iniciante',
    instructor: 'Sofia',
    description: 'Relaxamento profundo com posturas mantidas por longos períodos',
    duration: 90,
    capacity: 15,
    image: 'https://via.placeholder.com/300x200?text=YinYoga'
  },
  {
    id: 4,
    name: 'Power Yoga',
    level: 'Avançado',
    instructor: 'Rafael',
    description: 'Prática intensa focada em força e flexibilidade',
    duration: 60,
    capacity: 20,
    image: 'https://via.placeholder.com/300x200?text=PowerYoga'
  }
]

export default function Classes() {
  const [selectedLevel, setSelectedLevel] = useState('Todos')
  
  const filteredClasses = selectedLevel === 'Todos' 
    ? mockClasses 
    : mockClasses.filter(c => c.level === selectedLevel)

  return (
    <div className="classes">
      <h2>Nossas Aulas</h2>
      
      <div className="filter-section">
        <h3>Filtrar por Nível</h3>
        <div className="filter-buttons">
          {['Todos', 'Iniciante', 'Intermediário', 'Avançado'].map(level => (
            <button
              key={level}
              className={`filter-btn ${selectedLevel === level ? 'active' : ''}`}
              onClick={() => setSelectedLevel(level)}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div className="classes-grid">
        {filteredClasses.map(classItem => (
          <ClassCard key={classItem.id} classData={classItem} />
        ))}
      </div>
    </div>
  )
}
