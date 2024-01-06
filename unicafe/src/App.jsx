import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

// statistics line component

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{value}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

// statistics component

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100 + "%";

  return (
    <div>
      <h1>statistics</h1>
      {all > 0 ? (
        <>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Good button click handler
  const handleGoodClick = () => {
    setGood(good + 1);
  };

  // Neutral button click handler
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  // Bad button click handler
  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />

      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
