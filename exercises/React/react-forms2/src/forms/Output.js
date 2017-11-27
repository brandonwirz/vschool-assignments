import React, {Component} from "react";

function Output(props){
    return (
        <div>
            <h1>{props.first} {props.last}</h1>
            <h5>{props.age}</h5>
            <p>{props.diet}</p>
        </div>
    )
}

export default Output;
