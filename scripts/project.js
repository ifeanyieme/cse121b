const apiKey = '74197396bec3354ca932de15f887aaf9'; // Replace with your API key
const baseUrl = 'https://api.openweathermap.org/data/2.5';

async function searchWeather() {
    const locationInput = document.getElementById('locationInput').value;
    const currentWeatherElement = document.getElementById('currentWeather');
    const forecastElement = document.getElementById('forecast');
    const errorMessageElement = document.getElementById('errorMessage');

    try {
        // Fetch current weather data
        const currentWeatherData = await fetchWeatherData(`weather?q=${locationInput}`);
        displayCurrentWeather(currentWeatherData, currentWeatherElement);

        // Fetch forecast data
        const forecastData = await fetchWeatherData(`forecast?q=${locationInput}`);
        displayForecast(forecastData, forecastElement);

        // Clear error message
        errorMessageElement.textContent = '';
    } catch (error) {
        // Display error message
        errorMessageElement.textContent = 'Error fetching weather data. Please try again.';
        currentWeatherElement.innerHTML = '';
        forecastElement.innerHTML = '';
    }
}

async function fetchWeatherData(endpoint) {
    const response = await fetch(`${baseUrl}/${endpoint}&appid=${apiKey}&units=metric`);
    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    return response.json();
}

function displayCurrentWeather(data, element) {
    const { name, main, weather } = data;
    const html = `
        <h2>${name} - Current Weather</h2>
        <p>Temperature: ${main.temp} °C</p>
        <p>Description: ${weather[0].description}</p>
        <p>Humidity: ${main.humidity}%</p>
    `;
    element.innerHTML = html;
}

function displayForecast(data, element) {
    const forecastList = data.list.slice(0, 5); // Display forecast for the next 5 periods
    let html = '<h2>5-Day Forecast</h2>';
    
    forecastList.forEach(period => {
        const date = new Date(period.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'short' });
        const temperature = period.main.temp.toFixed(1);
        html += `<div><p>${day}</p><p>${temperature} °C</p></div>`;
    });

    element.innerHTML = html;
}
