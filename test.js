var knownHours = [0, 3, 6, 9, 12, 15, 18, 21];

function getNextAvailableHour(hour) {
    console.log("Working on hour" + hour)
  var hourNum = parseInt(hour);
  if (knownHours.includes(hourNum)) {
    return hour;
  } else {
    var nextHour;
    for (var i = 0; i < knownHours.length; i++) {
      var knownHourNum = parseInt(knownHours[i]);
    //   console.log(knownHourNum, hourNum, knownHourNum - hourNum);
      if (Math.abs(knownHourNum - hourNum)===1) {
        nextHour = knownHours[i];
        break
      
      }
    } 
    return nextHour
  }
}


console.log(getNextAvailableHour("12"))
console.log(getNextAvailableHour("22"));

console.log(getNextAvailableHour("6"));
console.log(getNextAvailableHour("17"));

console.log(getNextAvailableHour("0"));
console.log(getNextAvailableHour("7"));