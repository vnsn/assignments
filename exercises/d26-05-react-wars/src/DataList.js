import React from 'react';

import { Link } from 'react-router-dom';

function DataList(props) {
    const { people } = props;

    const names = people.map((personObj, index) => {
        return (
            <div className="nerdname" key={"nerdname" + index}>
                <p><Link to={`/person/${index + 1}`} key={index + 1}>{personObj.name}</Link></p>
            </div>
        );
    });
        
    return (
        <div className="nerdlist">
            {names}
        </div>
    );
}

export default DataList;
