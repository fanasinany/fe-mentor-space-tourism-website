import React from "react";
import logo from "../Assets/shared/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <img src={logo} alt="Logo" />
                <div>
                    <NavLink to="/"><span>00</span>Home</NavLink>
                    <NavLink to="/destination"><span>02</span>Destination</NavLink>
                    <NavLink to="/crew"><span>03</span>Crew</NavLink>
                    <NavLink to="/technology"><span>04</span>Technology</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header;