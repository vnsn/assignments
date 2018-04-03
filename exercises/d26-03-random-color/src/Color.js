import React from 'react';

function Color(props) {
    const {new_color} = props.colorObj;

    let sectionStyle = {
        backgroundColor: `#${new_color}`,
    };

    return (
        <div className="wrapper">
            <header>
                <h1>Random Color</h1>
            </header>
            <div className="random" style={sectionStyle}>
                <p>{new_color}</p>
            </div>
        </div>
    );
}

export default Color;
