import React, { createContext } from 'react'
export const AuthContext = createContext();
const Context = ({children}) => {
    let a = "Hello from Context API";
    let b = 100;
  return (
    <AuthContext value={{a,b}}>
      {children}
    </AuthContext>
  )
}

export default Context