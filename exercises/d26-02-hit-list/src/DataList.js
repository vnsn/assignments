import React from 'react';
import Name from "./Name";

function DataList(props) {
    const { people } = props;

    const names = people.map((personObj, index) =>
        <Name
            key={personObj.name + index}
            person={personObj}
        />)

    return (
        <div className="wrapper">
            <header>
                <h1>Don Corleone's Hit List</h1>
            </header>
            <div>
                <div className="hitlist">
                    {names}
                </div>
            </div>
        </div>
    );
}

export default DataList;
