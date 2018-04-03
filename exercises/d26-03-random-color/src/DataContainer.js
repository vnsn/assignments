import React, { Component } from 'react';

import axios from "axios";
import Color from "./Color";

const colorUrl = "http://www.colr.org/json/color/random";

class DataContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: {},
      errMsg: "",
      loading: true
    }
  }

  componentDidMount() {
    axios.get(colorUrl)
      .then(response => {
        // console.log(response.data);
        this.setState({
          color: response.data,
          loading: false
        })
      })
      .catch(err => {
        // console.log(err);
        this.setState({
          errMsg: err.message,
          loading: false
        })
      })
  }

  render() {
    // console.log(this.state);
    const { color, errMsg, loading } = this.state;
    if (loading) {
      return <p>Loading...</p>
    } else if (errMsg) {
      return <p>No workie workie</p>
    } else {
      return (
        <div>
          <Color colorObj={color} />
        </div>
      )
    }
  }
}

export default DataContainer;