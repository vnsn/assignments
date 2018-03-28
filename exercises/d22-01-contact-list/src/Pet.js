import React from "react";

function Pet(props) {

    return (
        <ul>
            <li>
                <dl>
                    <dt>Name: {props.beast.name}</dt>
                    <dd>- Breed: {props.beast.breed}</dd>
                </dl>
            </li>
        </ul>
    );
}

export default Pet;
