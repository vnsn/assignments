import React from 'react';

import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

function App(props) {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/services" component={Services}></Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;

// exact is a boolean, so technically could put exact="true", but it's unnecessary
