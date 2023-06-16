import React,{useState,useEffect} from 'react'

import { useParams , useNavigate } from 'react-router-dom'

// Importing Data
import  countryData  from "../../data/data.json"

import { IoMdArrowBack } from "react-icons/io"

import BorderCountry from "../components/BorderCountry"

const CountryDetails = () => {
  const darkTheme = false
  // State
  const [isLoading,setIsLoading] = useState(false)
  const [country,setCountry] = useState([])

  // Extracting country name from parameters
  const params = useParams()
  const countryName = params.name

  // For navigating (back to home page)
  const navigate = useNavigate()

  useEffect(()=> {
    setIsLoading(true)
    setTimeout(()=> {
      const c = countryData.filter((c)=> c.name === countryName)
      setCountry(c[0])
      setIsLoading(false)
    },2000)
  },[])

  console.log(country)
  return (
    <main className={`${darkTheme && 'dark'} main`}>
            <div className="container">
                <button className='back-btn' onClick={()=> navigate("/")}> <IoMdArrowBack/> Back</button>
                {isLoading && <div>Loading...</div>} 
                {country &&(<div className="country-details">
                  <img src={country.flag} alt={country.name} />
                  <div className="country-details-info">
                    <div className="country-name">{country.name}</div>
                    <div className='country-details-columns'>
                      <div className='country-details-column'>
                            <div className="country-details-group">
                              <div className="country-details-label">Native Name :</div>
                              <div className="country-details-value">{country.nativeName}</div>
                            </div>
                            <div className="country-details-group">
                              <div className="country-details-label">Population :</div>
                              <div className="country-details-value">{country.population}</div>
                            </div>
                            <div className="country-details-group">
                              <div className="country-details-label">Region :</div>
                              <div className="country-details-value">{country.region}</div>
                            </div>
                            <div className="country-details-group">
                              <div className="country-details-label">Sub Region :</div>
                              <div className="country-details-value">{country.subregion}</div>
                            </div>
                            <div className="country-details-group">
                              <div className="country-details-label">Capital :</div>
                              <div className="country-details-value">{country.capital}</div>
                            </div>
                      </div>
                      <div className='country-details-column'>
                            {country.topLevelDomain && <div className="country-details-group">
                              <div className="country-details-label">Top Level Domain :</div>
                              <div className="country-details-value">{country.topLevelDomain[0]}</div>
                            </div>}
                            {country.currencies && <div className="country-details-group">
                              <div className="country-details-label">Currencies :</div>
                              <div className="country-details-value">{country.currencies.map((currency) => currency.name)}</div>
                            </div>}
                            {country.languages && <div className="country-details-group">
                              <div className="country-details-label">Languages :</div>
                              <div className="country-details-value">{country.languages.map((language)=> language.name+" ")}</div>
                            </div>}
                      </div>
                    </div>
                    {country.borders && <div className="country-details-group">
                              <div className="country-details-label">Border Countries :</div>
                              <div className="country-details-value">{country.borders.map((borderCountry,index) => <BorderCountry key={index} borderCountry={borderCountry}/>)}</div>
                    </div>}
                  </div>
                </div>)}
            </div>
        </main>
  )
}

export default CountryDetails