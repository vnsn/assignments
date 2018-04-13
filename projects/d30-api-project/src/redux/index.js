import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import movieReducer from "./movies";

const store = createStore(combineReducers({movieStore: movieReducer}), applyMiddleware(thunk));

// store.subscribe(() => {
//     console.log(store.getState());
// })

export default store;

