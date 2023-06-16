import React,{useContext} from 'react'

import { ThemeContext } from '../../contexts/ThemeContext'

const NotFound = () => {
  const context = useContext(ThemeContext)
  const darkTheme = context.darkTheme
  return (
    <main className={`${darkTheme && 'dark'} main`}>
        <div className="container">
            <div className="not-found">
              <p>The content you are looking for is'nt available :(</p>
              <p>Please go back to homepage.</p>
            </div>
        </div>
    </main>
  )
}

export default NotFound