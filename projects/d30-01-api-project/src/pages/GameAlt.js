import React, { Component } from 'react';

import { connect } from "react-redux";
import { getCast, saveMovieData } from "../redux/movies";

class GameAlt extends Component {
  componentDidMount() {
    this.props.saveMovieData(this.props.match.params);
    this.props.getCast(this.props.match.params.id);
  }

  render(props) {
    const { loading, errMsg, castList, currMovie } = this.props;
    const { title, releaseDate } = currMovie;
   
    const castItems = castList.map((person, i) => {
      return (
        <ul className="castlist" key={person.name + i}>
          <li>{person.name}</li>
        </ul>
      );
    })

    if (loading) {
      return (
        <div> ... Loading ... </div>
      )
    } else if (errMsg) {
      return (
        <div>{errMsg}</div>
      )
    } else {
      return (
        <section className="content game">
          <h3>Cast Members for the movie {title} (released on {releaseDate}):</h3>
          {castItems}
        </section>
      )
    }
  }
}

export default connect(state => state.movieStore, { getCast, saveMovieData })(GameAlt);
