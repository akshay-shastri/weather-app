import './ForecastStrip.css'

function ForecastStrip({ weather }) {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  
  const generateForecast = () => {
    const forecast = []
    const baseTemp = weather.current.temperature
    const today = new Date().getDay()
    
    for (let i = 0; i < 7; i++) {
      const dayIndex = (today + i) % 7
      const tempVariation = Math.random() * 6 - 3
      const maxTemp = Math.round(baseTemp + tempVariation + 2)
      const minTemp = Math.round(baseTemp + tempVariation - 2)
      
      forecast.push({
        day: days[dayIndex],
        icon: weather.current.weather_icons[0],
        maxTemp,
        minTemp,
        isToday: i === 0
      })
    }
    return forecast
  }

  const forecastData = generateForecast()

  return (
    <div className="forecast-strip">
      {forecastData.map((day, index) => (
        <div 
          key={index} 
          className={`forecast-card ${day.isToday ? 'today' : ''}`}
        >
          <div className="forecast-day">
            {day.isToday ? 'TODAY' : day.day}
          </div>
          <img 
            src={day.icon} 
            alt="Weather icon" 
            className="forecast-icon"
          />
          <div className="forecast-temps">
            <span className="max-temp">{day.maxTemp}°</span>
            <span className="min-temp">{day.minTemp}°</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ForecastStrip
