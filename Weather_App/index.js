const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');

const apiKey = 'b57382ee133de5c72275d83789d4da4e'; 

weatherForm.addEventListener("submit", async event =>{

    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.log(error);
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city name.");
    }

});

async function getWeatherData(city){
    // Step 1: Get coordinates from city name using Geocoding API
    const geoURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
    
    const geoResponse = await fetch(geoURL);
    
    if(!geoResponse.ok){
        throw new Error("City not found");
    }
    
    const geoData = await geoResponse.json();
    
    if(geoData.length === 0){
        throw new Error("City not found");
    }
    
    const {lat, lon} = geoData[0];
    
    // Step 2: Get weather data using lat and lon
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
    const weatherResponse = await fetch(weatherURL);
    
    if(!weatherResponse.ok){
        throw new Error("Could not fetch weather data");
    }
    
    return await weatherResponse.json();
}

function displayWeatherInfo(data){
    const {name: city, 
           main: {temp, humidity}, 
           weather: [{description, id}]} = data;
    
    card.textContent = '';
    card.style.display = 'flex';
    
    const cityDisplay = document.createElement('h1');
    const tempDisplay = document.createElement('p');
    const humidityDisplay = document.createElement('p');
    const descDisplay = document.createElement('p');
    const weatherEmoji = document.createElement('p');
    
    cityDisplay.textContent = city;
    cityDisplay.classList.add('cityDisplay');
    
    tempDisplay.textContent = `${temp.toFixed(1)}°C`;
    tempDisplay.classList.add('temperatureDisplay');
    
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    humidityDisplay.classList.add('humidityDisplay');
    
    descDisplay.textContent = description;
    descDisplay.classList.add('descriptionDisplay');
    
    weatherEmoji.textContent = getWeatherEmoji(id);
    weatherEmoji.classList.add('weatherEmojiDisplay');
    
    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId){
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌦️";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case (weatherId === 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            return "☁️";
        default:
            return "❓";
    }
}

function displayError(message){
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('errorDisplay');
    errorDiv.textContent = message;

    card.textContent = '';
    card.style.display = 'flex';
    card.appendChild(errorDiv);
}