import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/";
import App from "./App";
import "./style.css";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));


// store is lowercase because it's not a component
// store doesn't have {} because we will "default export" it.
// {Provider} is a named export

// Higher order component "connects" other components to the redux store