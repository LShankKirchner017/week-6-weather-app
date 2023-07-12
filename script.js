// things we need to access
    // api key
    var apiKey = "6c8c0a6af3c2e6f391e3b079abd7bb2f";
    // search button
    var searchButton = document.querySelector("button")
    // weather data
    var weather
    // user input (city location)
    var citySearched = document.getElementById("citySearched")

// I want to create a variable for Weather that holds all of the necessary data & displays it

// Classes for Current Weather Info
    // city
    // temp
    // description
    // humidity
    // wind

// We need to set the inner text of
    // class= current-weather-info
        // city: document.querySelector(".city").innerText = "Weather in " +name (get the name from search data)
        // icon: document.querySelector(".icon").src = "https://openweathermaps.org/img/wn" + icon + "@1x.png" 
        // current conditions (class=description): document.querySelector(".description").innerText = description;
        // temperature: document.querySelector(".temp").innerText = "Temperature:" + temp + "°F"
        // humidity: document.querySelector(".humidity").innerText = "Humidity" + humidity + "%"
        // wind: document.querySelector(".wind").innerText = "Wind speed: " + speed + " MPH"


// We need to get info from the search bar input
    // fetchWeather(document.querySelector(".search-bar").value)

// We need to add an event listener to the search button & allow the user to click the button OR hit enter on their keyboard