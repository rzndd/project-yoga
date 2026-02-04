import './InstructorCard.css'

export default function InstructorCard({ instructor }) {
  return (
    <div className="instructor-card">
      <div className="instructor-image">
        <img src={instructor.image || 'https://via.placeholder.com/200'} alt={instructor.name} />
      </div>
      <div className="instructor-info">
        <h3>{instructor.name}</h3>
        <p className="specialties">
          {instructor.specialties.join(', ')}
        </p>
        <p className="bio">{instructor.bio}</p>
        <div className="class-schedule">
          <p><strong>Aulas:</strong></p>
          <ul>
            {instructor.classes.map((cls, index) => (
              <li key={index}>{cls}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
