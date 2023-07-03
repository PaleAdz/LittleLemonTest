import React from "react";
import "./Nav.css";
import logo from "./Images/lemon-logo.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav-container">
      <img src={logo} className="logo" alt="Lemon logo" />
      <ul className="nav-ul">
        <Link to="/" class="link">
          <li className="nav-li">Home</li>{" "}
        </Link>
        <li className="nav-li">About</li>
        <li className="nav-li">Menu</li>
        <Link to="/book" className="link">
          <li className="nav-li">Reservations</li>
        </Link>
        <li className="nav-li">Order Online</li>
        <li className="nav-li">Login</li>
      </ul>
    </nav>
  );
}

export default Nav;
