import React from 'react';
import Statistics from './Statistic';
import FeedbackOptions from './FeedbackOptions';
import './Feedback.modyle.css';
import { getValue } from '@testing-library/user-event/dist/utils';

class Section extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback({ good, neutral, bad }) {
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage({ good, neutral, bad }) {
    const positive = Math.round((good * 100) / (good + neutral + bad));
    if (Number.isNaN(positive)) {
      return 0;
    }
    return positive;
  }

  onLeaveFeedback = value => {
    const nameStat = value.toLowerCase();
    this.setState(prevState => {
      console.log();

      return {
        [nameStat]: prevState[nameStat] + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <FeedbackOptions
          key="optionsFeeb"
          onLeaveFeedback={this.onLeaveFeedback}
          options={['good', 'neutral', 'bad']}
        />
        <Statistics
          key="statistics"
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback(this.state)}
          positivePercentage={this.countPositiveFeedbackPercentage(this.state)}
        />
      </div>
    );
  }
}
export default Section;
