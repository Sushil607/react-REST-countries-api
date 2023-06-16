import { useContext } from "react"

import { BiMoon } from "react-icons/bi"

import { Link } from "react-router-dom"

import {ThemeContext} from "../../contexts/ThemeContext"

const Header = () => {
    const context = useContext(ThemeContext)
    const darkTheme = context.darkTheme
    return (
        <header className={`${darkTheme && `dark`} header`}>
            <div className="container">
                <Link to="/"><h1>Where in the world?</h1></Link>
                <button className="theme-toggle-btn" onClick={()=> context.toggleTheme()}> <BiMoon className="moon-icon"/> Dark Mode</button>
            </div>
        </header>
    )
}

export default Header