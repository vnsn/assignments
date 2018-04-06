import React from 'react';
import { connect } from "react-redux";
import { increment } from "./redux";
import { decrement } from "./redux";
import { divide } from "./redux";
import { multiply } from "./redux";

function App(props) {
    return (
        <div className="app">
            <button onClick={props.divide}>/</button>
            <button onClick={props.decrement}>-</button>
            <h1>{props.counter}</h1>
            <button onClick={props.increment}>+</button>
            <button onClick={props.multiply}>*</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, {increment: increment, decrement, divide, multiply})(App);
// connect takes a function and an object and returns 
// the increment right here is 

// export default connect(state => state)(App);


// If this wasn't a contrived example of using redux, we would just store the counter in state and create onClick methods for the plus and minus buttons.

//coolFunction(1)(2) : 

// Two reasons to connect to the redux store
// 1. does the comp need any of the data from the redux store?
// 2. does this comp need to dispatch any acctions?