// Mock data
const mockClasses = [
  { id: 1, name: 'Hatha Yoga', description: 'Aula tradicional de Hatha', instructor: 'Maria Silva', schedule: 'Seg-Qua 10:00', level: 'Iniciante', capacity: 20 },
  { id: 2, name: 'Vinyasa Flow', description: 'Sequência dinâmica sincronizada com respiração', instructor: 'João Santos', schedule: 'Ter-Qui 18:00', level: 'Intermediário', capacity: 15 },
  { id: 3, name: 'Yin Yoga', description: 'Aula relaxante com posturas longas', instructor: 'Ana Costa', schedule: 'Sáb 09:00', level: 'Todos', capacity: 25 },
  { id: 4, name: 'Ashtanga Yoga', description: 'Prática rigorosa e estruturada', instructor: 'Maria Silva', schedule: 'Seg-Qua 17:00', level: 'Avançado', capacity: 12 }
]

const mockInstructors = [
  { id: 1, name: 'Maria Silva', specialty: 'Hatha Yoga', bio: 'Certificada internacionalmente', experience: '10 anos' },
  { id: 2, name: 'João Santos', specialty: 'Vinyasa Flow', bio: 'Instrutor especializado em yoga dinâmico', experience: '8 anos' },
  { id: 3, name: 'Ana Costa', specialty: 'Yin Yoga', bio: 'Mestra em práticas restaurativas', experience: '12 anos' }
]

const mockMemberships = [
  { id: 1, name: 'Básico', price: 99.90, classes: '8 aulas', description: 'Perfeito para começar' },
  { id: 2, name: 'Intermediário', price: 179.90, classes: 'Ilimitado', description: 'Acesso completo' },
  { id: 3, name: 'Premium', price: 249.90, classes: 'Ilimitado + 1 aula particular', description: 'Melhor valor' }
]

const mockSchedule = [
  { day: 'Segunda', classes: ['Hatha 10:00', 'Ashtanga 17:00'] },
  { day: 'Terça', classes: ['Vinyasa 18:00'] },
  { day: 'Quarta', classes: ['Hatha 10:00', 'Ashtanga 17:00'] },
  { day: 'Quinta', classes: ['Vinyasa 18:00'] },
  { day: 'Sexta', classes: ['Livre para prática'] },
  { day: 'Sábado', classes: ['Yin 09:00'] },
  { day: 'Domingo', classes: ['Meditação 18:00'] }
]

// Classes
export const getClasses = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockClasses), 500)
  })
}

export const getClass = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockClasses.find(c => c.id === id)), 500)
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
    setTimeout(() => resolve(mockInstructors.find(i => i.id === id)), 500)
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
    setTimeout(() => resolve(mockMemberships.find(m => m.id === id)), 500)
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
