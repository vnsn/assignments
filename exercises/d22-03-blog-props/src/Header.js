import React from 'react';
import Navbar from "./Navbar";

function Header() {
    return (
        <header>
            <Navbar />
            <div className="header-image">
                <h1>Clean Blog</h1>
                <h2>A Blog Theme by Start Bootstrap</h2>
            </div>
        </header>


    )
}

export default Header;
