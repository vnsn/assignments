import React from 'react';


function SuperHero(props) {

    return (
        <div className="hero" onClick={() => props.handleClick(props.hero)}>
            <img className="heroImg" src={props.hero.imgUrl} alt={props.hero.name}/>
            <h2 className="heroName">{props.hero.name}</h2>
        </div>
    );
}

export default SuperHero;

{/* discussion about event handlers
    <h2 onClick={() => props.handleClick(props.hero)}>{props.hero.name}</h2>
    <h2 onClick={(event) => props.handleClick(props.hero)}>{props.hero.name}</h2>
    <h2 onClick={props.handleClick}>{props.hero.name}</h2> */}