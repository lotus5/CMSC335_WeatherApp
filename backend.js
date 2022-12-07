
/** onLocationFormSubmission
 * Check if a location information within the form is correct.
 * @return {boolean}
 */
const onLocationFormSubmission = () => {

}

/** retrieveLocationWeather
 * Make an API request for weather
 * @param {dictionary} locationData weather data for a specific location
 * @return {void}
 */
const retrieveLocationWeather = async(locationData) => {

}

/** renderWeatherData
 * @param {dictionary} weatherData weather data for a specific location
 * @return {void}
 */
const renderWeatherData = (weatherData) => {
    console.log(weatherData);
}

// derp
renderWeatherData({
    name: "Los Angeles",
    country: "United States"
})
