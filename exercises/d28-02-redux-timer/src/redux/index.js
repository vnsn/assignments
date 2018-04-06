import { createStore } from "redux";

export function increment(){
    return {
        type: "INCREMENT"
    }
}

export function decrement() {
    return {
        type: "DECREMENT"
    }
}

export function divide() {
    return {
        type: "DIVIDE"
    }
}

export function multiply() {
    return {
        type: "MULTIPLY"
    }
}


function reducer(state=0, action) {
    console.log(action);
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "DIVIDE":
            return Math.round(state / 2);  
        case "MULTIPLY":
            return state * 2;  
        default:
            return state;
    }
}

export default createStore(reducer);
