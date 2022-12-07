const dotenv = require("dotenv");
dotenv.config({
    path: "./.env"
});

/** onLocationFormSubmission
 * Check if a location information within the form is correct.
 * @return {boolean}
 */
const onLocationFormSubmission = () => {
    const location = { // temp location representation
        city: "Los Angeles", // required
        country: "United States", // optional
        state: "California" // optional
    };



    return true;
}

/** retrieveWeatherData
 * Make an API request for weather
 * @param {dictionary} locationData weather data for a specific location
 * @return {void}
 */
const retrieveWeatherData = async(locationData) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${locationData.latitude}&lon=${locationData.longitude}&appid=${process.env.WEATHER_API_KEY}`;

    const weatherData = await fetch(url)
    .then(response => response.json())
    .then(data => {
        return data;
    });

    return weatherData;
}

/**
 * 
 * @param {dictionary} locationInformation 
 * @returns 
 */
const retrieveCityInformation = async(locationInformation = {}) => {
    const entries = Object.entries(locationInformation);

    if (entries.length === 0) throw new Error("Not enough information about city.");
    if (locationInformation.city === undefined) throw new Error("City parameter must be specified.");

    let url = "https://api.api-ninjas.com/v1/geocoding?";

    entries.forEach(([key, value], index) => {
        url += `${key}=${value}`;
        if (index !== entries.length) url += '&';
    });

    const info = await fetch(url,  {
        headers: {
            'X-Api-Key': process.env.CITY_INFO_API_KEY
        }
    })
    .then(response => response.json())
    .then(data => {
        return data;
    });

    return info;
}

/** renderWeatherData
 * @param {dictionary} weatherData weather data for a specific location
 * @return {void}
 */
const renderWeatherData = (weatherData) => {
    console.log(weatherData);
}

const test = async() => {
    const locationInfo = await retrieveCityInformation({
        city: "Los Angeles",
        country: "United States",
        // state: "California"
    });

    console.log(locationInfo);
    
    // const weatherInformation = await retrieveWeatherData(locationInfo[0]);
    // console.log(weatherInformation)
}

// derp
test();

/**
 * 
 * User types out information/selects information about city
 * When they submit form, verify all information is correct
 * Send API request to get all locations that apply to the submitted info (retrieve long/lat)
 * 3 Options:
 *  - Only one location is returned: Immediately look for weather
 *  - More than one: Client selects one
 *  - None: Display that we could not find the city they're looking for
 * 
 * -> One location
 * Send another API request for weather at that location
 * 
 */