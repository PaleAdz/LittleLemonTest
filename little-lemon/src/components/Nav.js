import React from "react";
import "./Nav.css";
import logo from "./Images/lemon-logo.png";

function Nav() {
  return (
    <nav className="container">
      <img src={logo} className="logo" alt="Lemon logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Nav;
