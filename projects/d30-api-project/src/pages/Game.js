import React, { Component } from 'react';

import { connect } from "react-redux";
import { createQuestion } from "../redux/movies";

class Game extends Component {
  constructor() {
    super()

    this.state = {
      isAnswered: false
    }
    this.style = {
      red: {
        backgroundColor: "red",
      },
      white: {
        backgroundColor: "white",
      },
      green: {
        backgroundColor: "green",

      }
    }
  }


  componentDidMount() {
    this.props.createQuestion(this.props.movieList, this.props.wrongPool);

  }

  // componentWillReceiveProps(newProps) {
  //   if (newProps.movieList.length > 0 && this.props.movieList.length !== newProps.movieList.length) {
  //     this.props.createQuestion();
  //   }
  // }

  handleClick(e) {
    this.setState({ isAnswered: false });
    this.props.createQuestion(this.props.movieList, this.props.wrongPool);
  }

  handleAnswer(e) {
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name);
    this.setState({ isAnswered: true })


  }

  render() {
    const { loading, errMsg, currMovie, answers } = this.props;
    const { title, releaseDate } = currMovie;


    const castItems = answers.map((person, index) => {
      return (
        <li key={person.name + index}  >
          <button className="answer" name={person.name} onClick={(e) => this.handleAnswer(e)} style={!this.state.isAnswered ? this.style.white : person.correctAnswer ? this.style.red : this.style.green}>{person.name}</button>
        </li>

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
          <h3>Which actor was NOT in {title} (released on {releaseDate}):</h3>
          <ul>
            {castItems}
          </ul>
          <button className="nextQ" onClick={(e) => this.handleClick(e)}>Next Question</button>
        </section>
      )
    }
  }
}

export default connect(state => state.movieStore, { createQuestion })(Game);

// NEED TO MAKE THE "NEXT Q" BUTTON HIDDEN UNTIL THE USER CHOOSES AN ANSWER AND IT HAS BEEN EVALUATED AND THE CORRECT ANSWER REVEALED. 

// IF THERE'S TIME, PULL JUST THE YEAR OUT OF RELEASE_DATE AND USE THAT.