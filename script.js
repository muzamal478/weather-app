const apiKey = 'cacfe4b2956d09fccc8757f6a594cd46'; // Replace with your OpenWeatherMap API key
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

        async function getWeather() {
            const city = document.getElementById('cityInput').value.trim();
            const weatherInfo = document.getElementById('weatherInfo');
            const errorMessage = document.getElementById('errorMessage');

            // Check if city input is empty
            if (!city) {
                showError('Please enter a city name');
                return;
            }

            try {
                // Fetch weather data from OpenWeatherMap API
                const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
                
                // Check for specific errors
                if (!response.ok) {
                    if (response.status === 401) {
                        throw new Error('Invalid API key. Please check your API key.');
                    } else if (response.status === 404) {
                        throw new Error('City not found.');
                    } else {
                        throw new Error('An error occurred while fetching weather data.');
                    }
                }

                const data = await response.json();
                
                // Display weather information
                document.getElementById('cityName').textContent = `${data.name}, ${data.sys.country}`;
                document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
                document.getElementById('description').textContent = data.weather[0].description;
                document.getElementById('humidity').textContent = `${data.main.humidity}%`;
                document.getElementById('windSpeed').textContent = `${data.wind.speed} m/s`;

                // Show weather info and hide error message
                weatherInfo.style.display = 'block';
                errorMessage.style.display = 'none';
                
                // Clear the input field
                document.getElementById('cityInput').value = '';
            } catch (error) {
                // Display the error message
                showError(error.message);
            }
        }

        function showError(message) {
            const errorMessage = document.getElementById('errorMessage');
            const weatherInfo = document.getElementById('weatherInfo');
            
            errorMessage.querySelector('p').textContent = message;
            errorMessage.style.display = 'block';
            weatherInfo.style.display = 'none';
        }

        // Add enter key support for convenience
        document.getElementById('cityInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                getWeather();
            }
        });