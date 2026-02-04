import MembershipCard from '../components/MembershipCard'
import './Memberships.css'

const memberships = [
  {
    id: 1,
    name: 'Aula Avulsa',
    price: '50',
    period: 'aula',
    features: [
      'Acesso a 1 aula',
      'Todas as modalidades',
      'Válido por 30 dias'
    ],
    popular: false
  },
  {
    id: 2,
    name: 'Mensal',
    price: '150',
    period: 'mês',
    features: [
      'Aulas ilimitadas',
      'Acesso a todas modalidades',
      'Acesso ao estúdio',
      'Suporte prioritário'
    ],
    popular: true
  },
  {
    id: 3,
    name: 'Trimestral',
    price: '400',
    period: '3 meses',
    features: [
      'Aulas ilimitadas',
      'Acesso a todas modalidades',
      'Acesso ao estúdio',
      'Suporte prioritário',
      '15% de desconto'
    ],
    popular: false
  },
  {
    id: 4,
    name: 'Anual',
    price: '1.200',
    period: 'ano',
    features: [
      'Aulas ilimitadas',
      'Acesso a todas modalidades',
      'Acesso ao estúdio',
      'Suporte prioritário',
      '25% de desconto',
      'Aula particular gratuita'
    ],
    popular: false
  }
]

export default function Memberships() {
  return (
    <div className="memberships">
      <h2>Nossos Planos</h2>
      <p className="subtitle">Escolha o plano que melhor se adequa a você</p>
      
      <div className="memberships-grid">
        {memberships.map(membership => (
          <MembershipCard key={membership.id} membership={membership} />
        ))}
      </div>

      <section className="faq">
        <h3>Dúvidas Frequentes</h3>
        <div className="faq-items">
          <div className="faq-item">
            <h4>Posso cancelar meu plano?</h4>
            <p>Sim! Você pode cancelar a qualquer momento sem multa.</p>
          </div>
          <div className="faq-item">
            <h4>Há diferença entre horários?</h4>
            <p>Não, com qualquer plano você acessa todas as aulas em qualquer horário.</p>
          </div>
          <div className="faq-item">
            <h4>Primeira aula é gratuita?</h4>
            <p>Sim! Novos membros têm direito a uma aula experimental gratuita.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
