import { useState } from "react"
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({children})=>{
    const[theme,settheme] = useState("light");

    const toggleTheme = ()=>{
        settheme(prev=>prev==="light"?"dark":"light");
    }
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;
