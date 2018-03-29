import React from "react";

function Location(props) {

    return (
        <div className="spotContainer">
            <div>
                <img src={props.spot.imgURL} alt={props.spot.place} />
            </div>
            <div>
                <h1>{props.spot.place}</h1>
                <p>Price: {props.spot.price}</p>
                <p>When to go: {props.spot.timeToGo}</p>

            </div>
        </div>
    );
}

export default Location;
