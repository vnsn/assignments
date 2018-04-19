import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class HomeAlt extends Component {
  componentDidMount() {
    // console.log("i am comp did mount and this is this.props.movieList");
    // console.log(this.props.movieList);
    // this.props.getCast(this.props.movieList);
  }

  // componentWillReceiveProps(newProps) {

  //   console.log("i am comp will receive props and this is newProps.movieList");
  //   console.log(newProps.movieList);

  //   // if (newProps.movieList.length > 0 && this.props.movieList.length !== newProps.movieList.length) {
  //   //   newProps.getCast(newProps.movieList);
      
  //   // }
  // }

  render() {
    const { loading, errMsg, movieList } = this.props;

    // console.log("i am in HomeAlt render and this is this.props");
    // console.log(this.props);

    const movieItems = movieList.map((movie, index) => {
      return (
        <ul className="castlist" key={movie.id + index}>
          <li>
          <Link to={`/movie/${movie.id}/${movie.title}/${movie.release_date}`} key={movie.id}>{movie.title}</Link>
          </li>
        </ul>
      );
    });

// console.log(movieItems);

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
          <h3>The 20 most popular action movies from 1990 - 2018</h3>
          <p>Click on the name of a movie to see the list of cast members.</p>
          {movieItems}
        </section>
      )
    }
  }
}

export default connect(state => state.movieStore)(HomeAlt);
