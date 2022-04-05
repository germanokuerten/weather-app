// const APIKEY = "d5a2d9bc210f3ec1e02af0da5fa7e705";

const $city = $("#city")
const $temperature = $("#temperature")
const $feelsLike = $("#feels-like")
const $weather = $("#weather")

const $input = $("input")
const $button = $("button")


// Return/Enter key function
$input.keyup(function(event) {
    if (event.keyCode === 13) {
        $("button").click();
    }
});

$button.on("click", (event) => {
    
    const searchCity = $input.val() 

    // be able to search input data from searchCity
    $.ajax(`https://api.openweathermap.org/geo/1.0/direct?q=${searchCity},&appid=d5a2d9bc210f3ec1e02af0da5fa7e705`)
    .then((coordinates) => {
        console.log(coordinates)

    // grab lat and lon from searchCity.
    const lat = coordinates[0].lat;
    const lon = coordinates[0].lon;

    // chech lat and lon
    console.log(lat, lon)

    // then throw into api address
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d5a2d9bc210f3ec1e02af0da5fa7e705&units=metric`)
    .then((data) => {
        // test data input/output
        console.log(data)
        
        // output the results /information
        $("#city").text(`${data.name}`)
        $("#temperature").text(`${data.main.temp}°`)
        $("#feels-like").text(`Thermal sensation: ${data.main.feels_like}°`)
        $("#weather").text(`${data.weather[0].main}`)

        // clear out input field once "clicked"
        $('input[type="text"]').val('');     
    })
    
    // city = data.name
    // temperature = data.main.temp
    // feels like = data.main.feels_like
    // weather = data.weather[1]

    // output next to parameters

    })
})