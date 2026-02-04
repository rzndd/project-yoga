// Mock data
const mockClasses = [
  { id: 1, name: 'Hatha Yoga', description: 'Aula tradicional de Hatha Yoga, perfeita para iniciantes. Trabalha postura, respiração e relaxamento.', instructor: 'Maria Silva', schedule: 'Seg-Qua 10:00', level: 'Iniciante', capacity: 20, duration: 60, price: 50 },
  { id: 2, name: 'Vinyasa Flow', description: 'Sequência dinâmica sincronizada com respiração. Ideal para quem busca movimento e energia.', instructor: 'João Santos', schedule: 'Ter-Qui 18:00', level: 'Intermediário', capacity: 15, duration: 75, price: 60 },
  { id: 3, name: 'Yin Yoga', description: 'Aula relaxante com posturas longas mantidas por vários minutos. Excelente para flexibilidade.', instructor: 'Ana Costa', schedule: 'Sáb 09:00', level: 'Todos', capacity: 25, duration: 90, price: 55 },
  { id: 4, name: 'Ashtanga Yoga', description: 'Prática rigorosa e estruturada seguindo sequências tradicionais. Desafiador e energizante.', instructor: 'Maria Silva', schedule: 'Seg-Qua 17:00', level: 'Avançado', capacity: 12, duration: 90, price: 70 }
]

const mockInstructors = [
  { id: 1, name: 'Maria Silva', specialty: 'Hatha Yoga', bio: 'Certificada internacionalmente com formação na Índia. Apaixonada por ensinar e transformar vidas através do yoga.', experience: 10, certifications: ['RYT 500', 'Yoga Alliance', 'Ayurveda'] },
  { id: 2, name: 'João Santos', specialty: 'Vinyasa Flow', bio: 'Instrutor especializado em yoga dinâmico. Combina movimento fluido com técnicas de respiração avançadas.', experience: 8, certifications: ['RYT 200', 'Power Yoga', 'Meditação'] },
  { id: 3, name: 'Ana Costa', specialty: 'Yin Yoga', bio: 'Mestra em práticas restaurativas e meditação. Traz tranquilidade e profundidade para cada aula.', experience: 12, certifications: ['RYT 500', 'Yin Yoga', 'Mindfulness'] }
]

const mockMemberships = [
  { id: 1, name: 'Básico', price: 99.90, duration: 30, features: ['8 aulas por mês', 'Acesso a modalidades básicas', 'Horários limitados'], featured: false },
  { id: 2, name: 'Intermediário', price: 179.90, duration: 30, features: ['Aulas ilimitadas', 'Acesso a todas modalidades', 'Todos os horários'], featured: true },
  { id: 3, name: 'Premium', price: 249.90, duration: 30, features: ['Aulas ilimitadas', '1 aula particular por mês', 'Acesso VIP ao estúdio', 'Suporte prioritário'], featured: false }
]

const mockSchedule = [
  { id: 1, day: 'Segunda', time: '10:00', className: 'Hatha Yoga', instructor: 'Maria Silva', capacity: 20 },
  { id: 2, day: 'Segunda', time: '17:00', className: 'Ashtanga Yoga', instructor: 'Maria Silva', capacity: 12 },
  { id: 3, day: 'Terça', time: '18:00', className: 'Vinyasa Flow', instructor: 'João Santos', capacity: 15 },
  { id: 4, day: 'Quarta', time: '10:00', className: 'Hatha Yoga', instructor: 'Maria Silva', capacity: 20 },
  { id: 5, day: 'Quarta', time: '17:00', className: 'Ashtanga Yoga', instructor: 'Maria Silva', capacity: 12 },
  { id: 6, day: 'Quinta', time: '18:00', className: 'Vinyasa Flow', instructor: 'João Santos', capacity: 15 },
  { id: 7, day: 'Sábado', time: '09:00', className: 'Yin Yoga', instructor: 'Ana Costa', capacity: 25 },
  { id: 8, day: 'Domingo', time: '18:00', className: 'Meditação', instructor: 'Ana Costa', capacity: 30 }
]

// Classes
export const getClasses = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockClasses), 500)
  })
}

export const getClass = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockClasses.find(c => c.id === Number(id))), 500)
  })
}

export const createClass = async (classData) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: Date.now(), ...classData }), 500)
  })
}

// Instructors
export const getInstructors = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockInstructors), 500)
  })
}

export const getInstructor = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockInstructors.find(i => i.id === Number(id))), 500)
  })
}

// Memberships
export const getMemberships = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockMemberships), 500)
  })
}

export const getMembership = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockMemberships.find(m => m.id === Number(id))), 500)
  })
}

// Schedule
export const getSchedule = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockSchedule), 500)
  })
}

// Bookings
export const createBooking = async (bookingData) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: Date.now(), status: 'confirmed', ...bookingData }), 500)
  })
}

export const getBookings = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([]), 500)
  })
}
