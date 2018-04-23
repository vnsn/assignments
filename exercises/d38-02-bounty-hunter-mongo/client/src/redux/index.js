import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import bountyReducer from "./bounties-redux";

const store = createStore(combineReducers({bounties: bountyReducer}), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;