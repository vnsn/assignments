import React, { Component } from "react";

import { connect } from "react-redux";
import { getPlanets } from "./redux/planets"

class PlanetList extends Component {
    componentDidMount() {
        this.props.getPlanets();
    }

    render() {
        const {castList, loading, errMsg} = this.props;
        const planetItems = castList.map((planet, i) => {
            return (
                <div key={planet.name + i}>
                    <h1>{planet.name}</h1>
                    <p>{planet.climate}</p>
                </div>
            )
        })

        if (loading) {
            return (
                <div>...Loading...</div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            return (
                <div>
                    {planetItems}
                </div>
            )
        }

    }
}

const mapStateToProps = state => {
    return state.planetStore;
}

export default connect(mapStateToProps, { getPlanets })(PlanetList);