import './ClassCard.css'

export default function ClassCard({ classData }) {
  return (
    <div className="class-card">
      <div className="class-image">
        <img src={classData.image || 'https://via.placeholder.com/300x200'} alt={classData.name} />
      </div>
      <div className="class-content">
        <h3>{classData.name}</h3>
        <p className="class-level">Nível: {classData.level}</p>
        <p className="class-instructor">Instrutor: {classData.instructor}</p>
        <p className="class-description">{classData.description}</p>
        <div className="class-info">
          <span className="duration">⏱️ {classData.duration} min</span>
          <span className="participants">👥 {classData.maxParticipants} places</span>
        </div>
        <button className="btn-reserve">Reservar Aula</button>
      </div>
    </div>
  )
}
