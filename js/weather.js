/*Js Api*/

const appKey = "f24f40b1c24505685fce3b8acd0fcffc";

let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-txt");
let cityName = document.getElementById("city-name");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity-div");

searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);

function enterPressed(event) {
  if (event.key === "Enter") {
    findWeatherDetails();
  }
}

function findWeatherDetails() {
  if (searchInput.value === "") {
  
  }else {
    let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+appKey;
   httpRequestAsync(searchLink, theResponse);
  }
 }

function theResponse(response) {
  let jsonObject = JSON.parse(response);
  cityName.innerHTML = jsonObject.name;
  icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
  temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
  humidity.innerHTML = jsonObject.main.humidity + "%";
}

function httpRequestAsync(url, callback)
{
  console.log("hello");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous 
    httpRequest.send();
}

/*Outfit suggestions*/

function showsappropriateclothing(){
    var temperature = document.getElementById("temp2").value;
// Creating a temp variable
    
// Giving the temp is greater than 25 degree
    if (temperature >= 100) {
        alert("You sure you on Earth ?");
    } else if (temperature <= 45 && temperature >= 30) {
        alert("Wear a shorts, T-shirt, flip flops and some cool shades.");
    } else if (temperature <= 29 && temperature >= 20) {
        alert("Wear summer clothes, if chilly, add a jacket and jeans to your outfit");
    } else if (temperature <= 19 && temperature >= 5) {
        alert("Wear a thick jacket, trousers, winter boots and if its cloudy bring an umbrella");
    } else if (temperature <=4 && temperature >= -20) {
        alert("Dress very warmly and cover up as much as possible");
    } else {
        alert("Not a valid weather temperature");
    }
    
}

