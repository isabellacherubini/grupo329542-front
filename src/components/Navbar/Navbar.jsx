import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from '../../pages/Profile/Logout.jsx';

function Navbar() {
  return (
    <header>
        <nav className="navbar">
            <NavLink to="/" className="logo-display">
                <img src="/logo.png" alt="logo-image" className="logo-image" />
                <span className="name title"> Los gatos del poder </span>
            </NavLink>
            <ul className="navbar-links-container">
                <li className="navbar-element">
                    <NavLink to="/" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Inicio
                    </NavLink>
                </li>
                <li className="navbar-element">
                    <NavLink to="principal" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Pagina Principal
                    </NavLink>
                </li>
                <li className="navbar-element"> 
                    <NavLink to="about-us" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Sobre Nosotros
                    </NavLink>
                </li>
                <li className="navbar-element">
                    <NavLink to="rules" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Reglas del juego
                    </NavLink>    
                </li>
                <li className="navbar-element">
                    <NavLink to="signup" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Signup
                    </NavLink>    
                </li>
                <li className="navbar-element">
                    <NavLink to="login" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Login
                    </NavLink>    
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar;