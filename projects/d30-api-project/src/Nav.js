import React from 'react';
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/game">List</Link></li>ll
         */}
        <li><Link to="/about">About</Link></li>
      </ul>
      <div className="tmdb"></div>
    </nav>
  );
}

export default Nav;
