import React from 'react';

function Name(props) {

    const { name, image } = props.person;

    var sectionStyle = {
        backgroundColor: "red",
      };

    return (
        <div className="random" style={sectionStyle}>
        </div>
    );
}

export default Name;


            {/* <img className="enemyImg" src={image} alt={name}/> */}