import React, { useState, useEffect } from "react";

function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    let context = this,
      args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function getCountries() {
  const [countries, setCountries] = useState([]);

  function handleCountryChange(countries) {
    setCountries(countries);
  }

  useEffect(
    debounce(async () => {
      const data = await fetch(
        "https://restcountries.eu/rest/v2/all?fields=name"
      );
      const countries = await data.json();
      handleCountryChange(countries);
    }, 2000)
  );

  return countries;
}

export default function countries({ setComponent }) {
  const countries = getCountries();
  let selectedCountries = [];
  if (countries.length > 0) {
    Array(5).fill(1).forEach(item =>
      selectedCountries.push(
        countries[Math.floor(Math.random() * countries.length)]
      )
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <button rel="noopener noreferrer" onClick={() => setComponent("main")}>
          Back to menu
        </button>
        I know {countries.length} countries!
        {selectedCountries.length > 0 ? (
          <div>
            <br />
            For example:
            {selectedCountries.map(country => (
              <span key={country.name} className="country-example">{country.name}</span>
            ))}
          </div>
        ) : null}
      </header>
    </div>
  );
}
