import './Schedule.css'

export default function Schedule() {
  const schedule = {
    'Segunda': [
      { time: '08:00', class: 'Hatha Yoga', instructor: 'Marina' },
      { time: '10:00', class: 'Vinyasa Flow', instructor: 'Carlos' },
      { time: '18:30', class: 'Yin Yoga', instructor: 'Sofia' }
    ],
    'Terça': [
      { time: '06:00', class: 'Power Yoga', instructor: 'Rafael' },
      { time: '09:00', class: 'Hatha Yoga', instructor: 'Marina' },
      { time: '19:00', class: 'Vinyasa Flow', instructor: 'Carlos' }
    ],
    'Quarta': [
      { time: '08:00', class: 'Yin Yoga', instructor: 'Sofia' },
      { time: '17:00', class: 'Power Yoga', instructor: 'Rafael' }
    ],
    'Quinta': [
      { time: '07:00', class: 'Hatha Yoga', instructor: 'Marina' },
      { time: '10:00', class: 'Vinyasa Flow', instructor: 'Carlos' },
      { time: '18:30', class: 'Yin Yoga', instructor: 'Sofia' }
    ],
    'Sexta': [
      { time: '08:00', class: 'Power Yoga', instructor: 'Rafael' },
      { time: '18:00', class: 'Hatha Yoga', instructor: 'Marina' }
    ],
    'Sábado': [
      { time: '09:00', class: 'Vinyasa Flow', instructor: 'Carlos' },
      { time: '11:00', class: 'Yin Yoga', instructor: 'Sofia' }
    ],
    'Domingo': [
      { time: '10:00', class: 'Hatha Yoga', instructor: 'Marina' }
    ]
  }

  return (
    <div className="schedule">
      <h2>Horário de Aulas</h2>
      <p className="schedule-subtitle">Confira nossos horários semanais</p>
      
      <div className="schedule-table">
        {Object.entries(schedule).map(([day, classes]) => (
          <div key={day} className="day-schedule">
            <h3>{day}</h3>
            <div className="classes-list">
              {classes.map((cls, index) => (
                <div key={index} className="schedule-item">
                  <span className="time">{cls.time}</span>
                  <div className="class-details">
                    <p className="class-name">{cls.class}</p>
                    <p className="instructor">com {cls.instructor}</p>
                  </div>
                  <button className="btn-reserve-small">Reservar</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
