import React, { Component } from 'react';

import axios from "axios";
import DataList from "./DataList";

// const swApiUrl = "https://swapi.co/api/";
const mafiaApiUrl = "http://api.vschool.io:6543/hitlist.json";

class DataContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      errMsg: "",
      loading: true
    }
  }

  componentDidMount() {
    axios.get(mafiaApiUrl)
      .then(response => {
        // console.log(response.data);
        this.setState({
          people: response.data,
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
    const { people, errMsg, loading } = this.state;
    if (loading) {
      return <p>Loading...</p>
    } else if (errMsg) {
      return <p>No workie workie</p>
    } else {
      return (
        <div>
          <DataList people={people} />
        </div>
      )
    }
  }
}

export default DataContainer;

/* 
    return (
      !errMsg ?
      // render your stuff
      <div>
        container
        <NameList  />
      </div>
      : <p>No workie workie</p>
    )
*/