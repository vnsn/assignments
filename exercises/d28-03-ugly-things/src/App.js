import React from 'react';

import Form from "./Form";
import List from "./List";

function App(props) {
    return (
        <div className="app">
            <p>I am the ugly things exercise and I have no styling so I am also ugly. :-)</p>
            <Form />
            <List />
        </div>
    )
}

export default App;

// export default connect(mapStateToProps, {})(App);

// connect takes a function and an object and returns 
// the increment right here is 

// export default connect(state => state)(App);


// If this wasn't a contrived example of using redux, we would just store the counter in state and create onClick methods for the plus and minus buttons.

//coolFunction(1)(2) : 

// Two reasons to connect to the redux store
// 1. does the comp need any of the data from the redux store?
// 2. does this comp need to dispatch any acctions?