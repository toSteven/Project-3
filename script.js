const API_KEY = "53b63c2e08638236568f32b10f2aa5f3";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

function OpenWeather(target) {
    fetch(`${API_URL}${target}&appid=${API_KEY}`)
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
            let Weather_Img = document.querySelector('#weatherImg');

            if (data.weather[0].main == "Clouds") {
                Weather_Img.src = 'img/clouds.png';
            } else if (data.weather[0].main == "Rain") {
                Weather_Img.src = 'img/rain.png';
            } else if (data.weather[0].main == "Clear") {
                Weather_Img.src = 'img/clear.png';
            } else if (data.weather[0].main == "Snow") {
                Weather_Img.src = 'img/snow.png';
            } else if (data.weather[0].main == "Mist") {
                Weather_Img.src = 'img/mist.png';
            } else if (data.weather[0].main == "Drizzle") {
                Weather_Img.src = 'img/drizzle.png';
            }

        })
}

let targetCity = (document.querySelector('#search_input'));
document.querySelector('#search_button').addEventListener('click', () => {
    
    if (targetCity.value){
     OpenWeather(targetCity.value);
    }else{
        alert("Enter City");
    }


});
