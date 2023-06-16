import CountryCard from "../components/CountryCard"

import {BiSearch} from "react-icons/bi"

const Home = ({isLoading,filterCountries,searchQuery,setSearchQuery,setFilterRegion}) => {
    const darkTheme = false
    return(
        <main className={`${darkTheme && 'dark'} main`}>
            <div className="container">
                <div className="filters-container">
                    <div className="search-field">
                        <BiSearch/>
                        <input type="text" value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} placeholder="Search for a country..."/>
                    </div>
                    <select className="select" onChange={(e)=> setFilterRegion(e.target.value)}>
                        <option value="">Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
                {isLoading ? <div>Loading...</div> : (
                    <div className="countries-container">
                    {filterCountries().map((country) => {
                        return <CountryCard key={country.name} country={country}/>
                    })}
                </div>
                )}
            </div>
        </main>
        
    ) 
}

export default Home