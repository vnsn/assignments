import React, { Component } from 'react';
import axios from "axios";

const swApiUrl = "https://swapi.co/api/people/";

class DataDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {},
            errMsg: "",
            loading: true
        }
    }

componentDidMount() {
    console.log(this.props.match.params.personId);
    axios.get(swApiUrl + this.props.match.params.personId)
        .then(response => {
            console.log(response.data);
            this.setState({
                person: response.data,
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
    const { person, errMsg, loading } = this.state;

    const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, url } = this.state.person;

    if (loading) {
        return <p>Loading...</p>
    } else if (errMsg) {
        return <p>Data details no workie workie</p>
    } else {
        return (
            <div className="nerdinfo">
                <h1>{this.state.person.name}</h1>
                <p>Height</p>
                <p>{height}</p>
                <p>Mass</p>
                <p>{mass}</p>
                <p>Hair Color</p>
                <p>{hair_color}</p>
                <p>Skin Color</p>
                <p>{skin_color}</p>
                <p>Eye Color</p>
                <p>{eye_color}</p>
                <p>Birth Year</p>
                <p>{birth_year}</p>
                <p>Gender</p>
                <p>{gender}</p>
           </div>
        )
    }
}
}

export default DataDetails;
