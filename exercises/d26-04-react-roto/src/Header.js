import React from 'react';
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header>
            <h1>Plumbing Company</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
            </nav>
        </header>
    )
}

export default Header;

{/* Link is the router version of an anchor tag */}