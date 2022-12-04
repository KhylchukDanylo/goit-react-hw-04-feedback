import PropTypes from 'prop-types';
import React from 'react';

const FeedbackOptions = ({ onAddGood, onAddNeutral, onAddBad }) => {
  return (
    <div className="feedback">
      <div className="feedback__btn--add">
        <h1 className="feedback__btn--title">Please leave feedback</h1>
        <ul className="feedback__btn--list">
          <li className="feedback__btn--item">
            <button className="feedback__btn--btn" onClick={onAddGood}>
              Good
            </button>
          </li>
          <li className="feedback__btn--item">
            <button className="feedback__btn--btn" onClick={onAddNeutral}>
              Neutral
            </button>
          </li>
          <li className="feedback__btn--item">
            <button className="feedback__btn--btn" onClick={onAddBad}>
              Bad
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onAddGood: PropTypes.func,
  onAddNeutral: PropTypes.func,
  onAddBad: PropTypes.func,
};
