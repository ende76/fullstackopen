import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default ({ name, apiKey }) => {
    const [weatherData, setWeatherData] = useState(false);

    useEffect(() => {
        setWeatherData(false);

        if (name.length === 0) {
            return;
        }

        const url = "http://api.weatherstack.com/current?access_key=" + apiKey + "&query=" + name;


        axios
            .get(url)
            .then(response => setWeatherData(response.data));
    }, [apiKey, name]);

    if (!weatherData) return <p>Querying weather data</p>;
    else {
        console.log(weatherData);

        return <section>
            <h2>Weather in {weatherData.location.name}, {weatherData.location.country}</h2>
            <p>temperature: {weatherData.current.temperature} Celsius</p>
            {weatherData.current.weather_icons.map(url => <img alt="weather icon" key={url} src={url} width="100" />)}
            {weatherData.current.weather_descriptions.map(description => <p key={description}>{description}</p>)}
            <p>wind: {weatherData.current.wind_speed} km/h direction {weatherData.current.wind_dir}</p>
        </section>;
    }
};