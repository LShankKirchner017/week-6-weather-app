// variables
  var apiKey= "6c8c0a6af3c2e6f391e3b079abd7bb2f"
  var searchBar = document.querySelector(".search-bar");
  var searchButton = document.getElementById("search-btn");
  var citySearched = document.getElementById("citySearched");
  var currentHour = dayjs().format("hh");
  console.log(currentHour)

  // DOM Variables
  var weatherCity = document.querySelector(".weatherCity")
  var icon = document.querySelector(".current-icon")
  var conditions = document.querySelector(".current-conditions")
  var temp = document.querySelector(".current-temp")
  var humidity = document.querySelector(".current-humidity")
  var wind = document.querySelector(".current-wind")
 
// generate a button for previously searched cities
  function generateCityButton(city) {
    var button = document.createElement("button");
    button.innerText = city;
    citySearched.appendChild(button);
  }

// TODO Local Storage & search history

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
        // TODO: update forecast weather DOM
        console.log(data);
        var forecastResults = [];
  
        for (var i  =0; i < data.list.length; i++){
          var weatherData = data.list[i]
          var weatherHour = weatherData.dt_txt.split(" ")[1].split(":")[0];
          if (currentHour == weatherHour){
             forecastResults.push(weatherData)
          } 
        } 
        generateForecastCard(forecastResults)
      });
  }
  function generateForecastCard(weatherData){
    for (var i = 0; i < weatherData.length; i++)
    { var forecastEL = document.getElementById("forecast-" + [i])
      var icon = forecastEL.children[0];
      var description = forecastEL.children[1];
      var temp = forecastEL.children[2];
      var humidity = forecastEL.children[3];
      var wind = forecastEL.children[4];

      description.innerText = weatherData[i].weather[0].description;
      icon.setAttribute("src", "https://openweathermap.org/img/wn/" + weatherData[i].weather[0].icon + ".png");
       temp.innerText = weatherData[i].main.temp;
       humidity.innerText = weatherData[i].main.humidity;
       wind.innerText = weatherData[i].wind.speed;
    }
    console.log(weatherData[0].weather);
  }

  searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    var city = searchBar.value.trim();
    getCurrentWeather(city);
    generateCityButton(city);
  });


// create elements in the upcoming weather card
  // icon
  // h3 condition
  // h3 temp
  // h3 humidity
  // wind


// store user input cities