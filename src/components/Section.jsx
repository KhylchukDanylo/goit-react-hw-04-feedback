import React from 'react';
import Statistics from './Statistic';
import FeedbackOptions from './FeedbackOptions';
import './Feedback.modyle.css';

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
    return `${positive}%`;
  }
  addGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  addBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  addNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <FeedbackOptions
          key="optionsFeeb"
          onAddGood={this.addGood}
          onAddNeutral={this.addNeutral}
          onAddBad={this.addBad}
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
