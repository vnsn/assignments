import React from 'react';

function Name(props) {

    const { name, image } = props.person;

    var sectionStyle = {
        backgroundImage: `url(${image})`
      };

    return (
        <div className="enemy" style={sectionStyle}>
            <p>{name}</p>
        </div>
    );
}

export default Name;


            {/* <img className="enemyImg" src={image} alt={name}/> */}