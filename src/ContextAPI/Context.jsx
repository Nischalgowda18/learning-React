import React, { createContext, useState } from 'react'
export const AuthContext = createContext();
const Context = ({children}) => {
    const [theme,setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
  return (
    <AuthContext value={{theme,toggleTheme}}>
        <div className={theme}>
           <button onClick={toggleTheme} className='p-1 bg-amber-200 rounded'>{theme==="light" ? "Dark" : "Light"}</button> 
        </div>
      {children}
    </AuthContext>
  )
}

export default Context