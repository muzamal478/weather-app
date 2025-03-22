# Weather App

## Project Overview

**Title**: Weather App

**Purpose**: A simple, responsive web application that fetches and displays real-time weather data for any city using the OpenWeatherMap API. The app features a professional, user-friendly UI design and is built with HTML, CSS, and JavaScript.

**Skills Used**: HTML, CSS, JavaScript, API Integration (OpenWeatherMap API)

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

## How to Use the App
1. Open the `weather-app.html` file in your browser.
2. Enter a city name in the search field and press Enter or click the search button.
3. View the real-time weather details for that city.
