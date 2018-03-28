import React from "react";
import Friend from "./Friend";

const friends = [  
    {
      name: "Ben",
      age: 29,
      pets: [
        {
          name: "spot",
          breed: "tabby"
        },{
          name: "John Johnson",
          breed: "husky"
        },{
          name: "Bear the bear",
          breed: "Grizzly"
        }
      ]
    },{
      name: "Bob",
      age: 31,
      pets: [
        {
          name: "Sally",
          breed: "Australian Shepard"
        }
      ]
    },{
      name: "Marcus",
      age: 25,
      pets: [
        {
          name: "Indy",
          breed: "Akita"
        },{
          name: "Anna",
          breed: "persian cat"
        }
      ]
    },{
      name: "Jacob",
      age: 20,
      pets: [
        {
          name: "fluffy",
          breed: "sphynx cat"
        },{
          name: "patches",
          breed: "sphynx cat"
        },{
          name: "tiger",
          breed: "sphynx cat"
        },{
          name: "oscar",
          breed: "sphynx cat"
        }
      ]
    }
  ]

function FriendsList() {

    const friendsLis = friends.map((person, i) => <Friend key={person.name + i} human={person} pets={person.pets}></Friend>);

    return (
        <div>
            {friendsLis}
        </div>
    );

}

export default FriendsList;

// key should go on element you're returning

// To send props to the List component for it to build the list (ES5)
    // const friendsLis = friends.map(function(person, i) {
    //     return <List key={person.name + i} human={person} index={i}></List>
    // })

// Original way - just having one component that returns <li> elements
    // const friendsLis = friends.filter(person => person.age >30)
    // .map((person, i) => <li key={person.name + i}>{person.name} {person.age}</li>);
