import React from "react";
import DisplayHeader from "./DisplayHeader";
import Statistic from "./Statistic";

function Statistics({ good, neutral, bad }) {
    const countAll = good + neutral + bad;
    const average = (good - bad) / Math.max(countAll, 1);
    const positive = good / Math.max(countAll, 1) * 100;
  
    const data = [
        {
            text: "good",
            val: good,
        },
        {
            text: "neutral",
            val: neutral,
        },
        {
            text: "bad",
            val: bad,
        },
        {
            text: "all",
            val: countAll,
        },
        {
            text: "average",
            val: average,
        },
        {
            text: "positive",
            val: `${positive} %`,
        },
    ];
  
    const displayContent =
        countAll === 0 
            ? <p>No feedback given</p>
            : <table>
                <tbody>
                    {data.map(data => 
                        <Statistic
                            key={data.text}
                            text={data.text}
                            val={data.val}
                        />
                    )}
                </tbody>
            </table>;

    return (
        <>
            <DisplayHeader />
            {displayContent}
        </>
    );
}

export default Statistics;