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
          {instructor.specialty}
        </p>
        <p className="bio">{instructor.bio}</p>
        {instructor.experience && (
          <p className="experience">
            <strong>Experiência:</strong> {instructor.experience} anos
          </p>
        )}
        {instructor.certifications && instructor.certifications.length > 0 && (
          <div className="certifications">
            <p><strong>Certificações:</strong></p>
            <ul>
              {instructor.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
