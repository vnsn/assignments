import React from 'react';

function Badge(props) {
    const personList = props.people.map((personObj, index) => {
        const { firstName, lastName, email, birthCity, phone, faveFood, about } = personObj;

        const formattedPhone = num => {
            return (num.length === 10) ? num.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3") : num;
        }

        let sectionStyle = {
            backgroundColor: `${(index % 2 === 0) ? "red" : "navy" }`,
        };

        return (
            <div className="display-badge" style={sectionStyle} key={personObj.firstName + index}>
                <div className="badge-header">
                    <h1 className="hello">HELLO</h1>
                    <p>my name is</p>
                </div>
                <div className="details">
                    <p>Name: {firstName} {lastName} </p>
                    <p>Phone: {formattedPhone(phone)} </p>
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
Once finished, re-enable validation code in canBeSubmitted() in ./Form !!

*/