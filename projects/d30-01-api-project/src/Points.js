import React, { Component } from "react";

import { connect } from "react-redux";

class Points extends Component {
  render() {
    return (
        <section className="points">
          <h3>Points</h3>
          <ul>
            <li>Questions: {this.props.questions}</li>
            <li>Correct: {this.props.correct}</li>
          </ul>
        </section>
    );
  }
}

export default connect(state => state.pointsStore, null)(Points);
