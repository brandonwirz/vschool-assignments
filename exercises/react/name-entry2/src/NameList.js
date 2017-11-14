import React from "react";

function NameList(props) {
    return (
        <ol>
            {props.names.map((name, i) => <li key={name + i}>{name}</li>)}
        </ol>
    )
}

export default NameList;
