let now = new Date();
let h2 = document.querySelector("h2");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
h2.innerHTML = `${day} ${hours}:${minutes}`;

function cityResult(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city");
  let newCity = document.querySelector("h1");
  newCity.innerHTML = cityInput.value;
}

let searchCity = document.querySelector("#search-city");
searchCity.addEventListener("submit", cityResult);

function getCelsius(event) {
  event.preventDefault();
  let h3 = document.querySelector(".temp");
  h3.innerHTML = "19";
}

let celsius = document.querySelector(".celsius-link");
celsius.addEventListener("click", getCelsius);

function getFahrenheit(event) {
  event.preventDefault();
  let h3 = document.querySelector(".temp");
  h3.innerHTML = "66";
}

let fahrenheit = document.querySelector(".fahrenheit-link");
fahrenheit.addEventListener("click", getFahrenheit);

function displayWeather(response) {
  document.querySelector("#result").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  let temperaturedescription = document.querySelector("#rain");
  temperaturedescription.innerHTML = response.data.weather[0].description;
}

function searchButton(event) {
  event.preventDefault();
  let apiKey = "70271c86d3fab49b39629164bf78d933";
  let city = document.querySelector("#city").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${url}&appid=${apiKey}`).then(displayWeather);
}

let form = document.querySelector("form");
form.addEventListener("submit", searchButton);

function displayPosition(position) {
  let apiKey = "70271c86d3fab49b39629164bf78d933";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(`${url}&appid=${apiKey}`).then(displayWeather);
}

function getCurrent(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(displayPosition);
}

let tempButton = document.querySelector("#current-location");
tempButton.addEventListener("click", getCurrent);
