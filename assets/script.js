// variables
  var apiKey= "6c8c0a6af3c2e6f391e3b079abd7bb2f"
  var searchBar = document.querySelector(".search-bar");
  var searchButton = document.getElementById("search-btn");
  var searchHistory = document.getElementById("searchHistory");
  var currentHour = dayjs().format("hh");
  var knownHours = [0, 3, 6, 9, 12, 15, 18, 21];
  
  // DOM Variables
  var weatherCity = document.querySelector(".weatherCity")
  var icon = document.querySelector(".current-icon")
  var conditions = document.querySelector(".current-conditions")
  var temp = document.querySelector(".current-temp")
  var humidity = document.querySelector(".current-humidity")
  var wind = document.querySelector(".current-wind")

// Get Next Hour Available
  function getNextAvailableHour(hour) {
    var hourNum = parseInt(hour);
    if (knownHours.includes(hourNum)) {
      return hour;
    } else {
      var nextHour;
      for (var i = 0; i < knownHours.length; i++) {
        var knownHourNum = parseInt(knownHours[i]);
        if (Math.abs(knownHourNum - hourNum) === 1) {
          nextHour = knownHours[i];
          break;
        }
      }
      return nextHour;
    }
  }

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

      get5DayForecast (data.coord)
      renderWeatherData (data)
    });
  }

  // Display current weather data on page
  function renderWeatherData(weatherData){
    weatherCity.innerText = weatherData.name
    conditions.innerText = weatherData.weather[0].description
    icon.setAttribute(
      "src",
      "https://openweathermap.org/img/wn/" + weatherData.weather[0].icon + ".png"
    );
    temp.innerText = weatherData.main.temp
    humidity.innerText = weatherData.main.humidity
    wind.innerText = weatherData.wind.speed
    // need to add icon (dynamic)
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
 
        var forecastResults = [];
  
        for (var i  =0; i < data.list.length; i++){
          var weatherData = data.list[i]
          var weatherHour = weatherData.dt_txt.split(" ")[1].split(":")[0];
          var nextHour = getNextAvailableHour(currentHour)
          if (nextHour == weatherHour){
             forecastResults.push(weatherData)
          } 
        } 
        generateForecastCards(forecastResults)
      });
  }
  function generateForecastCards(weatherData){
  
    for (var i = 0; i < weatherData.length; i++){
      var forecastEL = document.getElementById("forecast-" + [i])
      var icon = forecastEL.children[0]
      var description = forecastEL.children[1]
      var temp = forecastEL.children[2];
      var humidity = forecastEL.children[3];
      var wind = forecastEL.children[4];

      description.innerText = "Forecast: " + weatherData[i].weather[0].description;
      icon.setAttribute("src", "https://openweathermap.org/img/wn/" + weatherData[i].weather[0].icon + ".png");
       temp.innerText = "Temp: " + weatherData[i].main.temp; +"°F";
       humidity.innerText = "Humidity: " + weatherData[i].main.humidity + "%";
       wind.innerText = "Wind: " + weatherData[i].wind.speed + "MPH";
    }
  }
  
  // generate a list of previously searched cities
  
  function generateCityList(city) {
    var para = document.createElement("p");
    para.innerText = city;
    searchHistory.appendChild(para);
  }

// Local Storage   
  // when the user puts a value in the input and clicks the search-btn
    // then the city is stored in search history


  searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    var city = searchBar.value.trim();
   
    getCurrentWeather(city);
    generateCityList(city);
  });
