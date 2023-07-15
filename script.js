// variables
  var apiKey= "6c8c0a6af3c2e6f391e3b079abd7bb2f"
  var API= "https://api.openweathermap.org/data/2.5/forecast?lat=43.77&lon=-88.45&appid=6c8c0a6af3c2e6f391e3b079abd7bb2f"

  // var citySearched = .search-bar

// create a event listener for the button 
  // & search bar

// create a function to fetch the weather
fetch("https://api.openweathermap.org/data/2.5/forecast?lat=43.77&lon=-88.45&appid=6c8c0a6af3c2e6f391e3b079abd7bb2f")
  .then (function(response){
    return response.json();
  })
  .then (function(data){
    var weather = data;
    console.log(weather)
  });
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