import React, { useState } from 'react';

const Button = ({ handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const App = () => {
  //save clicks of each button to its own state 
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGoodClick = () => {
    setAll(allClicks + 1);
    setGood(good + 1);
    setAverageValue(good, bad, allClicks);
    setPositiveValue(good, allClicks);
    // setAverage(average = (good - bad)/allClicks);
    // setPositive(positive = (good/allClicks) * 100);
  }

  const handleNeutralClick = () => {
    setAll(allClicks + 1);
    setNeutral(neutral + 1);
    setAverageValue(good, bad, allClicks);
    setPositiveValue(good, allClicks);
    // setAverage(average = (good - bad)/allClicks);
    // setPositive(positive = (good/allClicks) * 100);
  }

  const handleBadClick = () => {
    setAll(allClicks + 1);
    setBad(bad + 1);
    setAverageValue(good, bad, allClicks);
    setPositiveValue(good, allClicks);
    // setAverage((good - bad)/allClicks);
    // setPositive((good/allClicks) * 100);
  }

  const setAverageValue = (good, bad, allClicks) => {
    setAverage((good - bad)/allClicks);
  }

  const setPositiveValue = (good, allClicks) => {
    setPositive((good/allClicks) * 100);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {allClicks}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  );
}

export default App;
