import './HourlyTimeline.css'

function HourlyTimeline({ weather }) {
  const currentHour = new Date().getHours()
  
  const generateHourlyData = () => {
    const hours = []
    const baseTemp = weather.current.temperature
    
    for (let i = 0; i < 24; i++) {
      const hour = (currentHour + i) % 24
      const variation = Math.sin(i / 3) * 3
      hours.push({
        hour: hour,
        temp: Math.round(baseTemp + variation),
        isCurrent: i === 0
      })
    }
    return hours
  }

  const hourlyData = generateHourlyData()

  return (
    <div className="hourly-timeline">
      {hourlyData.map((data, index) => (
        <div 
          key={index} 
          className={`hour-item ${data.isCurrent ? 'current' : ''}`}
        >
          <div className="hour-time">
            {data.hour.toString().padStart(2, '0')}:00
          </div>
          <div className="hour-temp">{data.temp}°</div>
        </div>
      ))}
    </div>
  )
}

export default HourlyTimeline
