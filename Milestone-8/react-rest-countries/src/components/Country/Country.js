import React from 'react';
import './Country.css'
import { useState, useEffect } from "react";
import SingelCountry from '../SingelCountry/SingelCountry';

const Country = () => {
  const [countries, setCountries] = useState([]);

    useEffect(() => {

      fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))

    }, [])
  return (
    <div className="container">
      <h2>Countries in other File</h2>
      <h3>Available Countries: {countries.length}</h3>
      <div className='country-container'>
        {countries.map((country) => (
            <SingelCountry
                country={country}
                key={country.cca3}
            ></SingelCountry>
        ))}
      </div>
    </div>
  );
};

export default Country;