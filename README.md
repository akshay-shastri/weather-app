# 🌤️ Cinematic Weather Dashboard

A modern, immersive full-screen weather application built with React and Vite featuring dynamic backgrounds and premium UI design.

## ✨ Features

- 🖼️ **Full-screen cinematic layout** with dynamic background images
- 🎨 **Weather-based backgrounds** (sunny, rainy, cloudy, night, snowy)
- 🔍 **Interactive search bar** with animated focus effects
- 🌡️ **Large temperature display** with floating weather icon
- ⏰ **Hourly temperature timeline** with horizontal scroll
- 📅 **7-day forecast strip** with glassmorphism cards
- ✨ **Smooth animations** and hover effects
- 📱 **Fully responsive** design
- 🎯 **Clean component architecture**

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Weatherstack API key

### Installation

1. **Navigate to project:**
   ```bash
   cd weather-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment setup:**
   - `.env` file already configured
   - Format: `VITE_WEATHER_API_KEY=your_key_here`

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Open browser:**
   - Go to `http://localhost:5173`

## 📁 Project Structure

```
weather-app/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── SearchBar.css
│   │   ├── CurrentWeather.jsx
│   │   ├── CurrentWeather.css
│   │   ├── HourlyTimeline.jsx
│   │   ├── HourlyTimeline.css
│   │   ├── ForecastStrip.jsx
│   │   └── ForecastStrip.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .env
└── README.md
```

## 🎨 Dynamic Backgrounds

The app automatically changes backgrounds based on weather:

- **Sunny/Clear** → Bright sky image
- **Rainy** → Rain scene
- **Cloudy** → Overcast sky
- **Night** → Night sky
- **Snowy** → Snow scene
- **Default** → Purple gradient

Background images are fetched from Unsplash and transition smoothly (0.8s ease).

## 🧩 Components

### SearchBar
- Animated input with focus glow
- Search button with hover scale
- Enter key support
- Prevents empty searches

### CurrentWeather
- Large 7rem temperature display
- Floating weather icon animation
- City name and country
- Humidity, wind, cloud stats with glassmorphism

### HourlyTimeline
- 24-hour temperature forecast
- Horizontal scrollable
- Current hour highlighted
- Hover lift effect

### ForecastStrip
- 7-day forecast cards
- Glassmorphism design
- Max/min temperatures
- Hover animations (lift + shadow)
- Today card highlighted

## 🎭 Animations

- **Fade in** - Weather data appears
- **Float** - Main weather icon
- **Slide in** - Hourly timeline
- **Slide up** - Forecast strip
- **Hover effects** - All interactive elements
- **Scale transform** - Buttons on hover

## 🔧 Technologies

- React 18
- Vite
- Weatherstack API
- CSS3 (Glassmorphism, Animations)
- JavaScript ES6+

## 📱 Responsive Design

- Desktop: Full layout
- Mobile: Scrollable strips, adjusted font sizes

## 🌐 API Integration

- Endpoint: `https://api.weatherstack.com/current`
- Environment variable: `VITE_WEATHER_API_KEY`
- Error handling for failed requests
- Loading spinner during fetch

## 🎯 Key Features

1. **Full-screen immersive UI** (100vh/100vw)
2. **Dynamic backgrounds** with smooth transitions
3. **Glassmorphism effects** (backdrop-filter blur)
4. **Smooth 0.3s transitions** on all interactions
5. **Pointer cursor** on interactive elements
6. **Mock forecast data** for UI demonstration

---

**Built with ❤️ using React + Vite**
