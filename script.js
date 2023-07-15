// variables
  var apiKey= "6c8c0a6af3c2e6f391e3b079abd7bb2f"
  var searchBar = document.querySelector(".search-bar");
  var searchButton = document.getElementById("search-btn");
  var citySearched = document.getElementById("citySearched");
  var currentHour = dayjs().format("hh");
  console.log(currentHour)

  // DOM Variables
  var weatherCity = document.querySelector(".weatherCity")
  var icon = document.querySelector(".icon")
  var description = document.querySelector(".description")
  var temp = document.querySelector(".temp")
  var humidity = document.querySelector(".humidity")
  var wind = document.querySelector(".wind")
  console.log(weatherCity, icon, description, temp, humidity, wind)

  
  function generateCityButton(city) {
    var button = document.createElement("button");
    button.innerText = city;
    citySearched.appendChild(button);
  }

// Local Storage

// current weather function (pure-ish function)
  function getCurrentWeather (city){
    console.log("Getting current weather for " + city)
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
    + city 
    + "&units=imperial&appid="
    + apiKey
    )
    .then(function(response) {
       return response.json()

    })
    .then(function(data){
      // TODO: update current weather DOM
      get5DayForecast (data.coord)
      renderWeatherData (data)
    });
  }
  
  function renderWeatherData(weatherData){
    weatherCity.innerText = weatherData.name
    icon.innerHTML = weather
    temp.innerText= weatherData.main.temp
    console.log(weatherData)
 }

 // Forecast Function (pure-ish function)
  function get5DayForecast(coords) {
    console.log("Getting five day forecast for " , coords);
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?lat="+ coords.lat+
      "&lon=" + coords.lon + 
        "&units=imperial&appid=" +
        apiKey
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // TODO: update forecast weather DOM
        console.log(data);
        for (var i  =0; i < data.list.length; i++){
          var weatherData = data.list[i]
          var weatherHour = weatherData.dt_txt.split(" ")[1].split(":")[0];
          if (currentHour == weatherHour){
            generateForecastCard (weatherData)
          }
        }
      });
  }
  function generateForecastCard(weatherData){
    console.log(weatherData)
  }

  searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    var city = searchBar.value.trim();
    getCurrentWeather(city);
    generateCityButton(city);
  });

// create elements in the current weather card (use querySelector & append.child)
  // h2 city
  // icon
  // h3 condition
  // h3 temp
  // h3 humidity
  // wind

// create elements in the upcoming weather card (use querySelector & append.child)
  // icon
  // h3 condition
  // h3 temp
  // h3 humidity
  // wind


// store user input cities