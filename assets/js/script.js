var weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat='
var locationUrl = 'https://api.openweathermap.org/geo/1.0/direct?q='
var key = 'b144468b3136528575a9b2333a4bed23'
var search = document.querySelector('#search')
var atlanta = document.querySelector('#atlanta')
var la = document.querySelector('#la')
var ny = document.querySelector('#ny')
var chicago = document.querySelector('#chicago')
var houston = document.querySelector('#houston')
var miami = document.querySelector('#miami')
var sf = document.querySelector('#sf')
var seattle = document.querySelector('#seattle')
var currentCity = document.getElementById('currentCity')
var day1 = document.getElementById('day_1')
var day2 = document.getElementById('day_2')
var day3 = document.getElementById('day_3')
var day4 = document.getElementById('day_4')
var day5 = document.getElementById('day_5')

function getCoords(city) {
    fetch(locationUrl + city + '&appid=' + key)
        .then(function (response) {
            return response.json();
        })
        .then(function (location) {
            currentCity.textContent = city
            // console.log(location);
            // console.log(location[0].lat, location[0].lon)
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
            var rawtemp1 = weather.list[0].main.temp
            var hum1 = weather.list[0].main.humidity
            var temp1 = convertTempature(rawtemp1)
            day1.children[1].textContent = 'Tempature: ' + temp1
            day1.children[2].textContent = 'Humidity: ' + hum1
            day1.children[3].textContent = weather.list[0].weather[0].description

            var rawtemp2 = weather.list[4].main.temp
            var hum2= weather.list[4].main.humidity
            var temp2 = convertTempature(rawtemp2)
            day2.children[1].textContent = 'Tempature: ' + temp2
            day2.children[2].textContent = 'Humidity: ' + hum2
            day2.children[3].textContent = weather.list[4].weather[0].description

            var rawtemp3 = weather.list[8].main.temp
            var hum3 = weather.list[8].main.humidity
            var temp3 = convertTempature(rawtemp3)
            day3.children[1].textContent = 'Tempature: ' + temp3
            day3.children[2].textContent = 'Humidity: ' + hum3
            day3.children[3].textContent = weather.list[8].weather[0].description

            var rawtemp4 = weather.list[12].main.temp
            var hum4 = weather.list[12].main.humidity
            var temp4 = convertTempature(rawtemp4)
            day4.children[1].textContent = 'Tempature: ' + temp4
            day4.children[2].textContent = 'Humidity: ' + hum4
            day4.children[3].textContent = weather.list[12].weather[0].description

            var rawtemp5 = weather.list[16].main.temp
            var hum5 = weather.list[16].main.humidity
            var temp5 = convertTempature(rawtemp5)
            day5.children[1].textContent = 'Tempature: ' + temp5
            day5.children[2].textContent = 'Humidity: ' + hum5
            day5.children[3].textContent = weather.list[16].weather[0].description
        })
}

function convertTempature(temp) {
    let tempF = (temp -273) *9/5 + 32
return tempF        
}

search.addEventListener('click', function () {
    var city = document.querySelector('#City').value;
    console.log(city);
    getCoords(city);
})
atlanta.addEventListener('click', function () {
    var city = 'Atlanta'
    getCoords(city);
})
la.addEventListener('click', function () {
    var city = 'Los Angeles'
    getCoords(city);
})
ny.addEventListener('click', function () {
    var city = 'New York'
    getCoords(city);
})
chicago.addEventListener('click', function () {
    var city = 'Chicago'
    getCoords(city);
})
houston.addEventListener('click', function () {
    var city = 'Houston'
    getCoords(city);
})
miami.addEventListener('click', function () {
    var city = 'Miami'
    getCoords(city);
})
sf.addEventListener('click', function () {
    var city = 'San Francisco'
    getCoords(city);
})
seattle.addEventListener('click', function () {
    var city = 'Seattle'
    getCoords(city);
})