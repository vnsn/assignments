import React, { Component } from 'react';

import Header from "./Header";
import DataContainer from "./DataContainer";
import Footer from "./Footer";

class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <Header />
        <DataContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
