import React, { useState } from 'react';

const Header = ({ title }) => (
  <h1>{title}</h1>
);

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const Statistic = ({ label, value }) => (
  <p>{label} {value}</p>
);

const App = () => {
  //save clicks of each button to its own state 
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = all ? (good - bad) / all : 0;
  const positive = all ? (good / all) * 100 : 0;

  const handleGoodClick = () => {
    setGood(good + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <Header title="give feedback" />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Header title="statistics" />
      <Statistic label="good" value={good} />
      <Statistic label="neutral" value={neutral} />
      <Statistic label="bad" value={bad} />
      <Statistic label="all" value={all} />
      <Statistic label="average" value={average} />
      <Statistic label="positive" value={positive + "%"} />
    </div>
  );
}

export default App;
