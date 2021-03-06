/* 
The job of this file is to 
1. export individual actions 
2. default export the reducer
*/

const initialState = {
    data: []
}

const thingReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_THING":
            return {
                data: [...state.data, action.thing]
            }
        case "REMOVE_THING":
            return {
                data: state.data.filter((cat, i) => i !== action.index)
            }
        case "EDIT_THING":
            return {
                data: state.data.map((cat, i) => {
                    if (i === action.index) {
                        return action.newThing;
                    } else {
                        return cat;
                    }
                })
            }    
        default:
            return state;
    }
}

// these are "action creators"
export const addThing = thing => {
    return {
        type: "ADD_THING",
        thing
    }
}

export const removeThing = index => {
    return {
        type: "REMOVE_THING",
        index 
    }
}

export const editThing = (index, newThing) => {
    return {
        type: "EDIT_THING",
        index,
        newThing 
    }
}

export default thingReducer;