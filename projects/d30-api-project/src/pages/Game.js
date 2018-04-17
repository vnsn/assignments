import React, { Component } from 'react';

import { connect } from "react-redux";
import { createQuestion } from "../redux/movies";
import { incrementQuestions, incrementCorrect } from "../redux/pointsreducer";


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

  handleClick(e) {
    this.setState({ isAnswered: false });
    this.props.createQuestion(this.props.movieList, this.props.answerPool);
  }

  handleAnswer(e) {
    const { value } = e.target;
    this.setState({ isAnswered: true });
    this.props.incrementQuestions();
    let correctID = this.props.answers.find(person => person.correctAnswer).id;
    if (parseInt(value, 10) === correctID) {
      this.props.incrementCorrect();
    }
  }

  render() {
    const { loading, errMsg, currMovie, answers } = this.props;
    const { title, releaseDate } = currMovie;

    const castItems = answers.map((person, index) => {
      return (
        <li key={person.name + index}  >
          <button className="answer" name={person.name} value={person.id} onClick={(e) => this.handleAnswer(e)} style={!this.state.isAnswered ? this.style.white : person.correctAnswer ? this.style.green : this.style.white}>{person.name}</button>
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

export default connect(state => state.movieStore, { createQuestion, incrementQuestions, incrementCorrect })(Game);

// export default connect(state => state.movieStore, { createQuestion, incrementQuestions, incrementCorrect })(Game);

// NEED TO MAKE THE "NEXT Q" BUTTON HIDDEN UNTIL THE USER CHOOSES AN ANSWER AND IT HAS BEEN EVALUATED AND THE CORRECT ANSWER REVEALED. 

// IF THERE'S TIME, PULL JUST THE YEAR OUT OF RELEASE_DATE AND USE THAT.