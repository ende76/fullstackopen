import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import FilterForm from './components/FilterForm';
import FilterDisplay from './components/FilterDisplay';

function App() {
  const weatherApiKey = process.env.REACT_APP_API_KEY;

  const [filterPattern, setFilterPattern] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();

  const updateFilteredCountries = useCallback(() => {
    if (!!selectedCountry) setFilteredCountries(countries.filter(({name}) => name === selectedCountry));
    else setFilteredCountries(countries.filter(({name}) => name.toLowerCase().indexOf(filterPattern.toLowerCase()) > -1));
  }, [countries, filterPattern, selectedCountry]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(({ data }) => setCountries(data))
  }, []);

  useEffect(() => updateFilteredCountries(), [countries, filterPattern, updateFilteredCountries]);

  const handleChange = (e) => {
    setSelectedCountry(null);
    setFilterPattern(e.target.value);
  }

  const handleSubmit = (e) => e.preventDefault();

  const makeClickHandler = name =>
    (e) => setSelectedCountry(name);

  const displayComponent = 
    (filterPattern.length === 0)
      ? <p>Please enter a filter pattern</p>
      : <FilterDisplay 
          countries={filteredCountries} 
          makeClickHandler={makeClickHandler} 
          weatherApiKey={weatherApiKey} 
        />;

  return (
    <div className="App">
      <FilterForm 
        filterPattern={filterPattern} 
        handleChange={handleChange}
        handleSubmit={handleSubmit} 
      />
      {displayComponent}
   </div>
  );
}

export default App;
