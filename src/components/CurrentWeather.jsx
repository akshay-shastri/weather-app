import './CurrentWeather.css'

function CurrentWeather({ weather }) {
  return (
    <div className="current-weather">
      <div className="weather-icon-container">
        <img 
          src={weather.current.weather_icons[0]} 
          alt="Weather icon"
          className="weather-icon"
        />
      </div>
      
      <h1 className="city-name">{weather.location.name}</h1>
      <p className="country">{weather.location.country}</p>
      
      <div className="temperature">{weather.current.temperature}°</div>
      
      <p className="weather-description">
        {weather.current.weather_descriptions[0]}
      </p>
      
      <div className="weather-stats">
        <div className="stat">
          <span className="stat-icon">💧</span>
          <span className="stat-value">{weather.current.humidity}%</span>
          <span className="stat-label">Humidity</span>
        </div>
        <div className="stat">
          <span className="stat-icon">💨</span>
          <span className="stat-value">{weather.current.wind_speed} km/h</span>
          <span className="stat-label">Wind</span>
        </div>
        <div className="stat">
          <span className="stat-icon">☁️</span>
          <span className="stat-value">{weather.current.cloudcover}%</span>
          <span className="stat-label">Clouds</span>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
