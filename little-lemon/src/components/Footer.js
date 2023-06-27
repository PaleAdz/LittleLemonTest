import React from "react";
import "./Footer.css";
import footerLogo from "./Images/lemonFooter.png";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-box">
          <img className="ftr-img" src={footerLogo} />
        </div>

        <div className="footer-box">
          <ul className="ftr-ul">
            <li className="ftr-li">
              <span className="ftr-title">Nav</span>
            </li>
            <li className="ftr-li">Home</li>
            <li className="ftr-li">About</li>
            <li className="ftr-li">Menu</li>
            <li className="ftr-li">Reservations</li>
            <li className="ftr-li">Order Online</li>
            <li className="ftr-li">Login</li>
          </ul>
        </div>

        <div className="footer-box">
          <ul className="ftr-ul">
            <li className="ftr-li">
              <span className="ftr-title">Contact</span>
            </li>
            <li className="ftr-li">Address</li>
            <li className="ftr-li">Phone Number</li>
            <li className="ftr-li">Email</li>
          </ul>
        </div>

        <div className="footer-box">
          <ul className="ftr-ul">
            <li className="ftr-li">
              <span className="ftr-title">Social Media</span>
            </li>
            <li className="ftr-li">Twitter</li>
            <li className="ftr-li">Discord</li>
            <li className="ftr-li">Facebook</li>
            <li className="ftr-li">Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
