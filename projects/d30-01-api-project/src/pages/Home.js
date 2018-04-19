import React from 'react';
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <section className="home">
      <button><Link to="/game">START</Link></button>
    </section>
  );
}

export default Home;



