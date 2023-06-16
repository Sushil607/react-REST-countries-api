import { useState,useEffect } from "react"

import {Routes,Route} from "react-router-dom"

// Importing Data
import  countryData  from "./data/data.json"

// Components & Pages
import Header from "./components-and-pages/components/Header"
import Home from "./components-and-pages/pages/Home"
import CountryDetails from "./components-and-pages/pages/CountryDetails"
import NotFound from "./components-and-pages/components/NotFound"

function App() {
  // States
  const [isLoading,setIsLoading] = useState(false)
  const [countries,setCountries] = useState([])
  const [searchQuery,setSearchQuery] = useState("")
  const [filterRegion,setFilterRegion] = useState("")

  // useEffect
  useEffect(()=> {
    setIsLoading(true)
    setCountries(countryData)
    setIsLoading(false)
  },[])

  // filter the countries
  const filterCountries = () => {
    let filteredCountries = countries

    // filter based on search query
    filteredCountries = filteredCountries.filter((country) => country.name.toLowerCase().includes(searchQuery.toLowerCase()))
    
    // filter based on filter region
    if(filterRegion !== ""){
      filteredCountries = filteredCountries.filter((country) => country.region === filterRegion)
    }

    // return filtered countries
    return filteredCountries 
  }

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home isLoading={isLoading} filterCountries={filterCountries} searchQuery={searchQuery} setSearchQuery={setSearchQuery} setFilterRegion={setFilterRegion}/>}/>
        <Route path="/country/:name" element={<CountryDetails/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
