import React, { Component } from 'react';

import { connect } from "react-redux";
import { getCast, saveMovieData } from "../redux/movies";

class GameAlt extends Component {
  componentDidMount() {
    // console.log("i am comp did mount in GameAlt and this is this.props.match.params");
    // console.log(this.props.match.params);

    this.props.saveMovieData(this.props.match.params);
    this.props.getCast(this.props.match.params.id);

    // this.props.chooseRandomMovie(this.props.match.params.movieID);
  }

  // componentWillReceiveProps(newProps) {

  //   console.log("i am comp will receive props in GameAlt and this is newProps.movieList");
  //   console.log(newProps.movieList);

  //   if (newProps.movieList.length > 0 && this.props.movieList.length !== newProps.movieList.length) {
  //     // newProps.getCast(newProps.movieList);
  //     newProps.chooseRandomMovie(newProps.movieList);

  //   }
  // }

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
