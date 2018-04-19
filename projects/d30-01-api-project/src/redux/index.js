import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import movieReducer from "./movies";
import pointsReducer from "./pointsreducer";

const store = createStore(combineReducers({movieStore: movieReducer, pointsStore: pointsReducer}), applyMiddleware(thunk));

// store.subscribe(() => {
//     console.log(store.getState());
// })

export default store;

