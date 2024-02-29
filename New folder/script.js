function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `Current temperature in ${city}: ${temperature}°C`;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });
}
