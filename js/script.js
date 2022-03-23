// const APIKEY = "d5a2d9bc210f3ec1e02af0da5fa7e705";


const $city = $("#city")
const $temperature = $("#temperature")
const $feelsLike = $("#feels-like")
const $weather = $("#weather")

const $input = $("input")
const $button = $("button")


$button.on("click", () => {
    const searchCity = $input.val()

    // be able to search input data from searchCity
    $.ajax(`http://api.openweathermap.org/geo/1.0/direct?q=${searchCity},&appid=d5a2d9bc210f3ec1e02af0da5fa7e705`)
    .then((coordinates) => {
        console.log(coordinates)

    // grab lat and lon from searchCity.

    const lat = coordinates[0].lat;
    const lon = coordinates[0].lon;

    // chech lat and lon

    console.log(lat, lon)

    // then throw into api address

    $.ajax(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d5a2d9bc210f3ec1e02af0da5fa7e705`)
    .then((data) => {
        // test data input/output
        console.log(data)
        
        // output the results /information

        $("#city").text(`City: ${data.name}`)
        $("#temperature").text(`Temperature: ${data.main.temp}`)
        $("#feels-like").text(`Feels Like: ${data.main.feels_like}`)
        $("#weather").text(`Weather: ${data.weather[0].main}`)

    })
    
    // city = data.name
    // temperature = data.main.temp
    // feels like = data.main.feels_like
    // weather = data.weather[1]

    // output next to parameters.

    })
})

