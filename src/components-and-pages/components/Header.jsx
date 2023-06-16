import { BiMoon } from "react-icons/bi"

import { Link } from "react-router-dom"

const Header = () => {
    const darkTheme = false
    return (
        <header className={`${darkTheme && `dark`} header`}>
            <div className="container">
                <Link to="/"><h1>Where in the world?</h1></Link>
                <button className="theme-toggle-btn"> <BiMoon className="moon-icon"/> Dark Mode</button>
            </div>
        </header>
    )
}

export default Header