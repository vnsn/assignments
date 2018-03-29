import React from 'react';
import heroData from "./data.json";
import SuperHero from "./SuperHero";

function SuperHeroList() {

    function speak(hero) {
        alert(`${hero.name} says: ${hero.phrase}.`);
    }

    const heroList = heroData.map(heroObj => 
        <SuperHero 
            key={heroObj.name + heroObj.img} 
            hero={heroObj}
            handleClick={speak}
        />)

    return (
        <div>
            {heroList}
        </div>
    );
}

export default SuperHeroList;
