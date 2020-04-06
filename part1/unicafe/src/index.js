import ReactDOM from "react-dom";
import React, { useState } from "react";

import Header from "./components/Header";
import IncButton from "./components/IncButton";
import Statistics from "./components/Statistics";

import "./index.css";

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const state = [
    {
      text: "good",
      key: "good",
      val: good,
      setVal: setGood,
    },
    {
      text: "neutral",
      key: "neutral",
      val: neutral,
      setVal: setNeutral,
    },
    {
      text: "bad",
      key: "bad",
      val: bad,
      setVal: setBad,
    },
  ];

  const incButtonComponents = state.map(data => 
    <IncButton 
      key={data.text} 
      val={data.val} 
      setVal={data.setVal}
      text={data.text}
    />
  );

  return (
    <div>
      <Header />
      {incButtonComponents}
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById("root")
)