import { useState, useEffect, useCallback } from 'react'

export function useFetch(fetchFunction, dependencies = []) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const memoizedFetch = useCallback(fetchFunction, dependencies)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const result = await memoizedFetch()
        setData(result)
      } catch (err) {
        setError(err.message || 'Erro ao carregar dados')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [memoizedFetch])

  const refetch = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const result = await memoizedFetch()
      setData(result)
    } catch (err) {
      setError(err.message || 'Erro ao carregar dados')
    } finally {
      setLoading(false)
    }
  }, [memoizedFetch])

  return { data, loading, error, refetch }
}
