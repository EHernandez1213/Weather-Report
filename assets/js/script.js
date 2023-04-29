var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?lat='
var locationUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='
var key = 'b144468b3136528575a9b2333a4bed23'

function getCoords(city) {
    fetch(locationUrl + city + '&appid=' + key)
        .then(function (response) {
            return response.json();
        })
        .then(function (location) {
            console.log(location);
            console.log(location[0].lat, location[0].lon)
            getForcast(location[0].lat, location[0].lon)
        })
}

// function getCords()

function getForcast(lat, long) {
    fetch(weatherUrl + lat + '&lon=' + long + '&appid=' + key)
        .then(function (response) {
            return response.json();
        })
        .then(function (weather) {
            console.log(weather);
        })
}

getCoords('Boston');