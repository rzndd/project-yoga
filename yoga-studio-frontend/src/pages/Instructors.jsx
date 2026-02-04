import InstructorCard from '../components/InstructorCard'
import './Instructors.css'

const instructors = [
  {
    id: 1,
    name: 'Marina Silva',
    specialties: ['Hatha', 'Yin Yoga'],
    bio: 'Certificada internacionalmente com 10 anos de experiência. Apaixonada por ajudar iniciantes.',
    classes: ['Hatha Yoga - Seg/Qua/Sex 08h', 'Yin Yoga - Dom 10h'],
    image: 'https://via.placeholder.com/200?text=Marina'
  },
  {
    id: 2,
    name: 'Carlos Santos',
    specialties: ['Vinyasa', 'Flow'],
    bio: 'Especialista em sequências dinâmicas. Transforma vidas através do yoga fluido.',
    classes: ['Vinyasa Flow - Seg/Qui 10h', 'Vinyasa Flow - Ter 19h'],
    image: 'https://via.placeholder.com/200?text=Carlos'
  },
  {
    id: 3,
    name: 'Sofia Costa',
    specialties: ['Yin Yoga', 'Meditação'],
    bio: 'Mestre em técnicas de relaxamento profundo. Cria ambientes de paz e tranquilidade.',
    classes: ['Yin Yoga - Seg/Qui 18h30', 'Yin Yoga - Sab 11h'],
    image: 'https://via.placeholder.com/200?text=Sofia'
  },
  {
    id: 4,
    name: 'Rafael Oliveira',
    specialties: ['Power Yoga', 'Força'],
    bio: 'Treinador especializado em yoga de força. Desafiador e motivador.',
    classes: ['Power Yoga - Ter 06h', 'Power Yoga - Qua 17h', 'Power Yoga - Sex 08h'],
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
