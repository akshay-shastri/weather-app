import { useState } from 'react'
import './SearchBar.css'

function SearchBar({ onSearch, loading }) {
  const [city, setCity] = useState('')

  const handleSearch = () => {
    onSearch(city)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={loading}
      />
    </div>
  )
}

export default SearchBar
