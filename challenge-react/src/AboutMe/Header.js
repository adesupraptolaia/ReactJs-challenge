import React from "react";
import logo from "../img/logo-ALTA.png";
import "../Styles/Home.css";

function Header() {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="header-logo">
              <img src={logo} alt="" srcset="" />
            </div>
          </div>
          <div className="col-md-9">
            <div className="header-notif text-right">
              <div className="menu">
                <ul>
                  <a href="index.html">
                    <li>Home</li>
                  </a>
                  <a href="aboutme.html">
                    <li>About</li>
                  </a>
                  <a href="http://">
                    <li>Experience</li>
                  </a>
                  <a href="contact-us.html">
                    <li>Contact</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
