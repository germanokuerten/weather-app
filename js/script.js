const APIKEY = "d5a2d9bc210f3ec1e02af0da5fa7e705"




const $city = $("#city")
const $temperature = $("#temperature")
const $feelsLike = $("#feels-like")
const $weather = $("#weather")



$.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${APIKEY}`
})

