import { NavLink } from "react-router-dom"
import Hero from "../assets/hero.jpg"
import Logo from "../assets/Logo.svg"

const Header = () => {
  return (
    <header className="relative">
      <img 
        src={Hero} 
        alt="banner" 
        className="w-full" />
        <NavLink to="/country">
      <img
        src={Logo}
        alt="logo"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        </NavLink>
    </header>
  )
}

export default Header;
