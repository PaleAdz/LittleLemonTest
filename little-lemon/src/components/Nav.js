import React from "react";
import "./Nav.css";
import logo from "./Images/lemon-logo.png";

function Nav() {
  return (
    <nav className="nav-container">
      <img src={logo} className="logo" alt="Lemon logo" />
      <ul className="nav-ul">
        <li className="nav-li">Home</li>
        <li className="nav-li">About</li>
        <li className="nav-li">Menu</li>
        <li className="nav-li">Reservations</li>
        <li className="nav-li">Order Online</li>
        <li className="nav-li">Login</li>
      </ul>
    </nav>
  );
}

export default Nav;
