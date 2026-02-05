import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';

const Navbar = () => {
    const {toggleTheme}=useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>Toggle Theme</button>
  );
};
export default Navbar
