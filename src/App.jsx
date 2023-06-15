import {Routes,Route} from "react-router-dom"

// Components & Pages
import Header from "./components-and-pages/components/Header"
import Home from "./components-and-pages/pages/Home"
import CountryCard from "./components-and-pages/components/CountryCard"
import CountryDetails from "./components-and-pages/pages/CountryDetails"
import BorderCountry from "./components-and-pages/components/BorderCountry"
import NotFound from "./components-and-pages/components/NotFound"

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/country/:name" element={<CountryDetails/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
