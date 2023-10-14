const API_KEY = "53b63c2e08638236568f32b10f2aa5f3"; // api key
const API_URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="; // api url
let targetCity = (document.querySelector('#search_input')); // search input

// target is parameter
function OpenWeather(target) {
    fetch(`${API_URL}${target}&appid=${API_KEY}`) // fetch api url + target paramete + api key
        .then(response => response.json()) // set as json
        .then(data => { // set data as temp variables
            //console.log(data)

            // get elements and insert data
            document.querySelector('#weatherStatus').innerHTML = data.weather[0].main;
            document.querySelector('#weatherDesc').innerHTML = data.weather[0].description;
            document.querySelector('#city').innerHTML = data.name;
            document.querySelector('#country').innerHTML = data.sys.country;
            document.querySelector('#temp').innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector('#humid').innerHTML = data.main.humidity + " %";
            document.querySelector('#windSpd').innerHTML = data.wind.speed + " kp/h";

            // get element and set to temp variable
            let Weather_Img = document.querySelector('#weatherImg');

            // weather conditions
            if (data.weather[0].main == "Clouds") {
                Weather_Img.src = "imgs/clouds.png";
            } else if (data.weather[0].main == "Rain") {
                Weather_Img.src = "imgs/rain.png";
            } else if (data.weather[0].main == "Clear") {
                Weather_Img.src = "imgs/clear.png";
            } else if (data.weather[0].main == "Snow") {
                Weather_Img.src = "imgs/snow.png";
            } else if (data.weather[0].main == "Mist") {
                Weather_Img.src = "imgs/mist.png";
            } else if (data.weather[0].main == "Drizzle") {
                Weather_Img.src = "imgs/drizzle.png";
            } else if (data.weather[0].main == "Thunderstorm") {
                Weather_Img.src = "imgs/thunderstorm.png";
            } else if (data.weather[0].main == "Smoke") {
                Weather_Img.src = "imgs/smoke.png";
            } else if (data.weather[0].main == "Fog") {
                Weather_Img.src = "imgs/fog.png";
            }

            // shot data display
            document.querySelector('#data').style.display = "block";

            // clear input
            targetCity.value = '';
        })
        .catch(error => {
            // error
            alert('City not found');
            location.reload();
        });
}

// button click event
document.querySelector('#search_button').addEventListener('click', () => {
    // input condition
    if (targetCity.value) {
        OpenWeather(targetCity.value);
    } else {
        alert("Enter City");
    }

});
