import React from 'react';
import CountryNameDisplay from './CountryNameDisplay';
import CountryDisplay from './CountryDisplay';

export default ({ countries, makeClickHandler, weatherApiKey }) => {
    if (countries.length > 10) {
        return <p>Too many matches, specify another filter</p>;
    } else if (countries.length > 1) {
        return <ul>
            {countries.map(({ name }) => 
                <CountryNameDisplay 
                    key={name} 
                    name={name} 
                    makeClickHandler={makeClickHandler} 
                />)
            }
        </ul>;
    } else if (countries.length === 1) {
        return <CountryDisplay 
            country={countries[0]} 
            weatherApiKey={weatherApiKey} 
        />;
    } else {
        return <p>No match found</p>;
    }
};