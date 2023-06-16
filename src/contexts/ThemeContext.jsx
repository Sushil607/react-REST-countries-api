import { useState, createContext } from "react";

export const ThemeContext = createContext(null)

export const ThemeProvider = ({children}) => {
    // Global State
    const [darkTheme,setDarkTheme] = useState(false)
    const toggleTheme = () => {
        setDarkTheme(!darkTheme)
    }
    return <ThemeContext.Provider value={{darkTheme,toggleTheme}}>{children}</ThemeContext.Provider>
}
