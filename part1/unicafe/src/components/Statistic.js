import React from "react";

function Statistic({ val, text }) {
    return (
        <tr>
            <td>{text}</td>
            <td>{val}</td>
        </tr>
    );
}

export default Statistic;