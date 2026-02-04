import { useState } from 'react'
import './SearchFilter.css'

export function SearchFilter({ 
  onSearch, 
  onFilter,
  filters = {},
  placeholder = 'Buscar...'
}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilters, setActiveFilters] = useState(filters)

  const handleSearch = (e) => {
    const term = e.target.value
    setSearchTerm(term)
    onSearch?.(term)
  }

  const handleFilterChange = (filterKey, value) => {
    const newFilters = {
      ...activeFilters,
      [filterKey]: activeFilters[filterKey] === value ? null : value
    }
    setActiveFilters(newFilters)
    onFilter?.(newFilters)
  }

  return (
    <div className="search-filter">
      <div className="search-box">
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>
    </div>
  )
}
