// Create list of city submissions
function addToList() {
    let city = document.getElementById("city-text").value;
  
    let li = document.createElement("li");
    li.textContent = city + ' ';
    document.getElementById("citylist").appendChild(li);
    const API_KEY = '6941df9547eafe90e5ca91d9d5f9a4e8'; // replace with your API key
    let CITY = city; // replace with the city you want to get the weather for
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weatherDescription = data.weather[0].description;
        const temperatureK = data.main.temp;
        const temperatureF = (temperatureK * 9/5) - 459.67;
        console.log(`The weather in ${CITY} is ${weatherDescription} with a temperature of ${temperatureF.toFixed(1)} °F.`);
        var wD = "The weather in " + CITY + " is " + weatherDescription + " with a temperature of " + temperatureF.toFixed(1) + " °F.";
        document.getElementById("weatherDetails").innerHTML = wD;
      })
      .catch(error => console.error('Error fetching weather data:', error));
}







// const CURRENT_LOCATION = document.getElementsByClassName('weather-content__overview')[0];
// const CURRENT_TEMP = document.getElementsByClassName('weather-content__temp')[0];
// const FORECAST = document.getElementsByClassName('component__forecast-box')[0];

// const URL = "https://api.openweathermap.org/data/2.5/forecast/daily?" +
//     "q=CITY&cnt=7&units=imperial&APPID=6941df9547eafe90e5ca91d9d5f9a4e8";

// const URLcoordinates = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=6941df9547eafe90e5ca91d9d5f9a4e8"

// // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// // http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}



// function getWeatherData() {
//     let headers = new Headers();

//     return fetch(URLcoordinates, {
//         method: 'GET',
//         headers: headers
//     }).then(data => {
//         return data.json();
//     });
//     console.log(data);
// }

// // one api method
// // const client = require('@bigdatacloudapi/client')(API_KEY);

// // async foo() {
// //     ...
// //     const location: string = await client.getReverseGeocode({
// //           latitude:'32.101786566878445', 
// //           longitude: '34.858965073072056'
// //     });
// // }


// function getAddress (latitude, longitude) {
//     return new Promise(function (resolve, reject) {
//         var request = new XMLHttpRequest();

//         var method = 'GET';
//         var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&sensor=true';
//         var async = true;

//         request.open(method, url, async);
//         request.onreadystatechange = function () {
//             if (request.readyState == 4) {
//                 if (request.status == 200) {
//                     var data = JSON.parse(request.responseText);
//                     var address = data.results[0];
//                     resolve(address);
//                 }
//                 else {
//                     reject(request.status);
//                 }
//             }
//             console.log(data);
//         };
//         request.send();
//     });
// };
// getAddress(lat, lon).then(console.log).catch(console.error);


// getWeatherData().then(weatherData => {
//     let city = weatherData.city.name;
//     let dailyForecast = weatherData.list;

//     renderData(city, dailyForecast);
// });

// renderData = (location, forecast) => {
//     const currentWeather = forecast[0].weather[0];
//     const widgetHeader =
//         `<h1>${location}</h1><small>${currentWeather.description}</small>`;

//     CURRENT_TEMP.innerHTML =
//         `<i class="wi ${applyIcon(currentWeather.icon)}"></i>
//     ${Math.round(forecast[0].temp.day)} <i class="wi wi-degrees"></i>`;

//     CURRENT_LOCATION.innerHTML = widgetHeader;

//     // render each daily forecast
//     forecast.forEach(day => {
//         let date = new Date(day.dt * 1000);
//         let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
//         let name = days[date.getDay()];
//         let dayBlock = document.createElement("div");
//         dayBlock.className = 'forecast__item';
//         dayBlock.innerHTML =
//             `<div class="forecast-item__heading">${name}</div>
//         <div class="forecast-item__info">
//         <i class="wi ${applyIcon(day.weather[0].icon)}"></i>
//         <span class="degrees">${Math.round(day.temp.day)}
//         <i class="wi wi-degrees"></i></span></div>`;
//         FORECAST.appendChild(dayBlock);
//     });
// }

// // uses API ninja geocoding to translate coordinates from Google API geocoding

// var city = citySubmit // 'london' as an example
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/geocoding?city=' + city,
//     headers: { 'X-Api-Key': 'Y6Yvsu+zALgibJQrcH/n8g==WfOrKO3OzlGnKgt0' },
//     contentType: 'application/json',
//     success: function (result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });


// // Sample output:
// // [
// //     {
// //         "name": "London",
// //         "latitude": 51.5085,
// //         "longitude": -0.1257,
// //         "country": "GB"
// //     }
// // ]

// document
//     .getElementById("submitcity")
//     .addEventListener("click", async function () {
//         var citySubmit = document.getElementById("citysubmit").value;
//         console.log(citySubmit);
//     });

// // async function fetchData(weight, height) {
// //   const options = {
// //     method: "GET",
// //     headers: {
// //       "X-RapidAPI-Key": "c102ffcecemsh31fee262b485c63p1b464fjsn535ea8fa7b4e",
// //       "X-RapidAPI-Host": "mega-fitness-calculator1.p.rapidapi.com",
// //     },
// //   };
// //   fetch(
// //     `https://mega-fitness-calculator1.p.rapidapi.com/bmi?weight=${weight}&height=${height}`,
// //     options
// //   )
// //     .then((response) => response.json())
// //     .then((data) => {
// //       var BMIel = document.createElement("p");
// //       BMIel.textContent = "Your BMI: " + data.info.bmi;
// //       var HEALTHel = document.createElement("p");
// //       HEALTHel.textContent = "Health Category: " + data.info.health;
// //       var RANGE = document.createElement("p");
// //       RANGE.textContent = "Healthy BMI Range: " + data.info.healthy_bmi_range;
// //       var card = document.createElement("article");
// //       card.setAttribute("class", "card1");
// //       var output = document.querySelector("#outputBmi");
// //       card.append(BMIel, HEALTHel, RANGE);
// //       output.append(card);
// //       console.log(data);
// //     })
// //     .catch((err) => console.error(err));
// // }
// // var API_URL = "https://mega-fitness-calculator1.p.rapidapi.com/";
// // var API_KEY = "c102ffcecemsh31fee262b485c63p1b464fjsn535ea8fa7b4e";
// // async function fetchAllData(endpoint) {
// //   var url = `${API_URL}${endpoint}`;
// //   var options = {
// //     method: "GET",
// //     headers: {
// //       "X-RapidAPI-Key": API_KEY,
// //     },
// //   };
// // }

