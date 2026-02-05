import Home from "./Home";
import Login from "./Login";
import Logo from "./Logo";
import Register from "./Register";
const NavbarContainer = () => {
    return (
        <div id="nav">
            <Logo/>
            <Home/>
            <Login/>
            <Register/>
        </div>
    )
}   
export default NavbarContainer;