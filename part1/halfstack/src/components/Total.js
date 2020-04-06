import React from "react";

function Total(props) {
    return (
        <p>Number of exercises {props.parts.reduce((sum, item) => sum + item.exercises, 0)}</p>
    );
}

export default Total;