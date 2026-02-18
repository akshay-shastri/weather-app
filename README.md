# 🌤️ Cinematic Weather Dashboard

A modern, visually immersive weather application built with React and Vite. Experience weather like never before with dynamic backgrounds, glassmorphism design, and smooth animations that adapt to real-time conditions.

**Live Demo**: [Add your deployed link here]

---

## ✨ Features

### 🎨 Visual Design
- **Cinematic Full-Screen UI** - Immersive weather dashboard with dynamic backgrounds
- **Glassmorphism Design** - Modern frosted glass containers with backdrop blur effects
- **Weather-Based Backgrounds** - Automatic background changes based on current conditions (sunny, rainy, cloudy, night, snowy)
- **Smooth Animations** - Staggered fade-ins, floating icons, and interactive hover effects
- **Responsive Layout** - Fully mobile-optimized with adaptive design

### 🌡️ Weather Features
- **Real-Time Weather Data** - Fetch current weather using Weatherstack API
- **Current Weather Display** - Large temperature display, weather description, and condition icon
- **Hourly Timeline** - 24-hour forecast with smooth horizontal scrolling
- **7-Day Forecast** - Weekly weather prediction with max/min temperatures
- **Weather Metrics** - Humidity, wind speed, and cloud coverage
- **Current Hour Highlight** - Automatically marks the current hour in the timeline

### ⚡ User Experience
- **City Search** - Smooth search functionality with Enter key support
- **Loading Indicator** - Animated spinner during data fetch
- **Error Handling** - Graceful error messages for failed requests
- **Optimized Performance** - Efficient rendering and smooth transitions
- **No External UI Libraries** - Pure CSS with custom animations

---

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.3.1
- **Styling**: Pure CSS (Glassmorphism + Custom Animations)
- **Weather API**: Weatherstack
- **Package Manager**: npm
- **Version Control**: Git & GitHub

---

## 📸 Screenshots

Add screenshots of your weather dashboard here:

```
![Dashboard Search](./screenshots/search.png)
![Weather Display](./screenshots/weather.png)
![Forecast Timeline](./screenshots/forecast.png)
```

**Note**: Create a `screenshots` folder in your project root and add images for documentation.

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js 16+ and npm installed
- Weatherstack API key (free tier available)

### Step 1: Clone Repository
```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Set Up Environment Variables
Create a `.env` file in the project root:

```env
VITE_WEATHER_API_KEY=your_weatherstack_api_key_here
```

**How to get your API Key:**
1. Visit [Weatherstack](https://weatherstack.com/)
2. Sign up for a free account
3. Navigate to your dashboard and copy your API key
4. Paste it in the `.env` file

### Step 4: Run Development Server
```bash
npm run dev
```

The app will launch at `http://localhost:5173`

---

## 📦 Project Structure

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
│   ├── assets/
│   │   └── search-bg.jpg
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── .env
├── .gitignore
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## 🔧 Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot module reloading.

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing.

### Lint Code
```bash
npm run lint
```
Runs ESLint to check code quality.

---

## 🌐 Deployment

### Deploy on Vercel

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import Project on Vercel**
   - Visit [Vercel](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Add Environment Variables**
   - In Vercel dashboard, go to "Settings" → "Environment Variables"
   - Add: `VITE_WEATHER_API_KEY` with your API key
   - Click "Save"

4. **Deploy**
   - Vercel automatically deploys on push
   - Your app is live! 🎉

### Deploy on Netlify

1. **Connect Repository**
   - Visit [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub and authorize

2. **Build Settings**
   - Build Command: `npm run build`
   - Publish Directory: `dist`

3. **Environment Variables**
   - Go to "Site Settings" → "Build & Deploy" → "Environment"
   - Add: `VITE_WEATHER_API_KEY=your_key`
   - Trigger a new deploy

---

## 🎯 Usage

1. **Search for a City**
   - Type a city name in the search box
   - Press Enter or click search
   - Weather dashboard loads with animations

2. **View Current Weather**
   - Large temperature display in the center
   - Weather icon and description
   - Additional metrics (humidity, wind, clouds)

3. **Check Hourly Forecast**
   - Scroll through 24 hours of weather
   - Current hour highlighted with glow effect
   - Hover for interactive effects

4. **View Weekly Forecast**
   - Scroll through 7-day forecast
   - Today's card highlighted
   - Click for interactive feedback

---

## 🚀 Future Improvements

- [ ] **Dark Mode** - Toggle between light and dark themes
- [ ] **Geolocation** - Auto-detect user location on first load
- [ ] **Weather Animations** - Animated rain, snow, and cloud effects
- [ ] **PWA Support** - Install as progressive web app
- [ ] **Units Toggle** - Switch between Celsius and Fahrenheit
- [ ] **Recent Searches** - Save and quick-access previous searches
- [ ] **Extended Forecast** - 30-day weather prediction
- [ ] **Weather Alerts** - Notifications for severe weather
- [ ] **Map Integration** - Interactive weather map
- [ ] **Multiple Locations** - Compare weather across cities

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🐛 Reported Issues & Bug Fixes

If you encounter any issues:

1. Check if the `.env` file is properly configured
2. Verify your Weatherstack API key is valid
3. Ensure Node.js version is 16 or higher
4. Clear browser cache and hard refresh
5. Open an issue on GitHub with detailed description

---

## 📞 Contact & Support

- **Author**: Your Name
- **Email**: your.email@example.com
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Portfolio**: [yourportfolio.com](https://yourportfolio.com)

---

## 🙏 Acknowledgments

- **Weatherstack API** - For reliable weather data
- **Unsplash** - For beautiful background images
- **React & Vite Teams** - For amazing tools and documentation

---

**Made with ❤️ by [Your Name]**
