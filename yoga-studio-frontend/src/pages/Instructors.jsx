import InstructorCard from '../components/InstructorCard'
import './Instructors.css'

const instructors = [
  {
    id: 1,
    name: 'Marina Silva',
    specialty: 'Hatha Yoga, Yin Yoga',
    bio: 'Certificada internacionalmente com 10 anos de experiência. Apaixonada por ajudar iniciantes.',
    experience: 10,
    certifications: ['RYT 500', 'Yoga Alliance'],
    image: 'https://via.placeholder.com/200?text=Marina'
  },
  {
    id: 2,
    name: 'Carlos Santos',
    specialty: 'Vinyasa Flow',
    bio: 'Especialista em sequências dinâmicas. Transforma vidas através do yoga fluido.',
    experience: 8,
    certifications: ['RYT 200', 'Power Yoga'],
    image: 'https://via.placeholder.com/200?text=Carlos'
  },
  {
    id: 3,
    name: 'Sofia Costa',
    specialty: 'Yin Yoga, Meditação',
    bio: 'Mestre em técnicas de relaxamento profundo. Cria ambientes de paz e tranquilidade.',
    experience: 12,
    certifications: ['RYT 500', 'Yin Yoga', 'Mindfulness'],
    image: 'https://via.placeholder.com/200?text=Sofia'
  },
  {
    id: 4,
    name: 'Rafael Oliveira',
    specialty: 'Power Yoga',
    bio: 'Treinador especializado em yoga de força. Desafiador e motivador.',
    experience: 6,
    certifications: ['RYT 200', 'Personal Training'],
    image: 'https://via.placeholder.com/200?text=Rafael'
  }
]

export default function Instructors() {
  return (
    <div className="instructors">
      <h2>Nossos Instrutores</h2>
      <p className="subtitle">Profissionais certificados e dedicados ao seu bem-estar</p>
      
      <div className="instructors-grid">
        {instructors.map(instructor => (
          <InstructorCard key={instructor.id} instructor={instructor} />
        ))}
      </div>
    </div>
  )
}
