import React from 'react'

import { Link } from 'react-router-dom'

const CountryCard = ({country}) => {
  return (
    <Link to={`/country/${country.name}`}>
        <article className='country-card'>
          <img src={country.flag} alt={`${country.name} flag`} />
          <div className="country-card-info">
            <div className="country-name">{country.name}</div>
            <div className="info-group">
              <div className="info-label">Population : </div>
              <div className="info-value"> {country.population}</div>
            </div>
            <div className="info-group">
              <div className="info-label">Region : </div>
              <div className="info-value"> {country.region}</div>
            </div>
            <div className="info-group">
              <div className="info-label">Capital : </div>
              <div className="info-value"> {country.capital}</div>
            </div>
          </div>
        </article>
    </Link>
  )
}

export default CountryCard