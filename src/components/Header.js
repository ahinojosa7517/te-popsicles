import React from "react";
import tePops from "../images/te-pops.png";

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <a href="/" className="logo">
                    <img src={tePops} alt="Tech Elevator Logo" />
                </a>
                <h1>Tech Elevator Popsicles</h1>

                <nav className="nav">
                    <ul className="nav-list">
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
            </header>
        );
    }
}

export default Header;
