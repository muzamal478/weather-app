# Weather App

## Project Overview

**Title**: Weather App

**Purpose**: A simple, responsive web application that fetches and displays real-time weather data for any city using the OpenWeatherMap API. The app features a professional, user-friendly UI design and is built with HTML, CSS, and JavaScript.

**Skills Used**: HTML, CSS, JavaScript, API Integration (OpenWeatherMap API)

**Date**: March 21, 2025

**Developed By**: Grok 3 (xAI)

## Project Goals
- Create a fully functional weather app that retrieves data from an external API.
- Design a professional, consistent, and visually appealing UI with a proper color scheme.
- Ensure responsiveness for both desktop and mobile devices.
- Eliminate all bugs and errors for a seamless user experience.
- Provide everything in a single HTML file for simplicity and ease of use.

## Features

### Real-Time Weather Data:
- Displays city name, temperature, weather description, humidity, and wind speed.
- Uses metric units (°C for temperature, m/s for wind speed).

### User Interaction:
- Search for weather by city name via a button or Enter key.
- Input field clears after each search.

### UI Design:
- Gradient background (light teal `#74ebd5` to light blue `#acb6e5`).
- White card with subtle transparency and shadow effects.
- Blue accents (`#4a90e2`) for buttons and temperature.
- Rounded corners and consistent spacing.
- Professional typography using Arial font.

### Responsive Design:
- Adapts to screen sizes (desktop and mobile).
- On mobile (below 480px):
  - Details stack vertically.
  - Adjusted font sizes and padding for better readability.

### Error Handling:
- Validates empty input with a clear message.
- Handles API errors (401 Unauthorized, 404 Not Found) with specific feedback.
- Generic error handling for other issues.

## Technical Details

### Technologies Used
- **HTML**: Structure of the app.
- **CSS**: Styling and responsive design.
- **JavaScript**: Logic, API integration, and interactivity.
- **API**: OpenWeatherMap API (endpoint: `https://api.openweathermap.org/data/2.5/weather`).

### File Structure
- Single file: `weather-app.html` (contains HTML, CSS, and JavaScript).

### Dependencies
- OpenWeatherMap API key (required for fetching weather data).
- No external libraries or frameworks (pure vanilla code).

### Color Scheme
- **Background**: Linear gradient (`#74ebd5` to `#acb6e5`).
- **Card**: White with 95% opacity (`#FFFFFF`, `rgba`).
- **Button/Accent**: Blue (`#4a90e2`, hover: `#357abd`).
- **Text**: Dark gray (`#333`), medium gray (`#666`), error red (`#e74c3c`).

## How to Use the App
1. Open the `weather-app.html` file in your browser.
2. Enter a city name in the search field and press Enter or click the search button.
3. View the real-time weather details for that city.

## License
This project is open source and available under the MIT License.
