import React from "react";

import Pet from "./Pet"

function Friend(props) {

    const petList = props.pets.map((animal, i) => <Pet key={animal.name + i} beast={animal}></Pet>);

        return (
            <div>
                <h1>Name: {props.human.name}</h1>
                <h2>Age: {props.human.age}</h2>
                <h3>Pets</h3>
                {petList}
                <hr/>
            </div>
        );
}

export default Friend;

// friends is the array of person objects. each object is a person with name and age
// human is just a different name for the person object

// pets is the array of animal objects. each object is an animal with name and breed.
// beast is a diff name for the animal object
