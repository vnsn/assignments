import React from 'react';
import SuperHeroList from './SuperHeroList';

function App() {

    return (
        <div>
            <SuperHeroList />
        </div>
    )
}

export default App;

// Basics of rendering a button... Could put this in the App function above
// NOT recommended.

    // function buttonWasClicked() {
    //     alert("Button was clicked");
    // }
    // return <button onClick={buttonWasClicked}>Click me</button>

    // Or could use anonymous function in the onClick...
    // return <button onClick={() => alert("Clicked")}>Click me</button>
