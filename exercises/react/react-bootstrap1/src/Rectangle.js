import React from "react";

function Rectangle(props){
    const styles = {
        height: "100px",
        width: "25%",
        border: "solid black 1px",
        display: "inline-block",
        verticalAlign: "top",
        backgroundColor: props.backGroundColor,
    }

    return (
        <div style={styles}>
            {props.description}
        </div>
    )
}

export default Rectangle;
