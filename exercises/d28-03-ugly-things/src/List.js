import React from 'react'
import {connect} from "react-redux";
import {removeThing} from "./redux/things"

import Item from "./Item";

function List(props) {
    console.log(props.data)
    const thingComponents = 
        props.data.map((thing, i) => 
        <Item
            key={thing.imgUrl + i}{...thing} 
            removeThing={props.removeThing}
            index={i}
         />)
    return (
        <div>
            {thingComponents}
        </div>
    )
}

const mapStateToProps = state => {
    return state.things;
}

export default connect(mapStateToProps, {removeThing})(List);
