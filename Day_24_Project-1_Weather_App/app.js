// API key for accessing OpenWeatherMap API, used to authenticate the request
const apiKey = "2cd1fa1e00d240376a70c66e86276814";

// Object mapping weather conditions to corresponding image file paths
const weatherImages = {
    "Clear": "./assets/clear.png",            // Image for clear weather
    "Rain": "./assets/rain.png",              // Image for rainy weather
    "Clouds": "./assets/cloudy.png",          // Image for cloudy weather
    "Snow": "./assets/snow.png",              // Image for snowy weather
    "Thunderstorm": "./assets/thunder.png",   // Image for thunderstorm weather
    "Drizzle": "./assets/drizzle.png",        // Image for light rain or drizzle
    "Wind": "./assets/wind.png",              // Image for windy weather
    "Haze": "./assets/haze.png",              // Image for hazy weather
};

// Function to fetch weather data for a given city
function fetchWeather(city) {
    // Constructing the API endpoint URL for the 5-day weather forecast
    // `q=${city}` is used to specify the city name in the API request
    // `appid=${apiKey}` adds the API key to authenticate the request
    // `units=metric` specifies that the temperature should be in Celsius
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    // Making an HTTP request to the OpenWeatherMap API
    fetch(forecastUrl)
        .then(response => {
            // Check if the response is successful (status code 200-299)
            if (!response.ok) {
                // If not successful, throw an error with the status text (e.g., "Not Found")
                throw new Error(`Error: ${response.statusText}`);
            }
            // Convert the response data to JSON format
            return response.json();
        })
        .then(data => {
            // Log the data to the console for debugging purposes
            console.log('Weather Data:', data);
            // Call a function to update the UI with the fetched weather data
            displayForecast(data);
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch operation
            console.error('Error fetching the forecast data:', error);
        });
}

// Function to display the forecast data on the webpage
function displayForecast(data) {
    // Extracting the list of forecast data from the API response
    const forecastList = data.list;

    // Selecting the container where the forecast will be displayed
    const forecastContainer = document.getElementById('forecastContainer');

    // Clearing any existing content in the forecast container
    forecastContainer.innerHTML = '';
    console.log(data); // Logging the full data object for debugging purposes

    // Extracting current weather information for the city
    const cityName = data.city.name;
    const country = data.city.country;
    const temperature = data.list[0].main.temp;                 // Current temperature
    const weatherCondition = data.list[0].weather[0].main;      // Main weather condition
    const maxTemp = data.list[0].main.temp_max;                 // Maximum temperature
    const minTemp = data.list[0].main.temp_min;                 // Minimum temperature
    const sunrise = new Date(data.city.sunrise * 1000);         // Converting UNIX timestamp to JavaScript Date
    const sunriseTime = sunrise.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });    // Formatting sunrise time
    const sunset = new Date(data.city.sunset * 1000);           // Converting UNIX timestamp to JavaScript Date
    const sunsetTime = sunset.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });      // Formatting sunset time
    const humidity = data.list[0].main.humidity;                // Current humidity
    const windSpeed = data.list[0].wind.speed;                  // Current wind speed
    const pressure = data.list[0].main.pressure;                // Current atmospheric pressure

    // Update the DOM elements with the extracted weather data
    document.getElementById('city').innerText = `${cityName}, ${country}`;
    document.getElementById('temperature').innerText = `${Math.round(temperature)}°C`;  // Rounded temperature value
    document.getElementById('description').innerText = weatherCondition;
    document.getElementById('max-temp').innerText = `High: ${Math.round(maxTemp)}°C`;   // Rounded maximum temperature
    document.getElementById('min-temp').innerText = `Low: ${Math.round(minTemp)}°C`;    // Rounded minimum temperature
    document.getElementById('humidity').innerText = `${humidity}%`;
    document.getElementById('wind').innerText = `${windSpeed} km/h`;
    document.getElementById('pressure').innerText = `${pressure} hPa`;                  // Atmospheric pressure
    document.getElementById('sunrise').innerText = sunriseTime;
    document.getElementById('sunset').innerText = sunsetTime;

    // Select the element where the weather icon will be displayed
    const weatherInfo = document.querySelector(".weather-icon");

    // Check if there is a corresponding image for the current weather condition
    if (weatherImages[weatherCondition]) {
        // If an image exists for the weather condition, update the src attribute of the weather icon
        weatherInfo.src = weatherImages[weatherCondition];
    }

    // Variable to track the last date displayed (to avoid duplicates)
    let lastDate = '';

    // Looping through the forecast list to display relevant data
    forecastList.forEach(forecast => {
        const date = new Date(forecast.dt * 1000); // Converting UNIX timestamp to JavaScript Date
        const hours = date.getHours(); // Extracting the hour from the date
        const dateStr = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }); // Formatting the date

        // Checking if the forecast is for a new day and for the time around noon (12 PM)
        if (dateStr !== lastDate && hours === 12) {
            lastDate = dateStr; // Updating the lastDate to the current date

            // Extracting the temperature and weather condition for the forecast
            const temp = forecast.main.temp;
            const weatherCondition = forecast.weather[0].main;

            // Creating a new div element to represent a single day's forecast
            const forecastDiv = document.createElement('div');
            forecastDiv.classList.add('forecast-day');

            // Creating and adding the date element to the forecast div
            const dateElement = document.createElement('h4');
            dateElement.innerText = dateStr;
            forecastDiv.appendChild(dateElement);

            // Creating and adding the temperature element to the forecast div
            const tempElement = document.createElement('h2');
            tempElement.innerText = `${Math.round(temp)}°C`; // Rounded temperature value
            forecastDiv.appendChild(tempElement);

            // Creating and adding the weather condition description element
            const descElement = document.createElement('p');
            descElement.innerText = weatherCondition;
            forecastDiv.appendChild(descElement);

            // Creating and adding the weather condition icon element
            const imgElement = document.createElement('img');
            imgElement.src = weatherImages[weatherCondition] || './assets/default.png'; // Use default image if not found
            forecastDiv.appendChild(imgElement);

            // Appending the complete forecast div to the forecast container
            forecastContainer.appendChild(forecastDiv);
        }
    });
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

// Initial call to fetch and display weather data for a default city ("Tokyo")
fetchWeather("Tokyo");