
var apiKey = "2541e62b93261fd0b5c930aeb4b2655c"
var apiKey2 = "c625a431b5af0d39bc44e3b38096d311"

var gitLon = function() {
    var cityName = document.querySelector("#cityName").value
    var apiLon = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=" + apiKey
    fetch(apiLon)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
        mainFn(data[0].lat, data[0].lon)
        //call new functin here takes date[0].lat, data[0].lon
    })
}

var mainFn = function(lat, lon) {
    var apiLink = "https://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon="+ lon +"&appid=" + apiKey2 + "&units=imperial"
    fetch(apiLink)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        
      displayWeather(data)
    })
}
//more like mainFn, different link, different display weather function

var displayWeather = function(data){
    console.log(data)
var h1 = document.querySelector("#weatherId")
var nam = document.querySelector("#name")
var win = document.querySelector("#wind")
var hum = document.querySelector("#humid")
h1.textContent = "Temp: " + data.main.temp + "°F"
nam.textContent = data.name
win.textContent = "Wind Speed: " + data.wind.speed + "mph"
hum.textContent = "Humidity: " + data.main.humidity + "%"



}
var button = document.querySelector("#submitCity")

    button.addEventListener("click", gitLon)

