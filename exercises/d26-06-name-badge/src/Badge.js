import React from 'react';

function Badge(props) {
    const personList = props.people.map((personObj, index) => {
        const { firstName, lastName, email, birthCity, phone, faveFood, about } = personObj;
        return (
            <div className="display-badge">
                <div className="badge-header">
                    <h1 className="hello">HELLO</h1>
                    <p>my name is</p>
                </div>
                <div className="details" key={personObj.firstName + index}>
                    <p>Name: {firstName} {lastName} </p>
                    <p>Phone: {phone} </p>
                    <p>Place of birth: {birthCity} </p>
                    <p>Favorite food: {faveFood}  </p>
                    <p>Email: {email} </p>
                    <div className="about">
                        <p>{about}</p>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <div>
            {personList}
        </div>
    );
}

export default Badge;

/* 
To do: 
Make the color of the badge heading background alternate on each list item (ie Red, Blue, Red, Blue (see the dynamic rendering write up)

Format the phone number on the badge display to show dashes in the number like the image in the exercise

Once finished, re-enable validation code in canBeSubmitted() in ./Form !!

*/