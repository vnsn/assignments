import React, { Component } from 'react';

import { connect } from "react-redux";
import { getCast } from "../redux/movies";

class Game extends Component {
  componentDidMount() {
    console.log("i am comp did mount and this is this.props.movieList");
    console.log(this.props.movieList);
    // this.props.getCast(this.props.movieList);
  }

  componentWillReceiveProps(newProps) {

    console.log("i am comp will receive props and this is this.props.movieList");
    console.log(this.props.movieList);

    if (newProps.movieList.length > 0 && this.props.movieList.length !== newProps.movieList.length) {
      newProps.getCast(newProps.movieList);
      
    }
  }

  render() {
    const { castList, loading, errMsg, title, releaseDate } = this.props.currMovie;

    // need to pick 3 random cast members.
    // then pick a random person who is NOT in the movie

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

export default connect(state => state.movieStore, { getCast })(Game);
