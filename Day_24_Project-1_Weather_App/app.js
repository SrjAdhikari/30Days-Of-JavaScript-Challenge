// API key for accessing the OpenWeatherMap API
const apiKey = "2cd1fa1e00d240376a70c66e86276814";

// Object mapping weather conditions to corresponding image paths
const weatherImages = {
    "Clear": "./assets/clear.png",
    "Rain": "./assets/rain.png",
    "Clouds": "./assets/cloudy.png",
    "Snow": "./assets/snow.png",
    "Thunderstorm": "./assets/thunder.png",
    "Drizzle": "./assets/drizzle.png",
    "Wind": "./assets/wind.png",
    "Haze": "./assets/haze.png",
};

// Function to fetch weather data for a specific city
function fetchWeather(city) {
    // Construct the URL for the API request, including the city name and API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Use the Fetch API to request weather data from the OpenWeatherMap API
    fetch(apiUrl)
        .then(response => {
            // Check if the response is successful (status code 200-299)
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`); // Throw an error if the response is not successful
            }
            // Convert the response data to JSON format
            return response.json();
        })
        .then(data => {
            // Log the data to the console for debugging purposes
            console.log('Weather Data:', data);
            // Call a function to update the UI with the fetched weather data
            displayWeather(data);
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch operation
            console.error('Error fetching the weather data:', error);
        });
}

// Initial call to fetch and display weather data for a default city (e.g., Tokyo)
fetchWeather("Tokyo");

// Function to update the UI with the fetched weather data
function displayWeather(data) {
    // Extract relevant data from the API response
    const cityName = data.name;
    const temperature = data.main.temp;
    const weatherCondition = data.weather[0].main;
    const maxTemp = data.main.temp_max;
    const minTemp = data.main.temp_min;
    const sunrise = new Date(data.sys.sunrise * 1000);      // Convert Unix timestamp to Date object
    const sunriseTime = sunrise.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const sunset = new Date(data.sys.sunset * 1000);        // Convert Unix timestamp to Date object
    const sunsetTime = sunset.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    // Update the DOM elements with the extracted weather data
    document.getElementById('city').innerText = cityName;
    document.getElementById('temperature').innerText = `${Math.round(temperature)}°C`;
    document.getElementById('description').innerText = weatherCondition;
    document.getElementById('max-temp').innerText = `High: ${Math.round(maxTemp)}°C`;
    document.getElementById('min-temp').innerText = `Low: ${Math.round(minTemp)}°C`;
    document.getElementById('humidity').innerText = `${humidity}%`;
    document.getElementById('wind').innerText = `${windSpeed} km/h`;
    document.getElementById('sunrise').innerText = sunriseTime;
    document.getElementById('sunset').innerText = sunsetTime;

    // Select the element where the weather icon will be displayed
    const weatherInfo = document.querySelector(".weather-icon");

    // Check if there is a corresponding image for the current weather condition
    if (weatherImages[weatherCondition]) {
        // If an image exists for the weather condition, update the src attribute of the weather icon
        weatherInfo.src = weatherImages[weatherCondition];
    }
}

// Event listener for the search button
document.getElementById('searchButton').addEventListener('click', () => {
    // Get the city name entered by the user
    const city = document.getElementById('cityInput').value;

    // Check if the user entered a city name
    if (city) {
        // Fetch and display the weather data for the entered city
        fetchWeather(city);
    } else {
        // Log an error if the city name input is empty
        console.error('Error: City name cannot be empty.');
    }
});
