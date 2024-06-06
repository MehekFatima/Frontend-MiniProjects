const btn = document.getElementById('btn');
const cty = document.getElementById('cty');
const aqi = document.getElementById('aqi');

btn.addEventListener('click', handleClick);

function handleClick() {
    const city = cty.value.trim();
    const showAqi = aqi.value;

    // Construct the API URL with the user's inputs
    const apiKey = 'API-key'; // Replace with your actual API key
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=${showAqi}`;

    // Fetch the weather data
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Process the weather data
            console.log(data);
            displayWeather(data, showAqi === 'yes');
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

function displayWeather(data, showAqi) {
    // Clear any previous weather data
    const existingWeatherDiv = document.getElementById('weather-data');
    if (existingWeatherDiv) {
        existingWeatherDiv.remove();
    }

    // Create a new div for displaying weather data
    const weatherDiv = document.createElement('div');
    weatherDiv.id = 'weather-data'; // Assign an id for easy reference
    weatherDiv.innerHTML = `
        <img src="https:${data.current.condition.icon}" alt="${data.current.condition.text}" title="${data.current.condition.text}" />
        <h2>Weather in ${data.location.name}, ${data.location.country}</h2>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
        ${showAqi && data.current.air_quality ? `
        <h3>Air Quality Index (AQI)</h3>
        <p>CO: ${data.current.air_quality.co}</p>
        <p>NO<sub>2</sub>: ${data.current.air_quality.no2}</p>
        <p>O<sub>3</sub>: ${data.current.air_quality.o3}</p>
        <p>SO<sub>2</sub>: ${data.current.air_quality.so2}</p>
        <p>PM<sub>2.5</sub>: ${data.current.air_quality.pm2_5}</p>
        <p>PM<sub>10</sub>: ${data.current.air_quality.pm10}</p>
        <p>US EPA Index: ${data.current.air_quality['us-epa-index']}</p>
        <p>GB DEFRA Index: ${data.current.air_quality['gb-defra-index']}</p>
        ` : ''}
    `;

    // Append weatherDiv to the main div
    const mainDiv = document.querySelector('.content');
    mainDiv.appendChild(weatherDiv);
}
