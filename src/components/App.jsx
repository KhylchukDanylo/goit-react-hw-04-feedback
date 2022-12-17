import { useState } from 'react';
import Statistics from './Statistic/Statistic';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { getValue } from '@testing-library/user-event/dist/utils';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const positive = Math.round((good * 100) / (good + neutral + bad));
    if (Number.isNaN(positive)) {
      return 0;
    }
    return positive;
  };

  const onLeaveFeedback = value => {
    const nameStat = value.toLowerCase();
    switch (nameStat) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };
  return (
    <div>
      <FeedbackOptions
        key="optionsFeeb"
        onLeaveFeedback={onLeaveFeedback}
        options={['good', 'neutral', 'bad']}
      />
      <Statistics
        key="statistics"
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </div>
  );
};
