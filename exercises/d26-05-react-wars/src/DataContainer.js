import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import axios from "axios";
import DataList from "./DataList";
import DataDetails from "./pages/DataDetails";

const swApiUrl = "https://swapi.co/api/people/";

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
    axios.get(swApiUrl)
      .then(response => {
        this.setState({
          people: response.data.results,
          loading: false
        })
      })
      .catch(err => {
        this.setState({
          errMsg: err.message,
          loading: false
        })
      })
  }

  render() {
    const { people, errMsg, loading } = this.state;

    if (loading) {
      return <p>Loading...</p>
    } else if (errMsg) {
      return <p>No workie workie</p>
    } else {
      return (
        <div className="content">
          <div className="sidebar">
            <DataList people={people} />
          </div>
          <div className="right">
            <h2>Click on a name in the left sidebar to see their physical characteristics.</h2>
            <Switch>
            <Route exact path="/person/:personId" component={DataDetails}></Route>
          </Switch>
          </div>
        </div>
      )
    }
  }
}

export default DataContainer;
