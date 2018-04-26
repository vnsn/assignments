import React from 'react';
import AddForm from './Posts/AddForm';
import List from './Posts/List';

function App(props) {
    return (
        <div className="wrapper">
            <header>
                <h1>Rock the Vote &nbsp;</h1>
            </header>
            <main>
                <h1>Add new issue</h1>
                <AddForm />
                <h1>Issues</h1>
                <List />

            </main>
        </div>
    )
}

export default App;
