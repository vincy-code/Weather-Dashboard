const key = "ca18d1242d371fe79593ff10decfe5d3";
let city = "Orlando";
let savedCities = [];
const apiBaseUrl =  "http://api.openweathermap.org/data/2.5/"

function getWeather(event) {
  // console.log(`key ${key}`);
  // console.log("city: " + $("#city").val().trim())
  const cityInput = $("#city").val().trim();
  if (cityInput) {
    city = cityInput;
  }
  console.log("city: " + savedCities);
  // append new value to the array
  savedCities.push(city);
const queryURL = apiBaseUrl + "weather?q=" + city + "&appid=" + key
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
}

$("#search").on("click", getWeather);

// api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={ca18d1242d371fe79593ff10decfe5d3}
