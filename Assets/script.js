// Declare site variables and key
const API_KEY = '6941df9547eafe90e5ca91d9d5f9a4e8'; // replace with your API key
document.getElementById("citylist").addEventListener("click", (event) => {
  console.log(event.target);
  console.log(event.target.matches("li"))
  if (event.target.matches("li")) {
    const cityName = event.target.textContent;
    console.log(cityName);
    addToList(cityName);
    saveHistory(cityName);
  }
})

function saveHistory(cityName) {
  let storage = JSON.parse(localStorage.getItem("weatherHistory"))
  if (storage === null) {
    storage = []

  }
  
  storage.push (cityName)
  localStorage.setItem ("weatherHistory", JSON.stringify (storage))
  getHistory ()
}

function getHistory () {
  let storage = JSON.parse(localStorage.getItem("weatherHistory"))
  if (storage === null) {
    document.getElementById("citydiv").textContent="no history"
  } else {
    document.getElementById("citydiv").textContent=""
    for(let i=0; i<storage.length; i++) {
      // create buttons and add text content to storage[i], then append to "citydiv" div
      let button = document.createElement("button");
    button.textContent = storage;
    document.getElementById("citydiv").appendChild(button);
    }
  }
}

function getFiveDaysWeather(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`
  fetch(url)
    .then(response => response.json())
    .then(fullWeather => {
      console.log(fullWeather);
      var foreCastTemp1 = fullWeather.list[0].main.temp;
      var foreCastHumid1 = fullWeather.list[0].main.humidity;
      // $("#city-five-icon-one").attr("src", cityFiveIconOne);
      var foreCastWind1 = fullWeather.list[0].wind.speed;
      $("#callTemp1").text(foreCastTemp1);
      $("#callWind1").text(foreCastWind1);
      $("#callHumid1").text(foreCastHumid1);

      var foreCastTemp2 = fullWeather.list[8].main.temp;
      var foreCastHumid2 = fullWeather.list[8].main.humidity;
      // $("#city-five-icon-one").attr("src", cityFiveIconOne);
      var foreCastWind2 = fullWeather.list[8].wind.speed;
      $("#callTemp2").text(foreCastTemp2);
      $("#callWind2").text(foreCastWind2);
      $("#callHumid2").text(foreCastHumid2);

      var foreCastTemp3 = fullWeather.list[16].main.temp;
      var foreCastHumid3 = fullWeather.list[16].main.humidity;
      // $("#city-five-icon-one").attr("src", cityFiveIconOne);
      var foreCastWind3 = fullWeather.list[16].wind.speed;
      $("#callTemp3").text(foreCastTemp3);
      $("#callWind3").text(foreCastWind3);
      $("#callHumid3").text(foreCastHumid3);

      var foreCastTemp4 = fullWeather.list[24].main.temp;
      var foreCastHumid4 = fullWeather.list[24].main.humidity;
      // $("#city-five-icon-one").attr("src", cityFiveIconOne);
      var foreCastWind4 = fullWeather.list[24].wind.speed;
      $("#callTemp4").text(foreCastTemp4);
      $("#callWind4").text(foreCastWind4);
      $("#callHumid4").text(foreCastHumid4);

      var foreCastTemp5 = fullWeather.list[32].main.temp;
      var foreCastHumid5 = fullWeather.list[32].main.humidity;
      // $("#city-five-icon-one").attr("src", cityFiveIconOne);
      var foreCastWind5 = fullWeather.list[32].wind.speed;
      $("#callTemp5").text(foreCastTemp5);
      $("#callWind5").text(foreCastWind5);
      $("#callHumid5").text(foreCastHumid5);
    }
    )
}


// Create list of city submissions
function addToList(cityName) {
  let CITY = ''; // replace with the city you want to get the weather for
  if (cityName) {
    CITY = cityName
  } else {
    let city = document.getElementById("city-text").value;
    CITY = city;
    let li = document.createElement("li");
    li.textContent = city + ' ';
    document.getElementById("citylist").appendChild(li);
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {

      const weatherDescription = data.weather[0].description;
      const temperatureK = data.main.temp;
      const temperatureF = (temperatureK * 9 / 5) - 459.67;
      console.log(`The weather in ${CITY} is ${weatherDescription} with a temperature of ${temperatureF.toFixed(1)} °F.`);
      var wD = "The weather in " + CITY + " is " + weatherDescription + " with a temperature of " + temperatureF.toFixed(1) + " °F.";
      document.getElementById("weatherDetails").innerHTML = wD;
      console.log(data);
      getFiveDaysWeather(data.coord.lat, data.coord.lon)
    })
    .catch(error => console.error('Error fetching weather data:', error));





  // Getting API values for search city section 
  // $("#select-wind").text(selectWind);

  $.ajax({
    url: url,
    method: "GET"
  }).then(function (fullWeather) {
    console.log(fullWeather);

    // Setting weather values for every day/block

    // Day 1
    var cityFiveDateOne = fullWeather.list[0].dt_txt;

    var cityFiveIconOne = "https://openweathermap.org/img/w/" + fullWeather.list[0].weather[0].icon + ".png";
    var foreCastTemp1 = fullWeather.list[0].main.temp;
    var foreCastHumid1 = fullWeather.list[0].main.humidity;
    $("#city-five-icon-one").attr("src", cityFiveIconOne);
    var foreCastWind1 = fullWeather.list[0].wind.speed;
    $("#callTemp1").text(foreCastTemp1);
    $("#callWind1").text(foreCastWind1);
    $("#callHumid1").text(foreCastHumid1);

    // Day 2
    var cityFiveDateTwo = fullWeather.list[8].dt_txt;

    var cityFiveIconTwo = "https://openweathermap.org/img/w/" + fullWeather.list[8].weather[8].icon + ".png";
    var foreCastTemp2 = fullWeather.list[8].main.temp;
    var foreCastHumid2 = fullWeather.list[8].main.humidity;
    $("#city-five-icon-two").attr("src", cityFiveIconTwo);
    var foreCastWind2 = fullWeather.list[8].wind.speed;
    $("#callTemp2").text(foreCastTemp2);
    $("#callWind2").text(foreCastWind2);
    $("#callHumid2").text(foreCastHumid2);

    // Day 3
    var cityFiveDateThree = fullWeather.list[16].dt_txt;

    var cityFiveIconThree = "https://openweathermap.org/img/w/" + fullWeather.list[16].weather[16].icon + ".png";
    var foreCastTemp3 = fullWeather.list[16].main.temp;
    var foreCastHumid3 = fullWeather.list[16].main.humidity;
    $("#city-five-icon-three").attr("src", cityFiveIconThree);
    var foreCastWind3 = fullWeather.list[16].wind.speed;
    $("#callTemp3").text(foreCastTemp3);
    $("#callWind3").text(foreCastWind3);
    $("#callHumid3").text(foreCastHumid3);

    // Day 4

    var cityFiveDateFour = fullWeather.list[24].dt_txt;

    var cityFiveIconFour = "https://openweathermap.org/img/w/" + fullWeather.list[24].weather[24].icon + ".png";
    var foreCastTemp4 = fullWeather.list[24].main.temp;
    var foreCastHumid4 = fullWeather.list[24].main.humidity;
    $("#city-five-icon-four").attr("src", cityFiveIconFour);
    var foreCastWind4 = fullWeather.list[24].wind.speed;
    $("#callTemp4").text(foreCastTemp4);
    $("#callWind4").text(foreCastWind4);
    $("#callHumid4").text(foreCastHumid4);

    // Day 5
    var cityFiveDateFive = fullWeather.list[32].dt_txt;

    var cityFiveIconFive = "https://openweathermap.org/img/w/" + fullWeather.list[32].weather[32].icon + ".png";
    var foreCastTemp5 = fullWeather.list[32].main.temp;
    var foreCastHumid5 = fullWeather.list[32].main.humidity;
    $("#city-five-icon-five").attr("src", cityFiveIconfive);
    var foreCastWind5 = fullWeather.list[32].wind.speed;
    $("#callTemp5").text(foreCastTemp5);
    $("#callWind5").text(foreCastWind5);
    $("#callHumid5").text(foreCastHumid5);
  })
}



var storage = JSON.parse(sessionStorage.getItem('quizHighscores'))
var highscoresEl = document.querySelector(".highscores")

if (storage === null) {
    highscoresEl.textContent = "No Highscores"
} else {
    highscoresEl.textContent = ''

    for (var i = 0; i < storage.length; i++) {
        var p = document.createElement('p')
        p.textContent = `Name: ${storage[i].name} ---------- Score: ${storage[i].score}`
        highscoresEl.append(p)
    }
}