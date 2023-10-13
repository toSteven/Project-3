const API_KEY = "53b63c2e08638236568f32b10f2aa5f3";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=manila";

function OpenWeather() {
    fetch(`${API_URL}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            document.querySelector('#weatherStatus').innerHTML = data.weather[0].main;
            document.querySelector('#weatherDesc').innerHTML = data.weather[0].description;
            document.querySelector('#city').innerHTML = data.name;
            document.querySelector('#country').innerHTML = data.sys.country;
            document.querySelector('#temp').innerHTML = Math.round(data.main.temp);
            document.querySelector('#humid').innerHTML = data.main.humidity;
            document.querySelector('#windSpd').innerHTML = data.wind.speed;
        })
}

OpenWeather();