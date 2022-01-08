import React, { useState } from "react";
import Section from "./Components/Section/Section";
import Stats from "./Components/Stats/Stats";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Notification from "./Components/Notification/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function addFeedbackCount(options) {
    switch (options) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        return;
    }
  }

  function countTotal() {
    return good + neutral + bad;
  }

  function countPositivePercentage() {
    const result = Math.round((good / countTotal()) * 100);
    if (!result) {
      return 0;
    }
    return result;
  }

  // function countPositivePercentage() {
  //   console.log("1")
  //   }

  return (
    <div>
      <Section title="Cafe Expresso. Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onFeedbackIncrement={addFeedbackCount}
        />
      </Section>
      {countTotal() === 0 ? (
        <Notification message="No feedbacks yet" />
      ) : (
        <Section title="Statistics">
          <Stats
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal()}
            positivePercentage={countPositivePercentage()}
          />
        </Section>
      )}
    </div>
  );
}

export default App;
