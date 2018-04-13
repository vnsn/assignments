import React from 'react';

import { Switch, Route } from "react-router-dom";


import Home from "./pages/HomeAlt";
// import Home from "./pages/Home";
import About from "./pages/About";
// import Game from "./pages/Game";
import Game from "./pages/GameAlt";

function Content(props) {
    return (
        <section className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          {/* <Route path="/game" component={Game} /> */}
          <Route path="/movie/:id/:title/:release_date" component={Game} />
        </Switch>
        </section>
    );
}

export default Content;
