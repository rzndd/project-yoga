import { createContext, useContext, useState, useEffect } from 'react'
import * as yogaService from '../services/yogaService'

const YogaContext = createContext()

export function YogaProvider({ children }) {
  const [classes, setClasses] = useState([])
  const [instructors, setInstructors] = useState([])
  const [memberships, setMemberships] = useState([])
  const [schedule, setSchedule] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadAllData()
  }, [])

  const loadAllData = async () => {
    try {
      setLoading(true)
      setError(null)
      const [classesData, instructorsData, membershipsData, scheduleData] = await Promise.all([
        yogaService.getClasses(),
        yogaService.getInstructors(),
        yogaService.getMemberships(),
        yogaService.getSchedule()
      ])
      setClasses(classesData)
      setInstructors(instructorsData)
      setMemberships(membershipsData)
      setSchedule(scheduleData)
    } catch (err) {
      setError(err.message)
      console.error('Erro ao carregar dados:', err)
    } finally {
      setLoading(false)
    }
  }

  const value = {
    classes,
    instructors,
    memberships,
    schedule,
    loading,
    error,
    refetchData: loadAllData
  }

  return (
    <YogaContext.Provider value={value}>
      {children}
    </YogaContext.Provider>
  )
}

export function useYoga() {
  const context = useContext(YogaContext)
  if (!context) {
    throw new Error('useYoga deve ser usado dentro de YogaProvider')
  }
  return context
}
