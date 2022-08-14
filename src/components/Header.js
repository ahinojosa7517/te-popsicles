import React from "react";
import tePops from "../images/te-pops.png";

class Header extends React.Component {
  render() {
    return (
      <div className="home">
        <header className="header">
          <a href="/">
            <img src={tePops} alt="Tech Elevator Logo" />
          </a>
          <h1>Tech Elevator Popsicles</h1>
        </header>
        <nav className="nav">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="">STORE</a>
            </li>
            <li>
              <a href="contact-us">CONTACT US</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
