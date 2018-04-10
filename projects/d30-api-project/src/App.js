import React, { Component } from 'react';

import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Points from "./Points";

import Test from "./test";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Nav />

        <Points />

        <section className="content">
          <h3>I am the section that will get swapped out with Router</h3>
          <h3>Content - I'm the question</h3>


          <ul>
            <li>I will be an option</li>
            <li>I will be an option</li>
            <li>I will be an option</li>
            <li>I will be an option</li>
          </ul>
        </section>

        <Footer />
         

      </div>
    );
  }
}

export default App;
