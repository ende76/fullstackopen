import React from "react";

function IncButton({ val, setVal, text }) {
    return (
        <button onClick={() => setVal(val + 1)}>{text}</button>
    );
}

export default IncButton;