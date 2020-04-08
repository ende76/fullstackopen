import React from 'react';
import WeatherDisplay from './WeatherDisplay';

export default ({ country: { capital, flag, languages, name, population }, weatherApiKey }) => 
    <section>
        <h1>{name}</h1>
        <p>capital {capital}</p>
        <p>population {population}</p>
        <h2>languages</h2>
        <ul>
            {languages.map(({ name }) => <li key={name}>{name}</li>)}
        </ul>
        <img alt={`flag ${ name }`} src={flag} width="200" />
        <WeatherDisplay
            name={name}
            apiKey={weatherApiKey}
        />
    </section>;
