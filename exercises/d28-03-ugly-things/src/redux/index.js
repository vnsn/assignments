import { createStore, combineReducers } from "redux";
/*
Normal syntax:
import thingReducer from "./cats";
const store = createStore(combineReducers({cats: thingReducer})) ;

But since thingReducer is the _default_ export from ./cats, we can call it whatever we want. 
*/

import things from "./things";

// gather all the reducers and cram them together into one store and export it.
const store = createStore(combineReducers({things})) ;

// store.subscribe(() => {
//     console.log(store.getState());
// })

export default store;
