import css from './FeedbackOptions.module.css';
import React, { Component } from 'react';

class FeedbackOptions extends Component {
  static defaultProps = {
    options: [],
  };
  render() {
    return (
      <div className={css.feedback}>
        <h1 className={css.feedback__title}>Please leave feedback</h1>
        <div className={css.feedback__buttons}>
          {this.props.options.map(btn => (
            <button
              className={css.feedback_buttons}
              value={btn}
              key={btn}
              type="button"
              onClick={e => this.props.onLeaveFeedback(e)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default FeedbackOptions;
