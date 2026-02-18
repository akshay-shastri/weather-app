import { useState } from 'react'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import HourlyTimeline from './components/HourlyTimeline'
import ForecastStrip from './components/ForecastStrip'
import searchBg from './assets/search-bg.jpg'
import './App.css'

function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchWeather = async (city) => {
    if (!city.trim()) {
      setError('Please enter a city name')
      return
    }

    setLoading(true)
    setError('')

    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY
      const response = await fetch(
        `https://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`
      )
      const data = await response.json()

      if (data.success === false) {
        setError(data.error?.info || 'Failed to fetch weather data')
        setWeather(null)
      } else if (data.current) {
        setWeather(data)
        setError('')
      } else {
        setError('City not found')
        setWeather(null)
      }
    } catch (err) {
      setError('Network error. Please try again.')
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  const getWeatherCondition = () => {
    if (!weather) return 'search'
    const desc = weather.current.weather_descriptions[0].toLowerCase()
    const isNight = weather.current.is_day === 'no'
    
    if (isNight) return 'night'
    if (desc.includes('sunny') || desc.includes('clear')) return 'sunny'
    if (desc.includes('rain') || desc.includes('drizzle')) return 'rainy'
    if (desc.includes('cloud') || desc.includes('overcast')) return 'cloudy'
    if (desc.includes('snow')) return 'snowy'
    return 'default'
  }

  return (
    <div className={`app ${getWeatherCondition()}`} style={!weather ? { backgroundImage: `url(${searchBg})` } : {}}>
      <div className="overlay"></div>
      
      <div className="content">
        <SearchBar onSearch={fetchWeather} loading={loading} />
        
        {error && <div className="error-message">{error}</div>}
        
        {loading && (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading weather data...</p>
          </div>
        )}
        
        {weather && !loading && (
          <>
            <HourlyTimeline weather={weather} />
            <CurrentWeather weather={weather} />
            <ForecastStrip weather={weather} />
          </>
        )}
      </div>
    </div>
  )
}

export default App
