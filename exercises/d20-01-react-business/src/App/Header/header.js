import React from "react";

function Header() {
    return (
        <header>
            <h1 className="site-title">Luigi Pest Control</h1>
            <ul className="nav-links">
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="services.html">Services</a>
                </li>
                <li>
                    <a href="contact.html">Contact</a>
                </li>
            </ul>
        </header>
    )
}

export default Header;

