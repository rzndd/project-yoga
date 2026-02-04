import './MembershipCard.css'

export default function MembershipCard({ membership }) {
  return (
    <div className={`membership-card ${membership.popular ? 'popular' : ''}`}>
      {membership.popular && <div className="popular-badge">Mais Popular</div>}
      <h3>{membership.name}</h3>
      <div className="price">
        <span className="amount">R$ {membership.price}</span>
        <span className="period">/{membership.period}</span>
      </div>
      <ul className="features">
        {membership.features.map((feature, index) => (
          <li key={index}>✓ {feature}</li>
        ))}
      </ul>
      <button className={`btn-subscribe ${membership.popular ? 'popular' : ''}`}>
        Escolher Plano
      </button>
    </div>
  )
}
