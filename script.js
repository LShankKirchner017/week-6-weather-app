// variables
  var apiKey= "6c8c0a6af3c2e6f391e3b079abd7bb2f"
  // var API= "https://api.openweathermap.org/data/2.5/forecast?lat=43.77&lon=-88.45&appid=6c8c0a6af3c2e6f391e3b079abd7bb2f"

  var searchBar = document.querySelector(".search-bar");
  var searchButton = document.getElementById("search-btn");
  var citySearched = document.getElementById("citySearched");

  searchButton.addEventListener("click", function(event){
    event.preventDefault ()
    var city = searchBar.value.trim();
    getCurrentWeather(city)
    generateCityButton(city)
  })
  function generateCityButton (city){
    var button = document.createElement("button");
    button.innerText = city;
    citySearched.appendChild(button)
  }

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
      console.log(data)
      get5DayForecast (data.coord)
    });
 }

 // Forecast Function
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
        // TODO: update current weather DOM
        console.log(data);
      });
  }
  // var userLat = position.coords.latitude;
  // var userLon = position.coords.longitude;

  // var citySearched = .search-bar

// create a event listener for the button 
  // & search bar


// create a function to fetch the current weather

// create a function to fetch the weather forecast
// fetch("https://api.openweathermap.org/data/2.5/forecast?lat=43.77&lon=-88.45&appid=6c8c0a6af3c2e6f391e3b079abd7bb2f")
//   .then (function(response){
//     return response.json();
//   })
//   .then (function(data){
//     var weather = data;
//     console.log(weather)
//   });
//create a function to display the weather

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