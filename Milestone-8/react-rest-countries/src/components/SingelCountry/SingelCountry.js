import React from 'react';
import './SingelCountry.css'
const SingelCountry = (props) => {

    const {name, population, area,region,flags } = props.country; ;
    return (
      <div className="country">
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <h4>Area: {area}</h4>
            <h4>Region: { region}</h4>
      </div>
    );
};

export default SingelCountry;